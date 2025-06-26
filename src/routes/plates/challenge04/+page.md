---
layout: plate
challenge: 4
title: "The Georgia Negro"
plateNum: 1
description: "A map of transatlantic slave trade routes."
categories:
  - dataviz
  - black
date: 2024-04-23
published: true
image: /plates/challenge04/routes.png
original: https://github.com/ajstarks/dubois-data-portraits/blob/master/challenge/2024/challenge04/original-plate-01.jpg
---

<script>
  import Map from './Map.svelte'
  import transitionGif from '$lib/assets/transition-local.gif';
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

<a class="original" href={original}>View the original</a>

<h2>How it's made</h2>

This plate maps the transatlantic slave trade routes and the subsequent black population in the Americas. 
I started out using code from Connor Rothschild's lesson [Create an Interactive Globe Visualization With Svelte + D3.js](https://www.newline.co/courses/better-data-visualizations-with-svelte/what-we-ll-be-building-globe).
This included using an SVG circle as the background of the globe and using the [`d3-geo`](https://github.com/d3/d3-geo) and [TopoJSON](https://github.com/topojson) libraries to render countries' borders and shapes.
To create the twin-globe look, I created two SVG circles for the background with centres placed at 25% and 75% of the chart's width. 

Next I needed to plot the countries' borders.
I tried a few different [projections](https://d3js.org/d3-geo/projection), but didn't come across one which looked right.
[`geoEquirectangular()`](https://d3js.org/d3-geo/cylindrical#geoEquirectangular) looked very close, but I still needed to figure out how to restrict the elements to those within the two globes.
I used SVG's <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element/clipPath">`clipPath`</a> with circles identical in size to the background circles to exclude any map elements that fell outside them.

### Draw the paths

As mentioned above, I generated the JSON for the routes with an online tool.
The routes look something like this:

```
{
      "Source": "\"Western Africa\"",
      "Destination": "\"Brazil\"",
      "coords": [
        [
          14.7587,
          -22.1929
        ],
        [
            -38.4388, -12.9200
        ]
      ]
    }
```

Using Svelte, I created an SVG `<path>` element for each route, and used the [`draw`](https://svelte.dev/docs/svelte-transition#draw) transition to animate the routes from their source to their destination.
I still need to learn to curve the paths into arcs when using coordinates.

### Draw the regions

Next I needed to draw the different regions on the plot - the dark areas for the locations African slaves were primarily transported from and to, and the lighter areas to indicate the wide reach of both the capturing and migration that occurred.
I ran into an interesting problem when drawing the regions - [the points of polygon geometries need to be arranged in anti-clockwise order](https://imfeld.dev/writing/introduction_to_geojson).
Unfortunately I had not adhered to this rule when creating the polygons and I didn't really want to go back and re-do all that work.
Thankfully, there is a library that will rearrange the points to be in the order you need: [`turf.js`](https://turfjs.org/docs/#rewind) (also see [this StackOverflow post](https://stackoverflow.com/questions/49311001/d3-js-drawing-geojson-incorrectly)).
With this problem solved, I drew the regions and used Svelte's [`fade`](https://svelte.dev/docs/svelte-transition#fade) transition on the destination shapes.
This transition, in combination with the animated routes, are meant to emphasize Du Bois' static representation of the migration of slaves beyond their initial landing point.

<h2>How I want to make it better</h2>

First, I need to fix the transition speeds because, while they work locally, I have found that they can be much jerkier when published.
After figuring out the right speeds, I would like to add an animation reset button because readers might miss the on-load animation the first time around.
Here's an example of what the transition looks like on my local machine.

<img src={transitionGif} />

I would also like to incorporate more granular data of individual slave trade routes. 
While I started to do this, I quickly realized it would be a much more involved analysis that would require decomposing Du Bois' visual and I want to focus on learning to make visuals for now.


<style>

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
