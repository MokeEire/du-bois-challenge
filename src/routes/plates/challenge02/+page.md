---
layout: plate
challenge: 2
title: "Slave and Free Negroes"
plateNum: 12
description: "A chart depicting the proportion of the black population in the US that were free between 1790 and 1870."
date: 2024-08-19
published: true
image: /plates/plate-list.png
original: https://github.com/ajstarks/dubois-data-portraits/blob/master/challenge/2024/challenge02/original-plate-12.jpg
---

<script>
  import Chart from './Chart.svelte'
</script>

<div class="plate">
  <div class="chart-title">
    <h1>Slaves and Free Negroes</h1>
  </div>
  <!-- Chart Goes here !-->
  <Chart />
</div>


<h2>How it's made</h2>

After an initial struggle to even load a `.csv` file, I found [a great example of an area chart](https://svelte.dev/examples/area-chart) on Svelte's website.

<h2>How I want to make it better</h2>

Description of how I want to improve it

<style>
  

  .plate {
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