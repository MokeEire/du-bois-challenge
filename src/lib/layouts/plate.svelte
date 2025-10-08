<script>
  import Seo from "$lib/components/Seo.svelte";
  import { siteTitle } from "$lib/constants";
  import { base } from "$app/paths";
  import { format } from "date-fns";
  import { Utterances, utterancesTheme } from "@codewithshin/svelte-utterances";
  import { repoName } from "$lib/constants";
  import Disclaimer from "$lib/components/Disclaimer.svelte";
  import "$lib/css/plate.css";

  export let data;
  export let title, description, date, challenge, plateNum, original, image;

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
  <h1>{title} (Plate {plateNum})</h1>
  <p class="challenge">Challenge #{challenge}</p>
  <a
    class="challenge-link"
    href="https://github.com/ajstarks/dubois-data-portraits/tree/master/challenge/2024#the-challenges"
    >View the challenges on GitHub</a
  >

  <p class="date">{format(actualDate, "d MMM yyyy")}</p>
  <hr />
  <a class="original" href={original}>View the original</a>

  <slot />
</article>

<hr />

<a class="return padding-bottom border-top" href="/" sveltekit:prefetch
  >&#8592; Back to all plates
</a>

<Utterances reponame={repoName} {theme} />

<style>
  .plate-content {
    margin-bottom: 2rem;
  }
  .challenge {
    font-size: 0.95rem;
    color: var(--db-brown);
    opacity: 0.8;
    margin-bottom: 0;
    margin-top: 0;
    font-weight: 500;
    line-height: 0.5;
  }

  .challenge-link:hover {
    opacity: 1;
  }

  .challenge-link {
    font-size: 0.8rem;
    color: var(--db-brown);
    opacity: 0.6;
    margin-bottom: 0;
    text-decoration: underline;
    font-weight: 500;
  }

  hr {
    margin: 0.5rem 1rem;
    opacity: 0.25;
  }

  h1 {
    margin-top: 0;
    font-size: 2rem;
  }
  .date {
    font-size: 0.8rem;
    color: var(--db-brown);
    opacity: 0.8;
    margin-bottom: 0.5rem;
    margin-top: 0;
  }

  .return {
    margin: 0 1rem;
    font-size: 0.9rem;
  }

  .border-top {
    border-top: 1px solid var(--accent-color);
    border-top: 0.5px solid var(--accent-color);
    padding-top: 1.5rem;
  }

  .padding-bottom {
    padding-bottom: 0.2rem;
  }

  .original {
    font-size: 1rem;
  }

  @media screen and (max-width: 800px) {
    h1 {
      font-size: 2rem;
    }
  }
</style>
