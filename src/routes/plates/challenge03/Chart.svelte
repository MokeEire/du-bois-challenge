<script>
  import { fade } from "svelte/transition"; // Import fade transition
  import Tooltip from "./Tooltip.svelte"; // Import the Tooltip component
  import MarkerStyle from "$lib/components/MarkerStyle.svelte"; // Import the MarkerStyle component
  // Import necessary D3 functions
  import { scaleLinear } from "d3-scale";
  import { max } from "d3-array";

  export let data; // This is the full data object from +page.js

  // Access the CSV data correctly - it's at data.csvData, not data.data
  $: csvData = data?.csvData || [];
  //console.log('Raw CSV Data:', data); // Log the entire data object to see its structure

  //console.log("CSV Data:", data?.csvData); // This should now work

  // Convert string values to numbers for visualization
  $: processedData = csvData.map((d) => ({
    Year: +d.Date, // Convert to Date object
    Land: +d.Land, // Convert string to number
  }));

  //$: console.log("Processed Data:", processedData);

  let width = 300;
  $: height = width * 1.2;

  const padding = { top: 20, right: 40, bottom: 20, left: 80 };

  $: yScale = scaleLinear()
    .domain([0, processedData.length])
    .range([padding.top, height - padding.bottom]);

  $: xScale = scaleLinear()
    .domain([0, max(processedData, (d) => d.Land)])
    .range([padding.left, width - padding.right - padding.left]);

  let hoveredData;
</script>

<div bind:clientWidth={width}>
  <svg {width} {height} xmlns="http://www.w3.org/2000/svg">
    <MarkerStyle />
    
    {#each processedData.sort((a, b) => a.Year - b.Year) as d, i}
      <rect
        x={xScale(0)}
        y={yScale(i)}
        width={xScale(d.Land)}
        height={16}
        fill="#dc143c"
        stroke="black"
        stroke-width="1"
        fill-opacity=".95"
        stroke-opacity=".5"
        opacity={hoveredData ? (hoveredData == d ? 1 : 0.45) : 0.85}
        filter="url(#markerRed)"
        tabindex="0"
        in:fade
        on:mouseover={() => {
          hoveredData = d;
        }}
        on:focus={() => {
          hoveredData = d;
        }}
        on:mouseleave={() => {
          hoveredData = null;
        }}
        on:focusout={() => {
          hoveredData = null;
        }}
      />
      <text
        class="year"
        x={padding.left}
        y={yScale(i)}
        dx="-5"
        dy="9"
        opacity=".9"
        on:mouseover={() => {
          hoveredData = d;
        }}
        on:focus={() => {
          hoveredData = d;
        }}
        on:mouseleave={() => {
          hoveredData = null;
        }}
        on:focusout={() => {
          hoveredData = null;
        }}>{d.Year}</text
      >
      {#if (i === 0) | (i == processedData.length - 1)}
        <text
          class="land"
          x={xScale(d.Land / 2)}
          y={yScale(i)}
          dy="9"
          opacity=".9">{d.Land.toLocaleString()}</text
        >
      {:else if hoveredData == d}
        <text
          class="land"
          x={xScale(d.Land / 2)}
          y={yScale(i)}
          dy="9"
          opacity=".9"
          in:fade={{ duration: 500 }}
          >{d.Land.toLocaleString("en-US", { maximumFractionDigits: 0 })}</text
        >
      {/if}
    {/each}
  </svg>
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,100..900;1,100..900&display=swap");

  rect {
    transition: opacity 500ms ease;
    padding: 2px;
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
