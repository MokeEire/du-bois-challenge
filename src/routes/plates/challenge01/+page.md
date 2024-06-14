---
layout: plate
challenge: 1
title: "Negro Population of Georgia by Counties, 1870-1880"
plateNum: 6
description: "A map of transatlantic slave trade routes."
categories:
  - dataviz
date: 2024-04-23
published: true
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

<style>
  

  .plate {
    background: #d2b48c;
    padding: 4px 16px;
    border-radius: 6px;
    text-transform: uppercase;
    text-align: center;
    font-family: "Public Sans", sans-serif;
    margin: 1vh auto 10vh auto;
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

  .chart-title span {
    font-weight: 600;
  }

  .chart-desc {
    margin: 1.5rem 0 2rem;
  }

  .chart-desc p {
    font-weight: 100;
    word-wrap: break-word;
    line-height: 1.25;
    hyphens: auto;
  }

  .chart-desc :not(p:last-of-type) {
    text-align: left;
    letter-spacing: 1.25px;
    text-indent: 15%;
    margin-bottom: 1rem;
  }

  .caption {
    text-align: right;
  }

  @media screen and (max-width: 800px) {
    .plate {
      width: 100%;
    }
  }
</style>