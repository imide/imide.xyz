import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  unocss: true,
  astro: true,
  svelte: true,

  ignores: [
    '.netlify',
    '.astro',
    '.dist',
  ],
})
