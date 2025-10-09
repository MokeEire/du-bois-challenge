<script>
  import Categories from "$lib/components/Categories.svelte";
  import { format } from "date-fns";
  let { plate } = $props();
  let { title, description, slug, categories, image, challenge, date } = $derived(plate);
  let actualDate = $derived(new Date(date));
</script>

<div class="post-item">
  <a data-sveltekit-prefetch class="card-link" href="/plates/{slug}">
    <div class="image-container">
      <img width="800" height="400" src={image} alt={title} />
      <div class="overlay">
        <div class="header">
          <h2 class="title">{title}</h2>
          <div class="challenge-info">
            <span class="challenge">Challenge #{challenge}</span>
            <span class="date">{format(actualDate, "d MMM yyyy")}</span>
          </div>
        </div>
        <p class="description">{description}</p>
      </div>
    </div>
  </a>
</div>

<style>
  .post-item {
    position: relative;
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .post-item:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  }

  .card-link {
    display: block;
    text-decoration: none;
    color: inherit;
  }

  .image-container {
    position: relative;
    aspect-ratio: 2/1; /* Changed from 8/3 to make it taller */
    overflow: hidden;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: transform 0.3s ease;
  }

  .post-item:hover img {
    transform: scale(1.05);
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(0, 0, 0, 0.12) 0%,
      rgba(0, 0, 0, 0.25) 50%,
      rgba(0, 0, 0, 0.5) 100%
    );
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
    color: white;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .post-item:hover .overlay {
    opacity: 1;
  }

  .header {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .challenge-info {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-bottom: 0.75rem;
    border-radius: 4px;
  }

  .challenge {
    font-size: 0.95rem;
    font-weight: 600;
    margin-bottom: 0.25rem;
  }

  .date {
    font-size: 0.85rem;
    opacity: 0.9;
  }

  .title {
    font-size: 1.6rem;
    font-weight: 700;
    margin: 0;
    text-align: right;
    line-height: 1.2;
    border-radius: 4px;
  }

  .description {
    font-size: 1.05rem;
    margin: 0;
    text-align: left;
    line-height: 1.5;
    max-width: 85%;
    padding: 1rem;
    border-radius: 4px;
    font-weight: 400;
  }

  @media screen and (max-width: 768px) {
    .image-container {
      aspect-ratio: 3/2;
    }
    
    .overlay {
      opacity: 1;
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.5) 0%,
        rgba(0, 0, 0, 0.3) 50%,
        rgba(0, 0, 0, 0.9) 100%
      );
      padding: 1.5rem;
    }

    .title {
      font-size: 1.3rem;
    }

    .description {
      font-size: 0.95rem;
      max-width: 100%;
    }

    .challenge {
      font-size: 0.85rem;
    }

    .date {
      font-size: 0.8rem;
    }
  }
</style>
