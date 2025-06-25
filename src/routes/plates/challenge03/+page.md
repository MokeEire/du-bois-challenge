---
layout: plate
challenge: 3
title: "Acres of Land Owned by Negroes in Georgia"
plateNum: 6
description: "A graph depicting growth in black wealth in the late 1800s."
categories:
  - dataviz
date: 2025-06-18
published: true
image: /plates/challenge03/maps.png
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

<a class="original" href={original}>View the original</a>

<h2>How it's made</h2>

This plate shows a steady rise in Black land ownership over a 25 year period between 1874 and 1899.
The total land ownership increases nearly threefold from 338,769 acres to over 1 million acres.

<h2>How I want to make it better</h2>

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