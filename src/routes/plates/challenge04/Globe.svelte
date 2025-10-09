<script>
  let { cx, height } = $props();

    let radius = $derived(height / 2)
</script>

<!-- svelte-ignore a11y_click_events_have_key_events --->
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
