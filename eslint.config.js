import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  unocss: true,
  astro: true,
  svelte: true,
  e18e: true,
  pnpm: false,

  ignores: ['.netlify', '.astro', '.dist'],
})
