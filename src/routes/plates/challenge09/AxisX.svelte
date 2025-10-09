<script>
    let { xScale, padding } = $props();

</script>

<g class='axis x'>
    {#each xScale.ticks() as tick}
        <text
            class="tick-label"
            x={xScale(tick)}
            y={0}
            text-anchor="middle"
        >
            {tick}
        </text>
    {/each}
</g>

<style>
    .tick-label {
        font-weight: 700;
        text-anchor: middle;
        dominant-baseline: hanging;
    }
</style>