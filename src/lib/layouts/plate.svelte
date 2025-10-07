<script>
  import Seo from "$lib/components/Seo.svelte";
  import { siteTitle } from "$lib/constants";
  import { base } from "$app/paths";
  import { format } from "date-fns";
  import { Utterances, utterancesTheme } from "@codewithshin/svelte-utterances";
  import { repoName } from "$lib/constants";
  import Disclaimer from "$lib/components/Disclaimer.svelte";
  import '$lib/css/plate.css';

  export let data;
  export let title, description, date, challenge, plateNum, edit, image;

  const theme = "github-light";

  const seo = {
    title: `${title} | ${siteTitle}`,
    description,
    image,
  };

  $: recentPosts = data.plates;
  $: actualDate = new Date(date);
</script>

<Seo {...seo} />

<article class="plate-content">
  <a
    class="challenge"
    href="https://github.com/ajstarks/dubois-data-portraits/tree/master/challenge/2024#the-challenges"
    >Challenge #{challenge}</a
  >
  <h1>{title} (Plate {plateNum})</h1>

  <p class="date">{format(actualDate, "d MMM yyyy")}</p>

  <Disclaimer />

  <slot />
</article>

<hr />

<Utterances reponame={repoName} {theme} />

<a class="return padding-bottom border-top" href="/" sveltekit:prefetch
  >&#8592; Back to all plates
</a>
<p class="edit"><a href={edit} target="_blank">Edit this page</a></p>

<style>
  .challenge {
    font-size: 0.95rem;
    color: var(--db-brown);
    opacity: 0.8;
    margin-bottom: 0;
    text-decoration: none;
    font-weight: 500;
  }

  .challenge:hover {
    text-decoration: underline;
  }

  h1 {
    margin-top: 0;
    font-size: 2rem;
  }
  .date {
    font-size: 1rem;
    color: var(--db-brown);
    opacity: 0.8;
    margin-bottom: 0.5rem;
  }

  .edit {
    display: flex;
  }
  .edit a {
    margin-left: auto;
  }

  .return {
    display: flex;
    margin: 1rem 0 0;
  }

  .border-top {
    border-top: 1px solid var(--accent-color);
    border-top: 0.5px solid var(--accent-color);
    padding-top: 1.5rem;
  }

  .padding-bottom {
    padding-bottom: 0.2rem;
  }

  

  @media screen and (max-width: 800px) {
    h1 {
      font-size: 2rem;
    }
  }
  
</style>
