<script>
  import { run } from 'svelte/legacy';

  import { paginatedPosts } from "./paginatedPosts";

  /**
   * @typedef {Object} Props
   * @property {any} [items]
   * @property {number} [currentPage]
   * @property {number} [itemsPerPage]
   */

  /** @type {Props} */
  let { items = [], currentPage = $bindable(1), itemsPerPage = 3 } = $props();

  let numberOfPages = Math.ceil(items.length / itemsPerPage);

  const paginate = (array, page_size, page_number) => {
    return array.slice((page_number - 1) * page_size, page_number * page_size);
  };

  run(() => {
    $paginatedPosts = paginate(items, itemsPerPage, currentPage);
  });
</script>

<nav>
  {#if numberOfPages > 1}
    <ul>
    {#each Array(numberOfPages) as _, index}
      <li>
        <button
          class:active={currentPage == index + 1}
          onclick={() => (currentPage = index + 1)}>{index + 1}</button
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
