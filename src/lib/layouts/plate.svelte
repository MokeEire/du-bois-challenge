<script>
  import Seo from "$lib/components/Seo.svelte";
  import Categories from "$lib/components/Categories.svelte";
  import { siteTitle } from "$lib/constants";

  export let data;
  export let title,
    description,
    date,
    challenge,
    plateNum,
    edit,
    image,
    original;

  const seo = {
    title: `${title} | ${siteTitle}`,
    description,
    image,
  };

  $: recentPosts = data.plates;
</script>

<Seo {...seo} />

<h1>Challenge #{challenge}: {title} (Plate {plateNum})</h1>
<p class="date">{date}</p>
<blockquote>
  <strong>Please Note</strong>: The language used in this piece comes directly
  from W.E.B. Du Bois' scientific study in 1900. You can view the original piece
  <a href={original}>here</a>. I am torn about reproducing language that could
  be painful for people to read, but I thought altering the wording would be a
  disservice to the work. I find the language of Du Bois' work to be a powerful
  reminder, especially for readers in a modern context, that racial inequality
  has a long tenure in our societies and institutions. However, race is a
  difficult subject for white people like myself to navigate with appropriate
  awareness and compassion, so <a href="../contact">please reach out</a> with any
  thoughts or feedback on how to better handle the subject.
</blockquote>
<slot />
<p class="edit"><a href={edit} target="_blank">Edit this page</a></p>

<style>
  .date {
    font-size: 1rem;
    color: var(--text-color);
    opacity: 0.8;
    margin-bottom: 0.5rem;
  }
  .edit {
    display: flex;
  }
  .edit a {
    margin-left: auto;
  }
  img {
    object-fit: cover;
    object-position: center;
  }

  blockquote {
    font-size: 0.9rem;
    border-left: 12px solid var(--brand-color);
    border-radius: 2px;
    margin: 1rem 0 1rem;
    background-color: var(--body-font);
    padding: 8px 0 8px 16px;
  }

  @media screen and (max-width: 800px) {
    h1 {
      font-size: 2rem;
    }
    img {
      height: 200px;
      object-fit: contain;
      object-position: center;
    }
  }
</style>
