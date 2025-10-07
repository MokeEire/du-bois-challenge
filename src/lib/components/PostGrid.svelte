<script>
  import ArticleCard from "$lib/components/ArticleCard.svelte";
  export let plates;

  $: sortedPlates = plates?.sort((a, b) => a.challenge - b.challenge);//new Date(a.date) - new Date(b.date));
</script>

<div class="grid">
  <div class="grid-width">
    <div class="grid-inner">
      {#if plates && plates?.length > 0}
        <div class="grid-plates">
          {#each sortedPlates as plate}
            {#if plate}
              <ArticleCard {plate} />
            {/if}
          {/each}
        </div>
      {/if}
    </div>
  </div>
</div>

<style>
  .grid {
    display: flex;
    margin: 2.5rem;
    justify-content: center;
    align-items: center;
  }

  .grid-width {
    max-width: 1536px;
  }

  .grid-inner {
    display: flex;
    overflow: hidden;
    flex-direction: column;
    gap: 3.5rem;
    justify-content: flex-start;
    align-items: center;
    align-self: stretch;
  }

  .grid-plates {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 1rem;
  }

  @media (min-width: 768px) {
    .grid-plates {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
  @media (min-width: 1024px) {
    .grid-plates {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
</style>
