<script>
    // This is where logic lives
    //import AxisX from "$components/AxisX.svelte";
    //import AxisY from "$components/AxisY.svelte";
    //import Tooltip from "./components/Tooltip.svelte";
    //import csvData from "./data/data.csv";
  
    import { onMount } from "svelte";
    import { scaleLinear } from "d3-scale";
    import { interpolate, interpolateNumber } from "d3-interpolate";
    import { csv } from "d3-fetch";
    import { max } from "d3-array";
    import {fly} from "svelte/transition";

    //$: data = await d3.csv(csvData); // [{"Hello": "world"}, …]
    let data = [];
    onMount(async function() {
		data = await csv('./challenge02/data.csv', (d) => ({
			...d,
			year: +d.Year,
			slave: +d.Slave,
			free: +d.Free
		}));
		console.log(data);
	});
  
    let width = 600;
    let height = 800;
  
    const margin = {
      top: 25,
      right: 15,
      bottom: 20,
      left: 60,
    };
  
    $: innerWidth = width - margin.left - margin.right;
    let innerHeight = height - margin.top - margin.bottom;

    const xTicks = [3, 2, 1, 0];
	const yTicks = [1790, 1800, 1810, 1820, 1830, 1840, 1850, 1860, 1870];

    $: xScale = scaleLinear()//.clamp(true)
    .domain([0, 3]) // Input
    .range([innerWidth, 0]); // Output
    $: xScaleClamp = scaleLinear().clamp(true)
    .domain([0, 3]) // Input
    .range([innerWidth, 0]); // Output
    $: xScaleInterpolate = scaleLinear().interpolate(50, 100)
    .domain([0, 3]) // Input
    .range([innerWidth, 0]); // Output

    let yScale = scaleLinear()
    .domain([1790, 1871]) // Input
    .range([0, innerHeight]); // Output
  
    $: pathFree = `M${data.map((d) => `${xScale(d.free > 3 ? 3: d.free)},${yScale(d.year > 1860 ? 1863 : d.year)}`).join('L')}`;
    $: areaSlave = `M${xScale(3)},${yScale(1790)}L${xScale(0)},${yScale(1790)}L${xScale(0)},${yScale(1870)}L${xScale(3)},${yScale(1870)}Z`
    $: areaFree = `${pathFree}L${xScale(3)},${yScale(1790)}L${xScale(0)},${yScale(1790)}Z`;
    
    
  
  </script>
<div class="chart-container" bind:clientWidth={width}>
    <!-- Svelte {#each} block-->
    <svg {width} {height}>
      <!-- x axis -->
		<g class="axis x-axis">
			{#each xTicks as tick}
				<g class="tick tick-{tick}" transform="translate({xScale(tick)},0)">
					<line y1="{margin.top}" y2="8" x1="0" x2="0" />
					<text>{tick}%</text>
				</g>
			{/each}
		</g>

        <!-- data -->
		<g class="inner-chart" >
            <path class="path-area slave" d={areaSlave} />
            <path class="path-area free" d={areaFree} />
            
		    <path class="path-line" d={pathFree} /> 
        </g>

        <!-- y axis -->
		<g class="axis y-axis" >
			{#each yTicks as tick}
				<g class="tick tick-{tick}" transform="translate(0, {yScale(tick)})">
					<line x2="100%" />
					<text x="-{2*margin.left}">{tick}</text>
				</g>
			{/each}
		</g>
		

		
    </svg>
  </div>

  <style>
    .tick {
		font-size: 1.25rem;
		font-weight: 200;
        text-transform: uppercase;
	}

	.y-axis .tick line {
		stroke: var(--db-tan);
	}

	.tick text {
		fill: var(--db-black);
		text-anchor: start;
	}

	.tick.tick-0 line {
		stroke-dasharray: 0;
	}

	.x-axis .tick text {
		text-anchor: middle;
        font-size: .9rem;
	}
    .x-axis .tick line {
		stroke: var(--db-black);
        stroke-width: 0.5;
	}

	.path-line {
		fill: none;
		stroke: var(--db-tan);
		stroke-linejoin: round;
		stroke-linecap: round;
		stroke-width: 2;
	}

    .path-area.free {
        fill: var(--db-black);
    }

    .path-area.slave {
        fill: var(--db-crimson);
    }

  </style>