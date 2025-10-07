<script>
  import { footerText, links } from "$lib/constants";
  const date = new Date();
  const year = date.getFullYear();
  export let sidebar = true;
</script>

{#if sidebar}
  <footer>
    <span>© Mark Barrett {year}.</span>
    <p>{footerText}</p>
  </footer>
{:else}
  <footer class="bottom">
    <p>
      Built with <a href="https://kit.svelte.dev/">SvelteKit</a> using
      <a href="https://github.com/sharu725/yuyutsu">yuyutsu</a> as a template.
    </p>
    <span style="margin-bottom:8px;">© Mark Barrett {year}.</span>
    <div class="about-links">
      {#each links as { title, url, target, icon }}
        <div class="link-item">
          <a href={url} {target}
            ><span class={icon}></span><span>{title}</span></a
          >
        </div>
      {/each}
    </div>
    
    
    
  </footer>
{/if}

<style>
  footer {
    color: #ddd;
    font-size: 0.8rem;
    opacity: .95;
  }

  footer.bottom {
    color: var(--text-color);
    text-align: center;
    margin: auto;
    width: fit-content;
    padding-bottom: 8px;
  }

  footer.bottom p {
    color: var(--text-color);
    text-align: center;
    font-size: 0.8rem;
    opacity: .95;
  }

  .about-links {
    display: flex;
    margin-top: 1rem;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    
  }

  .link-item {
    flex-basis: calc(
      33% - 10px
    ); /* Adjust the percentage for more or fewer items */
    text-align: center;
    opacity: 0.7;
    filter: grayscale(1);
    transition:
      filter 200ms ease,
      transform 400ms ease;
    line-height: 1;
  }

  .link-item a {
    text-decoration: none;
    display: flex;
    flex-flow: column;
    align-items: center;
  }

  .link-item span {
    display: block;
  }
  .link-item:hover {
    opacity: 1;
    filter: grayscale(0);
    transform: translateY(-3px);
  }


  .simple-icons--github {
    display: inline-block;
    width: 24px;
    height: 24px;
    --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M12 .297c-6.63 0-12 5.373-12 12c0 5.303 3.438 9.8 8.205 11.385c.6.113.82-.258.82-.577c0-.285-.01-1.04-.015-2.04c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729c1.205.084 1.838 1.236 1.838 1.236c1.07 1.835 2.809 1.305 3.495.998c.108-.776.417-1.305.76-1.605c-2.665-.3-5.466-1.332-5.466-5.93c0-1.31.465-2.38 1.235-3.22c-.135-.303-.54-1.523.105-3.176c0 0 1.005-.322 3.3 1.23c.96-.267 1.98-.399 3-.405c1.02.006 2.04.138 3 .405c2.28-1.552 3.285-1.23 3.285-1.23c.645 1.653.24 2.873.12 3.176c.765.84 1.23 1.91 1.23 3.22c0 4.61-2.805 5.625-5.475 5.92c.42.36.81 1.096.81 2.22c0 1.606-.015 2.896-.015 3.286c0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12'/%3E%3C/svg%3E");
    background-color: currentColor;
    -webkit-mask-image: var(--svg);
    mask-image: var(--svg);
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    -webkit-mask-size: 100% 100%;
    mask-size: 100% 100%;
  }

  .arcticons--emoji-web {
    display: inline-block;
    width: 24px;
    height: 24px;
    --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Cpath fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' d='M24.04 42.5c10.215 0 18.46-8.285 18.46-18.54c0-10.215-8.245-18.46-18.46-18.46C13.785 5.5 5.5 13.745 5.5 23.96c0 10.255 8.285 18.54 18.54 18.54m16.012-27.75H7.96m32.195 18.275H7.857M5.6 24h36.8M24.04 5.5v37' stroke-width='1'/%3E%3Cpath fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' d='M24.02 42.5c5.108 0 9.23-8.285 9.23-18.54c0-10.215-4.122-18.46-9.23-18.46c-5.128 0-9.27 8.245-9.27 18.46c0 10.255 4.142 18.54 9.27 18.54' stroke-width='1'/%3E%3C/svg%3E");
    background-color: currentColor;
    -webkit-mask-image: var(--svg);
    mask-image: var(--svg);
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    -webkit-mask-size: 100% 100%;
    mask-size: 100% 100%;
  }

  .brandico--linkedin-rect {
    display: inline-block;
    width: 24px;
    height: 24px;
    --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 1000'%3E%3Cpath fill='%23000' d='M196.064.25C88.347.25.187 88.408.187 196.127v607.841c0 107.717 88.158 195.845 195.877 195.845h607.841c107.718 0 195.845-88.127 195.845-195.845V196.127C999.75 88.41 911.623.25 803.905.25zm49.266 164.948c51.648 0 83.461 33.906 84.443 78.475c0 43.585-32.797 78.444-85.442 78.444h-.969c-50.665 0-83.412-34.857-83.412-78.444c0-44.568 33.738-78.475 85.379-78.475zm445.08 208.31c99.329 0 173.79 64.922 173.79 204.436v260.449H713.247V595.406c0-61.06-21.847-102.718-76.476-102.718c-41.704 0-66.562 28.078-77.476 55.202c-3.987 9.704-4.967 23.257-4.967 36.832v253.671H403.375s1.981-411.613 0-454.233h150.984v64.324c20.06-30.95 55.942-74.977 136.051-74.977zm-521.556 10.685h150.953v454.202H168.854z'/%3E%3C/svg%3E");
    background-color: currentColor;
    -webkit-mask-image: var(--svg);
    mask-image: var(--svg);
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    -webkit-mask-size: 100% 100%;
    mask-size: 100% 100%;
  }
</style>
