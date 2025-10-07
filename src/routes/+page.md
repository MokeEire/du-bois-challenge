---
layout: page
title: Home
description: "A minimal Sveltekit theme with a sidebar."
---

<script>
  import PostItem from "$lib/components/PostItem.svelte";
  import PostGrid from "$lib/components/PostGrid.svelte";
  import Pagination from "$lib/components/Pagination/Pagination.svelte";
  import { paginatedPosts } from "$lib/components/Pagination/paginatedPosts";
  import Seo from "$lib/components/Seo.svelte";
  import { siteTitle, siteDescription } from "$lib/constants";
  
  export let data;

  $: ({ plates } = data);
</script>

<!-- Paginated Posts
<div class="posts-grid">
  {#each $paginatedPosts as plate}
    <PostItem {plate} />
  {/each}
</div>

<Pagination items={plates} itemsPerPage={4}/>

<style>
  .posts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    grid-template-rows: repeat(auto-fill, minmax(200px, 1fr));
    gap: 16px;
    margin-bottom: 3rem;
  }

  @media screen and (max-width: 768px) {
    .posts-grid {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  }
</style>

-->
<!-- PostGrid component -->
<PostGrid {plates} />

