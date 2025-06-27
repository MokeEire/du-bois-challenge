---
layout: plate
challenge: 9
title: "Proportion of Freemen and Slaves"
plateNum: 51
description: "An area chart showing the proportion of free and enslaved black people in America"
categories:
  - dataviz
  - green
date: 2025-06-26
published: true
image: /plates/challenge09/challenge09.png
original: https://github.com/ajstarks/dubois-data-portraits/blob/master/challenge/2024/challenge09/original-plate-51.jpg
---

<script>
  export let data; // This comes from +page.js
  //console.log('Page data:', data);
  import Chart from './Chart.svelte'
</script>

<div class="plate">
  <div class="chart-title">
    <h1>Proportion of Freemen and Slaves Among American Negroes .</h1>
    <h1>Proportion des Négres Libres et des Esclaves en Amérique .</h1>
    <h4>Done by Atlanta University</h4>
  </div>
  <Chart data={data}/>
</div>

<a class="original" href={original} target="_blank">View the original</a>

This plate shows how few black people in America enjoyed freedom until 1870.
In Du Bois' work, this likely served as one of many rebuttals to the claims of black inferiority made through scientific racism that was prevalent at the time.

<h2>How it's made</h2>

The data comes from the Du Bois Data Portaits GitHub repo, which provides a CSV file with the historical data (year and proportion free/enslaved). 

...

<h2>How I want to make it better</h2>

...

If you have any suggestions, please share in the comments below.

## Resources Used

<ul class="link-list">
  <li><a href="https://datavisualizationwithsvelte.com/basics/bar-chart">Data Visualization with Svelte: Bar Chart Basics</a> - Tutorial on creating bar charts with Svelte and D3</li>
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
    line-height: 1.1;
    font-family: "Public Sans", sans-serif;
    color: black;
    opacity: .85;
    margin: 2.5rem;
    margin-top: .5rem;
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    gap: 2rem;
  }

  .chart-title h1 {
    color: black;
    font-family: "Public Sans", sans-serif;
    font-size: 1.1rem;
    text-align: left;
  }

  .chart-title h4 {
    color: black;
    font-family: "Public Sans", sans-serif;
    font-size: .9rem;
    font-weight: 700;
    align-self: center;
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