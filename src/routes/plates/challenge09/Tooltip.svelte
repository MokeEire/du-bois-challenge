<script>
  import { fly } from "svelte/transition";

  let { hoveredData, xScale, yScale } = $props();

  let x = $derived(xScale(hoveredData.Land / 2));
  let y = $derived(yScale(hoveredData.Year - 1874));

  let tooltipWidth = $state();
</script>

<div
  class="tooltip"
  style="top: {y}px; left: {x}px;"
  bind:clientWidth={tooltipWidth}
  in:fly
  out:fly={{delay: 100}}
>
  <h2><span>In </span>{hoveredData.Year}</h2>
  <span>Black people in Georgia owned</span>
  <p>{hoveredData.Land.toLocaleString()} <span>acres</span></p>
  
</div>

<style>
  .tooltip {
    position: absolute;
    background-color: white;
    border: 1px solid #ccc;
    padding: 8px 12px;
    box-shadow: rgba(0, 0, 0, 0.15) 2px 3px 8px;
    border-radius: 3px;
    transition:
      top 300ms ease,
      left 300ms ease;
    text-align: left;
    pointer-events: none; /* Prevents tooltip from blocking mouse events */
  }
  .tooltip h2 {
    margin: 0;
    font-size: 20px;
    margin-bottom: -16px;
  }
  .tooltip p {
    font-size: 1.1rem;
    margin-top: -10px;
  }

  .tooltip span {
    text-transform: none;
    color: #333;
    font-size: 0.8rem;
  }
</style>
