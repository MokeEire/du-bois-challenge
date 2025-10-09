<script>
  import MarkerStyle from "$lib/components/MarkerStyle.svelte";
  
  import { fade } from "svelte/transition"; // Import fade transition
  import AxisX from "./AxisX.svelte"; // Import the Tooltip component
  // Import necessary D3 functions
  import { scaleLinear } from "d3-scale";
  import { extent, max, min } from "d3-array";
  import { area, curveLinear, line } from 'd3-shape';

  let { data } = $props();

  // Access the CSV data correctly - it's at data.csvData, not data.data
  let csvData = $derived(data?.csvData || []);
  //console.log('Raw CSV Data:', data); // Log the entire data object to see its structure

  //console.log("CSV Data:", data?.csvData); // This should now work

  // Convert string values to numbers for visualization
  let processedData = $derived(csvData.map((d) => ({
    Year: +d.Year, // Convert to Date object
    Free: +d.Free/100.0, // Convert string to number
    Enslaved: +d.Slave/100.0, // Convert string to number
  })));

  //$: console.log("Processed Data:", processedData);

  let width = $state(300);
  let height = $derived(width * 1);

  const padding = { top: 20, right: 30, bottom: 20, left: 30 };

  let yScale = $derived(scaleLinear()
    .domain([0, 1])
    .range([padding.top, height - padding.bottom]));

  let xScale = $derived(scaleLinear()
    .domain(extent(processedData, (d) => d.Year))
    .range([padding.left, width - padding.right]));

  //$: console.log("Extent of year: ", extent(processedData, (d) => d.Year))
  // Area functions stolen from data viz with svelte:
  // https://datavisualizationwithsvelte.com/visualizations/area-chart
  // Generalized line and area generator functions
  function generateLinePath(data, yField) {
    return line()
      .x((d) => xScale(d.Year))
      .y((d) => yScale(+d[yField]))
      .curve(curveLinear)(data);
  }

  function generateFreePath(data) {
    return area()
      .x((d) => xScale(d.Year))
      .y0(yScale(0))
      .y1((d) => yScale(d.Free))
      .curve(curveLinear)(data);
  }
  function generateEnslavedPath(data) {
    return area()
      .x((d) => xScale(d.Year))
      .y0((d) => yScale(d.Free))
      .y1((d) => yScale(d.Free+d.Enslaved))
      .curve(curveLinear)(data);
  }
  function generateFreeArea(data, xScale, yScale) {
    
    let minX = min((data), (d) => d.Year)
    let maxX = max((data), (d) => d.Year)
    let path = `M${data.map((p) => `${xScale(p.Year)},${yScale(p.Free)}`).join('L')}`
    return `${path}L${xScale(maxX)},${yScale(0)}L${xScale(minX)},${yScale(0)}Z`
  }
  function generateEnslavedArea(data, xScale, yScale) {
    
    let minX = min((data), (d) => d.Year)
    let maxX = max((data), (d) => d.Year)
    let path = `M${data.map((p) => `${xScale(p.Year)},${yScale(p.Free)}`).join('L')}`
    return `${path}L${xScale(maxX)},${yScale(1)}L${xScale(minX)},${yScale(1)}Z`
  }

  let enslavedPath = $derived(generateEnslavedPath(processedData))

  let freeArea = $derived(generateFreeArea(processedData, xScale, yScale))
  let enslavedArea = $derived(generateEnslavedArea(processedData, xScale, yScale))

  let hoveredData;
</script>

<div bind:clientWidth={width}>
  <svg {width} {height} xmlns="http://www.w3.org/2000/svg">
    <MarkerStyle colour={'black'} direction={'vertical'}/>
    <AxisX {xScale} {padding} />
    <!-- Area Paths -->
     <path
        class="area-path area-path-2"
        d={enslavedArea}
        fill="#141414" stroke="black"
        filter="url(#markerBlack)"/>
        <MarkerStyle colour={'green'} direction={'vertical'}/>
        <defs>
    <clipPath id="freeClip">
      <path
        class="area-path area-path-2"
        d={freeArea}/>
    </clipPath>
  </defs>
      <path
        class="area-path area-path-1"
        d={freeArea}
        fill="#247e50" stroke="black"
        clip-path="url(#freeClip)"
        filter="url(#markerGreen)" />
      
    {#each processedData.sort((a, b) => a.Year - b.Year) as d, i}
      <line
            x1={xScale(d.Year)}
            y1={yScale(0)}
            x2={xScale(d.Year)}
            y2={yScale(d.Free)-padding.top}
            stroke="black"
            stroke-width="2"
            stroke-opacity=".5"
        />
      <text
        class="label"
        x={xScale(d.Year)}
        y={yScale((d.Free < .5 ? d.Free : .1)) - 10}
        dx="2"
        >{(d.Free*100).toLocaleString('en-US', {maximumFractionDigits: 0})}%</text>
    {/each}

    <text class="category-label free"
      x={width / 2}
      y={yScale(0) + padding.top}
      >Free — Libre</text>

    <text class="category-label"
      x={width / 2}
      y={yScale(.4)}
      >
      <tspan x={width / 2}>Slaves</tspan>
      <tspan x={width / 2} dy="2.5rem">Esclaves</tspan>
    </text>
  </svg>
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,100..900;1,100..900&display=swap");

  path {
    transition: opacity 500ms ease;
    padding: 2px;
  }
  .label {
    font-size: 1.1rem;
    font-weight: 800;
    text-anchor: middle;
    dominant-baseline: middle;
    opacity: .9
  }

  .category-label {
    font-weight: 600;
    text-anchor: middle;
    dominant-baseline: hanging;
    font-size: 2.25rem;
    fill: var(--bg-color);
    opacity: .9;
  }

  .category-label.free {
    fill: var(--db-black);
    font-size: 1.5rem;
    font-weight: 800;
  }
  .year {
    font-weight: 100;
    text-anchor: end;
    dominant-baseline: middle;
    font-size: 1.1rem;
    opacity: 0.75;
  }
  .land {
    text-anchor: start;
    dominant-baseline: middle;
    font-size: 1rem;
    font-weight: 800;
    opacity: 0.75;
    pointer-events: none; /* Prevents text from blocking mouse events */
  }
  svg {
    overflow: visible;
  }
</style>
