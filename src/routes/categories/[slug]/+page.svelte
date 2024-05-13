<script>
  import PostItem from "$lib/components/PostItem.svelte";
  import { siteTitle } from "$lib/constants";
  export let data;
  const { plates, title } = data;
</script>

<h1>Category: {title}</h1>
{#each plates as plate}
  <PostItem {plate} />
{/each}

<svelte:head>
  <title>{title} | {siteTitle}</title>
  <meta name="description" content="Categories are found here" />
</svelte:head>

<style>
  h1 {
    text-transform: capitalize;
  }
  @media screen and (max-width: 800px) {
    h1 {
      font-size: 2rem;
    }
  }
</style>
