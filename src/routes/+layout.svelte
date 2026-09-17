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
  <div
    class="overlay"
    class:show={$isSidebarOpen}
    role="button"
    tabindex={$isSidebarOpen ? 0 : -1}
    aria-label="Close menu"
    onclick={() => ($isSidebarOpen = false)}
    onkeydown={(e) => (e.key === "Enter" || e.key === " ") && ($isSidebarOpen = false)}
  ></div>
  <main>
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

  .overlay {
    position: fixed;
    inset: 0;
    z-index: 9998;
    background: rgba(0, 0, 0, 0.4);
    border: 0;
    padding: 0;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: opacity var(--duration-300) ease;
  }

  .overlay.show {
    opacity: 1;
    visibility: visible;
  }
</style>
