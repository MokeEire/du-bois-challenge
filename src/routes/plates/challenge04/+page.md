---
layout: plate
challenge: 4
title: "The Georgia Negro"
plateNum: 1
description: "A map of transatlantic slave trade routes."
categories:
  - dataviz
date: 2024-04-23
published: true
image: /plates/challenge04/routes.png
original: https://github.com/ajstarks/dubois-data-portraits/blob/master/challenge/2024/challenge04/original-plate-01.jpg
---

<script>
  import Map from './Map.svelte'
</script>

<div class="plate">
  <div class="chart-title">
    <h1>The Georgia Negro.</h1>
    <span>A Social Study</span>
    <span>By</span>
    <span>W.E. Burghardt Du Bois</span>
  </div>
  <Map />
<div class="legend">
      <div class="legend-item">
        <span>&#8803;</span>
        <span>Routes of the African slave trade.</span>
      </div>
      <div class="legend-item">
        <span>&#10026;</span>
        <span>The State of Georgia.</span>
      </div>
    </div>
    <div class="chart-desc">
      <p>
        This case is devoted to a series of charts, maps and other devi–ces
        designed to illustrate the development of the American Negro in a single
        typical state of the United States.
      </p>
      <p>"The problem of the 20th century is the problem of the color-line."</p>
    </div>
    <p class="caption">
      Source: <a href="https://www.slavevoyages.org/voyage/database"
        >Trans-Atlantic Slave Trade Database</a
      >
    </p>
    </div>

    <style>
  blockquote {
      font-size: 0.9rem;
  border-left: 12px solid var(--brand-color);
  border-radius: 2px;
  margin: 1rem 0 1rem;
  background-color: var(--body-font);
  padding: 8px 0 8px 16px;
  }

  .plate {
    margin-bottom: 10vh;
    background: #d2b48c;
    padding: 4px 16px;
    border-radius: 6px;
    text-transform: uppercase;
    text-align: center;
    font-family: "Public Sans", sans-serif;
    opacity: 0.9;
  }

  .chart-title {
    display: flex;
    flex-direction: column;
    margin-bottom: 5vh;
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

  .legend {
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
    margin: 0 auto;
    width: fit-content;
    text-align: left;
    opacity: 0.75;
    font-size: 1.1rem;
  }

  .legend span {
    font-weight: 100;
  }

  .legend-item {
  }

  .caption {
    text-align: right;
  }
</style>