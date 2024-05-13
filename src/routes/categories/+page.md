---
layout: page
title: Categories
description: All categories in one place
---

<script>
  import PostItem from "$lib/components/PostItem.svelte";
  export let data;
  const { groupedPlates } = data;
</script>

{#each groupedPlates as [category, plates]}

  <div class="category-container">
    <h2>{category}:</h2>
    <div class="grid">
      {#each plates as plate}
        <PostItem {plate} />
      {/each}
    </div>
  </div>
{/each}

<style>
  .category-container {
    border: 1px solid var(--bg-light);
    padding: 1rem;
    margin-bottom: 1.5rem;
  }
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
  }
  h2 {
    text-transform: capitalize;
  }

  @media screen and (max-width: 800px) {
    .grid {
      grid-template-columns: 1fr;
    }
  }
</style>
