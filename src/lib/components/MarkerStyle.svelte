<script>
  import {randomUniform} from 'd3-random';
  /**
   * @typedef {Object} Props
   * @property {string} [colour]
   * @property {string} [direction]
   */

  /** @type {Props} */
  let { colour = 'red', direction = 'horizontal' } = $props();
  
  const colorMatrices = {
    red: "1.75 0 0 0 0, 0 0.2 0 0 0, 0.1 0 0.2 0 0, 0 0 0 1 0",
    green: "0.1 0 0 0 0, 0 1 0 0 0, 0 0 0.4 0 0, 0 0 0 1 0",
    black: "0.9 0 0 0 0, 0 0.9 0 0 0, 0 0 0.9 0 0, 0 0 0 1 0",
    yellow: "1.5 0 0 0 0, 0 1.5 0 0 0, 0 0 0.2 0 0, 0 0 0 1 0"
  };
  
  let filterId = $derived(`marker${colour.charAt(0).toUpperCase() + colour.slice(1)}`);
  let colorMatrix = $derived(colorMatrices[colour] || colorMatrices.red);
  let smallFreq = randomUniform(.02, .04);
  let largeFreq = randomUniform(.16, .25);
  let fractalFreq = (direction === 'horizontal' ? `${smallFreq().toFixed(2)} ${largeFreq().toFixed(2)}` : `${largeFreq().toFixed(2)} ${smallFreq().toFixed(2)}`);
</script>

<defs>
  <filter id={filterId} x="0%" y="0%" width="100%" height="100%">
    <!-- Create horizontal streaks like marker strokes -->
    <feTurbulence type="fractalNoise" baseFrequency={fractalFreq} numOctaves="2" result="streaks"/>
    <!-- Create fine texture overlay -->
    <feTurbulence type="turbulence" baseFrequency="1.2" numOctaves="1" result="texture"/>
    
    <!-- Combine streaks and texture -->
    <feBlend in="streaks" in2="texture" mode="multiply" result="combined"/>
    
    <!-- Convert to grayscale and enhance contrast -->
    <feColorMatrix in="combined" type="saturate" values="0" result="gray"/>
    <feComponentTransfer in="gray" result="contrast">
      <feFuncA type="discrete" tableValues="0.3 0.5 0.7 0.85 1"/>
    </feComponentTransfer>
    
    <!-- Blend with original shape using screen mode for lighter areas -->
    {#if colour == 'green'}
      <feBlend in="SourceGraphic" in2="contrast" mode="soft-light" result="lightened"/>
    {:else}
      <feBlend in="SourceGraphic" in2="contrast" mode="hard-light" result="lightened"/>
    {/if}
    <!-- Then multiply for darker streaks -->
    
    {#if colour=='black'}
      <feBlend in="lightened" in2="contrast" mode="multiply" result="final"/>
    {:else}
      <feBlend in="lightened" in2="contrast" mode="overlay" result="final"/>
    {/if}
    <!-- Color-specific enhancement -->
    <feColorMatrix in="final" type="matrix" values={colorMatrix}/>
  </filter>
</defs>