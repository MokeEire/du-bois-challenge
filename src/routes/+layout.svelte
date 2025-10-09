<script>
  import "$lib/css/reset.css";
  import "$lib/css/global.css";
  import "$lib/css/syntax-highlight.css";
  import SidebarToggle from "$lib/components/SidebarToggle.svelte";
  import Sidebar from "$lib/components/Sidebar.svelte";
  import { isSidebarOpen } from "$lib/stores";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
  /**
   * @typedef {Object} Props
   * @property {import('svelte').Snippet} [children]
   */

  /** @type {Props} */
  let { children } = $props();
</script>

<div class="wrapper overflow-hidden">
  <Sidebar />
  <main class:show={$isSidebarOpen}>
    <SidebarToggle />
    <Header />
    <article class="container">
      {@render children?.()}
    </article>
    <Footer sidebar={false} />
  </main>
</div>

<style>
  .wrapper {
    display: flex;
    overflow: hidden;
  }
  main {
    width: 100%;
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    justify-content: flex-start;
  }

  article {
    margin: 1rem auto;
    
  }
  .show {
    transform: translateX(18rem);
  }

  @media screen and (max-width: 800px) {
    .show {
      transform: translateX(14rem);
    }
  }
</style>
