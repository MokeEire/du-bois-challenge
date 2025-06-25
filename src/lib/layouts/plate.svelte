<script>
  import Seo from "$lib/components/Seo.svelte";
  import { siteTitle } from "$lib/constants";
  import { base } from "$app/paths";
  import { format } from "date-fns";
  import { Utterances, utterancesTheme } from "@codewithshin/svelte-utterances";
  import { repoName } from "$lib/constants";
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

<a
  class="challenge"
  href="https://github.com/ajstarks/dubois-data-portraits/tree/master/challenge/2024#the-challenges"
  >Challenge #{challenge}</a
>
<h1>{title} (Plate {plateNum})</h1>

<p class="date">{format(actualDate, "d MMM yyyy")}</p>

<blockquote>
  <strong>Please Note</strong>: The language used in this piece comes directly
  from W.E.B. Du Bois' scientific study in 1900. I am torn about reproducing
  language that could be painful for people to read, but I thought altering the
  wording would be a disservice to the work. I find the language of Du Bois'
  work to be a powerful reminder, especially for readers in a modern context,
  that racial inequality has a long tenure in our societies and institutions.
  However, race is a difficult subject to navigate with appropriate awareness
  and compassion, especially for white people like myself. If you have any
  thoughts or feedback on how to better present this work,
  <a href="../contact">please reach out</a>.
</blockquote>

<slot />

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

  blockquote {
    font-size: 0.9rem;
    border-left: 12px solid var(--db-crimson);
    border-radius: 2px;
    margin: 1rem 0 1rem;
    background-color: transparent;
    padding: 8px 0 8px 16px;
  }

  @media screen and (max-width: 800px) {
    h1 {
      font-size: 2rem;
    }
  }
  
</style>
