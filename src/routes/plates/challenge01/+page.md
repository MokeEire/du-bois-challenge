---
layout: plate
challenge: 1
title: "Negro Population of Georgia by Counties, 1870-1880"
plateNum: 6
description: "A map of Georgia's changing black population in the late 1800s."
categories:
  - dataviz
  - red
date: 2024-06-14
published: true
image: /plates/challenge01/maps.png
original: https://github.com/ajstarks/dubois-data-portraits/blob/master/challenge/2024/challenge01/original-plate-06.jpg
---

<script>
  import Chart from './Chart.svelte'
</script>



<div class="plate">
  <div class="chart-title">
    <h1>Negro Population of Georgia by Counties.</h1>
  </div>
  <Chart />
</div>



<h2>How it's made</h2>

This plate maps the black population of Georgia's counties in 1870 and 1880 and places them diagonally across from each other in separate rows to show the changes between the two time periods. 
The population size in each county is denoted with colour and the legend is split between the two rows. 
To make the plate, I used two rows containing a map and legend (each legend only shows one half the items on the colour scale). 
I used photoshop to remove the content but keep the old paper as the background. 
This did feel like cheating from a recreation standpoint, but it does look nicer than the CSS solution in <a href="/plates/challenge04/">plate #1</a>.
The map is created in an SVG element using a projection function and path generator from `d3-geo`.
Using Svelte's `{#each}` block, I create a path element for each county that sets the fill using a colour scale from `d3-scale`.
The legend is created with the `Legend` component which takes the colour scale, and a starting and stopping index to slice the legend to mimic the original piece.

<h2>How I want to make it better</h2>

First and foremost, I want to add a tooltip. 
It would also be nice to add a filter functionality that allows users to select a legend item and filter to those population segments.
Another interaction that could be helpful would be, upon the user clicking a county, highlighting the same county on both maps and identifying the change in population category.

With regards to the style, I would like to learn to recreate the old paper aesthetic with purely CSS/HTML.
I would also like to recreate the marker line texture that is present in Du Bois' plates.

<style>
  

  .plate {
    background-image: url($lib/assets/original-plate-bg.png);
    background-size: cover;
    background-repeat: round;
    padding: 16px;
    border-radius: 6px;
    text-transform: uppercase;
    text-align: center;
    font-family: "Public Sans", sans-serif;
    margin: 1vh auto 1vh auto;
    opacity: 0.9;
    width: 75%;
    padding-bottom: 2rem;
  }

  .chart-title {
    margin-bottom: 1rem;
    line-height: 1.2;
    font-family: "Public Sans", sans-serif;
    color: black;
  }

  .chart-title h1 {
    color: black;
    font-family: "Public Sans", sans-serif;
    font-size: 1.1rem;
  }

  .chart-title h1 {
    font-weight: 700;
    margin: 1rem 0 0;
  }


  @media screen and (max-width: 800px) {
    .plate {
      width: 100%;
    }
  }
</style>