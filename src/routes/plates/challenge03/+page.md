---
layout: plate
challenge: 3
title: "Acres of Land Owned by Negroes in Georgia"
plateNum: 6
description: "A graph depicting growth in black land ownership in the late 1800s."
categories:
  - dataviz
date: 2025-06-25
published: true
image: /plates/challenge03/challenge03.png
original: https://github.com/ajstarks/dubois-data-portraits/blob/master/challenge/2024/challenge03/original-plate-19.jpg
---

<script>
  export let data; // This comes from +page.js
  //console.log('Page data:', data);
  import Chart from './Chart.svelte'
</script>

<div class="plate">
  <div class="chart-title">
    <h1>Acres of Land Owned by Negroes in Georgia.</h1>
  </div>
  <Chart data={data}/>
</div>

<a class="original" href={original} target="_blank">View the original</a>

This plate shows a steady rise in Black land ownership over a 25 year period between 1874 and 1899.
The total land ownership increases nearly threefold from 338,769 acres to over 1 million acres.

<h2>How it's made</h2>

The data comes from the Du Bois Data Portaits GitHub repo, which provides a CSV file with the historical data (year and land ownership in acres). 

The chart is built using Svelte, D3.js, and SVG.
Svelte is the framework for the reactive components, D3.js provides the data scaling and mathematical functions (e.g. `max` from [`d3-array`](https://d3js.org/d3-array)), and SVG is for the actual graphics (in this case, the `rect` and `text` elements).

In this plate, I use a JavaScript file to load the data, then parse the data in the `Chart` component.
Using D3's `scaleLinear` functions from [`d3-scale`](https://d3js.org/d3-scale), I map the years to the Y-axis and the land to the X-axis.
Each row in the data becomes a horizontal bar by combining Svelte's `{#each}` block with `<rect>` elements to create a rectangle for each data point.
Using Svelte's [`on:mouseover`/`on:focus` directives](https://svelte.dev/docs/svelte/legacy-on), I designed the chart to highlight bars based on the user's mouse and show the highlighted year's land value.

To recreate the hand-drawn marker aesthetic, I used Claude to draft a set of SVG filters, and played around with them until they looked similar to the original.

<h2>How I want to make it better</h2>

While I think this has been my best recreation so far, there is still plenty to improve.
Primarily: responsiveness.
If you are looking at this on a phone, my apologies.
I haven't ventured into making these visuals mobile-friendly yet.

Other than responsiveness, I think the chart could benefit from more context.
On highlighting each year, I could also highlight major events that might have affected land ownership of Black people in Georgia.
Another small change might be to increase the highlighted year's font weight on hover to improve readability.

If you have any suggestions, please share in the comments below.

## Resources Used

<ul class="link-list">
  <li><a href="https://datavisualizationwithsvelte.com/basics/bar-chart">Data Visualization with Svelte: Bar Chart Basics</a> - Tutorial on creating bar charts with Svelte and D3</li>
  <li><a href="https://www.newline.co/courses/better-data-visualizations-with-svelte/a-guide-to-svelte-hover-events-dynamic-styling-and-tooltips">Better Data Visualizations with Svelte</a> - Guide to hover events, dynamic styling, and tooltips</li>
  <li><a href="https://css-tricks.com/svg-properties-and-css/">CSS-Tricks: SVG Properties and CSS</a> - Comprehensive guide to styling SVG elements</li>
  <li><a href="https://www.w3.org/TR/SVG2/Overview.html">W3C SVG 2.0 Specification</a> - Official SVG specification and reference</li>
  <li><a href="https://oreillymedia.github.io/Using_SVG/guide/blend-modes.html">O'Reilly: SVG Blend Modes</a> - Documentation on SVG blend modes and compositing</li>
  <li><a href="https://drafts.fxtf.org/filter-effects/">W3C Filter Effects Specification</a> - Technical specification for SVG filters and effects</li>
</ul>

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
    padding-bottom: 1.2rem;
  }

  .chart-title {
    line-height: 1.2;
    font-family: "Public Sans", sans-serif;
    color: black;
    margin: 1rem 25% 0 25%;
    opacity: .85;
  }

  .chart-title h1 {
    color: black;
    font-family: "Public Sans", sans-serif;
    font-size: 1.25rem;
  }


  .original {
    font-size: 1rem;
  }

  @media screen and (max-width: 800px) {
    .plate {
      width: 100%;
    }
  }

  
</style>