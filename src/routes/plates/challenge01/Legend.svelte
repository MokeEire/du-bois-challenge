<script>
    export let colourScale;
    export let indexStart = 0;
    export let indexStop = colourScale.domain().length;

    console.log(colourScale.domain());
    let indexedArray = colourScale.domain().slice(indexStart, indexStop)

    console.log(indexedArray);
</script>

<div class='legend'>
    {#each indexedArray.reverse() as group}
      <p>
        <span style="background-color: {colourScale(group)}" />
        {group}
      </p>
    {/each}
  </div>

<style>
    .legend {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        flex-grow: 3;
        height: 50%;
        justify-content: space-around;
        padding: 16px 0;
    }
    .legend p {
        font-size: 2rem;
        font-weight: 100;
    }
    span {
        width: 16px;
        height: 16px;
        display: inline-block;
        border: 1px solid black;
        border-radius: 50%;
    }
</style>