import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import svelte from '@astrojs/svelte'

import vercel from '@astrojs/vercel'

import unocss from '@unocss/astro'

import icon from 'astro-icon'

// @ts-check
import { defineConfig } from 'astro/config'

import remarkMdxCodeMeta from 'rehype-mdx-code-props'

// https://astro.build/config
export default defineConfig({
  site: 'https://imide.xyz',

  integrations: [unocss({
    injectReset: true,
  }), mdx({
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'css-variables',
    },
    remarkPlugins: [remarkMdxCodeMeta],
    gfm: false,
  }), sitemap(), icon(), svelte()],
  output: 'server',
  adapter: vercel(),
})
