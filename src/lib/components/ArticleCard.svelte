<script>
  export let plate;
  $: ({ title, description, slug, categories, image } = plate);
</script>

<div class="card">
  <a href={`/plates/${plate.slug}`} title={plate.title} class="pointer">
  {#if plate.image}
    <div class="card-img">
        <img loading="lazy" src={`${plate.image}?w=512`} class="card-img-inner" alt='{plate.title}: {plate.description}'/>
    </div>
  {/if}
  <div class="card-inner">
      <h2 class="card-title">
        {plate.title}
      </h2>
    <!-- Card Text 
    <p class="card-text">
      {plate.description}
    </p>
    -->
    <span class="challenge">Challenge #{plate.challenge}</span>
  
  </div>
</a>
</div>

<style>
  .card {
    display: flex;
    overflow: hidden;
    position: relative;
    flex-direction: column;
    flex-grow: 1;
    justify-content: flex-start;
    align-items: flex-start;
    border: 2px solid transparent;
    border-radius: 0.5rem;
    transition: all 0.3s ease;
  }

  .card a {
    text-decoration: none;
  }

  .card-img {
    overflow: hidden;
    position: relative;
    align-self: stretch;
    border-radius: 0.5rem 0.5rem 0 0;
    height: 300px;
  }

  .card:hover {
    cursor: pointer;
    border: 2px solid var(--db-blue);
  }

  @media (min-width: 768px) {
    .card-img {
      height: 220px;
    }
  }

  .card-img-inner {
    object-fit: cover;
    width: 100%;
    height: 100%;
    transform: translateY(15%)
  }

  .card-inner {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }

  .challenge {
    font-size: 0.8rem;
    color: var(--bg-color);
    opacity: 0.95;
    text-decoration: none;
    font-weight: 400;
    background: var(--db-brown);
    padding: 4px 8px;
    border-radius: 4px;
    margin: 8px;
    align-self: flex-end
  }

  .card-title {
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 600;
    text-align: left;
    color: var(--db-black);
    padding: 8px;
    backdrop-filter: blur(6px);
    width: -moz-available;
    margin-top: 0;
    border-bottom: 1px solid var(--db-brown);
    border-radius: .5rem .5rem 0 0;
    background-color: var(--db-tan);
    min-height: 22%
  }


  .card-text {
    font-size: .9rem;
    line-height: 1.5rem;
    text-align: left;
    color: #4b5563;
    padding: 4px 8px;
  }

  
</style>
