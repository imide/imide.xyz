<script lang='ts'>
  import { onMount } from 'svelte'

  interface Repo {
    name: string
    description: string
    html_url: string
    stargazers_count: number
  }

  interface Props {
    FEATURED_REPOS?: string[]
  }

  const { FEATURED_REPOS = [
    'imide.xyz',
    'ChatHistoryPlus',
    'DarkKore-reborn',
    'met-linux',
  ] }: Props = $props()

  let repos: Repo[] = $state([])

  onMount(async () => {
    await fetchRepos()
    await fetchMetRepos()
  })

  async function fetchRepos() {
    const response = await fetch(
      'https://api.github.com/users/imide/repos',
    )
    const data: Repo[] = await response.json()
    repos = data.filter(repo => FEATURED_REPOS.includes(repo.name))
  }

  async function fetchMetRepos() {
    const response = await fetch(
      'https://api.github.com/orgs/METProject/repos',
    )
    const data: Repo[] = await response.json()
    repos = repos.concat(data)
  }
</script>

<div class='cardscontainer mt-4 flex flex-wrap justify-center gap-4'>
  {#each repos as repo}
    <a
      class='w-full flex flex-col rounded-xl bg-mbg p-4 text-bright md:w-[15.5rem]'
      href={repo.html_url}
    >
      <article class='flex-grow'>
        <h3 class='text-fg'>{repo.name}</h3>
        <p class='mb-2'>{repo.description}</p>
      </article>
      <p class='mt-2 flex items-center justify-end'>
        <span class='i-ph-star-fill mr-1 h-1em w-1em hover:text-warn'
        ></span>
        <span>{repo.stargazers_count}</span>
      </p>
    </a>
  {/each}
</div>
