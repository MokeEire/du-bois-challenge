<script>
  import { paginatedPosts } from "./paginatedPosts";

  export let items = [];
  export let currentPage = 1;
  export let itemsPerPage = 3;

  let numberOfPages = Math.ceil(items.length / itemsPerPage);

  const paginate = (array, page_size, page_number) => {
    return array.slice((page_number - 1) * page_size, page_number * page_size);
  };

  $: $paginatedPosts = paginate(items, itemsPerPage, currentPage);
</script>

<nav>
  {#if numberOfPages > 1}
    <ul>
    {#each Array(numberOfPages) as _, index}
      <li>
        <button
          class:active={currentPage == index + 1}
          on:click={() => (currentPage = index + 1)}>{index + 1}</button
        >
      </li>
    {/each}
  </ul>
  {/if}
</nav>

<style>
  ul {
    display: flex;
    place-content: center;
    padding: inherit;
    margin: 0;
  }
  li {
    margin-right: 2px;
    position: initial;
    padding: initial;
    margin: initial;
    line-height: initial;
  }
  .active {
    color: white;
    background-color: var(--sidebar-bg);
  }



  /* Custom bullet using Du Bois color palette */
  li::before {
    content: "";
    display: none;
  }

</style>
