<script lang="ts">
import { onMount } from "svelte"

    interface Repo {
        name: string
        description: string
        html_url: string
        stargazers_count: number
      }

      export let FEATURED_REPOS: string[] = ['imide.xyz', 'PaperBackups', 'DarkKore-reborn', 'nixdots']

      let repos: Repo[] = []

      onMount(async () => {
        await fetchRepos()
      });

      async function fetchRepos() {
        const response = await fetch('https://api.github.com/users/imide/repos')
        const data: Repo[] = await response.json();
        repos = data.filter(repo => FEATURED_REPOS.includes(repo.name))
      }
   
</script>
<div class="cardscontainer mt-4 flex flex-wrap justify-center gap-4">
  {#each repos as repo}
    <a class="bg-mbg p-4 text-bright rounded-xl w-full md:w-[15.5rem] flex flex-col" href={repo.html_url}>
      <article class="flex-grow">
        <h3 class="text-fg">{repo.name}</h3>
        <p class="mb-2">{repo.description}</p>
      </article>
      <p class="flex items-center justify-end mt-2">
        <span class="i-ph-star-fill w-1em h-1em hover:text-warn mr-1"></span>
        <span>{repo.stargazers_count}</span>
      </p>
    </a>
  {/each}
</div>