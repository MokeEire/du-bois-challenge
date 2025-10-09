<script>
  /**
   * @typedef {Object} Props
   * @property {string} [id]
   * @property {any} width
   * @property {any} height
   */

  /** @type {Props} */
  let { id = "circle", width, height } = $props();
</script>
<defs>
    <clipPath id={id}>
      <circle cx={width*.25}
      cy={height/2}
      r={height/2} />
      <circle cx={width*.75}
      cy={height/2}
      r={height/2} />
    </clipPath>
  </defs>