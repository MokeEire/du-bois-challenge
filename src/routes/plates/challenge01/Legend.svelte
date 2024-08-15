<script>
  export let colourScale;
  export let indexStart = 0;
  export let indexStop = colourScale.domain().length;
  export let right = false;

  //console.log(colourScale.domain());
  let indexedArray = colourScale.domain().slice(indexStart, indexStop);

  function labelLegend(value) {
    let mapper = {
      "20000 - 30000": "Between 20,000 and 30,000",
      "15000 - 20000": "15,000 to 20,000",
      "10000 - 15000": "10,000 to 15,000",
      "5000 - 10000": "5,000 to 10,000",
      "2500 - 5000": "2,500 to 5,000",
      "1000 - 2500": "1,000 to 2,500",
      "> 1000": "Under 1,000",
    };
    return mapper[value];
  }

</script>

<div class="legend" class:right>
  {#each indexedArray.reverse() as group}
    <p>
      <span style="background-color: {colourScale(group)}" />
      {labelLegend(group)}
    </p>
  {/each}
</div>

<style>
  .legend {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 16px 0;
    gap: 24px;
    top: 24px;
    position: relative;
    min-width: 40%;
  }

  .legend.right {
    left: 10%;
  }
  .legend p {
    font-size: 16px;
    font-weight: 100;
  }
  span {
    width: 24px;
    height: 24px;
    display: inline-block;
    border: 1px solid black;
    border-radius: 50%;
    vertical-align: middle;
    opacity: .9;
  }
</style>
