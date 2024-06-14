<script>
  import { tweened } from "svelte/motion";
  import { quartInOut } from "svelte/easing";

  import georgiaCounties from "$lib/data/county_combined.geojson.json";
  import * as topojson from "topojson-client";
  import rewind from "@turf/rewind";

  import { geoPath, geoAlbers } from "d3-geo";
  import { scaleOrdinal } from "d3-scale";
  import { draw, fade, scale } from "svelte/transition";
  import Legend from "./Legend.svelte";

  let width = 300;
  $: height = width*1.25;
  let countiesRewind = rewind(georgiaCounties, { reverse: true });
  let counties = georgiaCounties.features;
  let counties2 = georgiaCounties.features;

  // Projection function
  $: projection = geoAlbers()
    .scale(3900 - (871 - width)*3)
    .rotate([79.1+(871-width)/200, 11.75-(871-width)/200])
    .translate([width / 2.5, height / 2]); // Where the projection is centered
  $: console.log(path.bounds(counties))

  // Path generator
  $: path = geoPath().projection(projection);

  let georgiaCoords = [-79.5, 27.5];

  const popCats = ["> 1000", "1000 - 2500", "2500 - 5000", "5000 - 10000", "10000 - 15000", "15000 - 20000", "20000 - 30000", null];
  const colourRange = ["#516255", "#e4b558", "#df9e98", "#cf354f", "#b5967c", "#654321", "#41377c", "#e4d3bf"];
  let colourScale = scaleOrdinal()
    .domain(popCats)
    .range(colourRange);
</script>

<div class="chart-container" bind:clientWidth={width}>
  <div class="row">
    <div class="chart">
      <h6 class="map-year">1870</h6>
      <svg class="left" width={width / 2.5} height={height/3}>
        <!-- Counties 1870-->
        {#each counties as county}
          <!-- svelte-ignore a11y-click-events-have-key-events --->
          <path
            class="county"
            d={path(county.geometry)}
            fill={colourScale(county.properties.population1870)}
            stroke="black"
            tabIndex="0"
          />
        {/each}
  
      </svg>
    </div>
    <!-- Top right legend -->
    <Legend {colourScale} indexStart={4} indexStop={7} />
  </div>
  <div class="row">
    <!-- Bottom left legend -->
    <Legend {colourScale} indexStart={0} indexStop={4} right={true}/>
  <div class="chart">
    <h6 class="map-year">1880</h6>
    <svg class="right" width={width / 2.5} height={height/3}>
      <!-- Counties 1880-->
      {#each counties as county}
        <!-- svelte-ignore a11y-click-events-have-key-events --->
        <path
          class="county"
          d={path(county.geometry)}
          fill={colourScale(county.properties.population1880)}
          stroke="black"
          tabIndex="0"
        />
      {/each}

    </svg>
  </div>
  </div>
  
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,100..900;1,100..900&display=swap");

  .chart-container {
    margin: auto;
    display: flex;
    flex-flow: row wrap;
    gap: 10px;
  }

  .row {
    display: flex;
    flex-flow: row nowrap;
    gap: 10px;
    width: 100%;
    justify-content: center;
  }

  .chart {
    flex-direction: column;
    display: flex;
    align-items: flex-start;
  }

  .map-year {
    margin-top: 0;
    position: relative;
    left: 25%;
  }

  .left {
    align-self: flex-end;
  }

  .right {
    align-self: flex-start;
  }

  svg {
    overflow: visible;
  }

</style>
