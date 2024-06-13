<script>
    export let cx;
    export let height;

    $: radius = height / 2
</script>

<!-- svelte-ignore a11y-click-events-have-key-events --->
<circle
  class="globe"
  stroke="black"
  cx={cx}
  cy={height/2}
  r={radius}
  tabIndex="0"
/>

<style>
    .globe {
        fill: #4682b421;
    }
</style>
