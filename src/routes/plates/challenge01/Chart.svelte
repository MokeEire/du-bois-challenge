<script>
  import { run } from 'svelte/legacy';

  import georgiaCounties from "$lib/data/county_combined.geojson.json";
  import rewind from "@turf/rewind";

  import { geoPath, geoAlbers } from "d3-geo";
  import { scaleOrdinal } from "d3-scale";
  import Legend from "./Legend.svelte";
  //import texture from '$lib/assets/fill-marker-2.png';

  let width = $state(300);
  let countiesRewind = rewind(georgiaCounties, { reverse: true });
  let counties = georgiaCounties.features;
  let counties2 = georgiaCounties.features;



  let georgiaCoords = [-79.5, 27.5];

  const popCats = ["> 1000", "1000 - 2500", "2500 - 5000", "5000 - 10000", "10000 - 15000", "15000 - 20000", "20000 - 30000", null];
  const colourRange = ["#516255", "#e4b558", "#df9e98", "#cf354f", "#b5967c", "#654321", "#41377c", "#e4d3bf"];
  let colourScale = scaleOrdinal()
    .domain(popCats)
    .range(colourRange);

    let hovered = $state();
  let height = $derived(width*1.25);
  // Projection function
  let projection = $derived(geoAlbers()
    .scale(3900 - (871 - width)*3)
    .rotate([79.1+(871-width)/200, 11.75-(871-width)/200])
    .translate([width / 2.5, height / 2])); // Where the projection is centered
  // Path generator
  let path = $derived(geoPath().projection(projection));
  run(() => {
    console.log(path.bounds(counties))
  });
  run(() => {
    console.log(hovered);
  });
</script>

<div class="chart-container" bind:clientWidth={width}>
  <div class="row">
    <div class="chart">
      <h6 class="map-year">1870</h6>
      <div class="map">
        <!-- Attempt to add texture <img src={texture} class="texture"/>--->
      <svg class="left" width={width / 2.5} height={height/3}
      onmouseleave={() => {
        hovered = null;
      }}>
        <!-- Counties 1870-->
        {#each counties as county}
          <!-- svelte-ignore a11y_click_events_have_key_events --->
          <path
            class="county"
            d={path(county.geometry)}
            fill={colourScale(county.properties.population1870)}
            stroke="black"
            tabIndex="0"
            onmouseover={() => {
              hovered = county.properties;
            }}
            onfocus={() => {
              hovered = county.properties;
            }}
          />
        {/each}
      </svg>
      </div>
    </div>
    <!-- Top right legend -->
    <Legend {colourScale} indexStart={4} indexStop={7} />
  </div>
  <div class="row">
    <!-- Bottom left legend -->
    <Legend {colourScale} indexStart={0} indexStop={4} right={true}/>
  <div class="chart">
    <h6 class="map-year">1880</h6>
    <svg class="right" width={width / 2.5} height={height/3}
    onmouseleave={() => {
      hovered = null;
    }}>
      <!-- Counties 1880-->
      {#each counties as county}
        <!-- svelte-ignore a11y_click_events_have_key_events --->
        <path
          class="county"
          d={path(county.geometry)}
          fill={colourScale(county.properties.population1880)}
          stroke="black"
          tabIndex="0"
            onmouseover={() => {
              hovered = county.properties;
            }}
            onfocus={() => {
              hovered = county.properties;
            }}
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
  .county {
    cursor: pointer;
  }

  .map {
    position: relative;
    z-index: 2;
  }

  .texture {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    mix-blend-mode: difference;
    user-select: none;
  }

</style>
