<script>
  import Categories from "$lib/components/Categories.svelte";
  export let plate;
  $: ({ title, description, slug, categories, image } = plate);
</script>

<div class="post-item">
  <a data-sveltekit-prefetch class="title" href="/plates/{slug}"
    ><h2>{title}</h2>
    <img width="800" height="300" src={image} alt={title} /></a
  >
  
  <p>{description}</p>
</div>

<style>
  .post-item {
    margin-bottom: 3rem;
  }
  .title {
    text-decoration: none;
  }
  .title:hover {
    text-decoration: underline;
  }
  h2 {
    font-size: 1.8rem;
  }
  img {
    object-fit: cover;
    object-position: center;
  }
  @media screen and (max-width: 768px) {
    img {
      height: 200px;
      object-fit: contain;
      object-position: center;
    }
  }
</style>
