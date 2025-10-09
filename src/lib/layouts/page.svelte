<script>
  import Seo from "$lib/components/Seo.svelte";
  import { siteTitle } from "$lib/constants";
  let { title, description, children } = $props();
  const seo = {
    title: `${title} | ${siteTitle}`,
    description,
  };
</script>

<Seo {...seo} />

{@render children?.()}
