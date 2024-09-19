import db from '@astrojs/db'
import mdx from '@astrojs/mdx'
import netlify from '@astrojs/netlify'
import sitemap from '@astrojs/sitemap'
import svelte from '@astrojs/svelte'

import webVitals from '@astrojs/web-vitals'

import unocss from '@unocss/astro'

// @ts-check
import { defineConfig } from 'astro/config'

import icon from 'astro-icon'

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
  }), sitemap(), db(), webVitals(), icon(), svelte()],
  output: 'server',
  adapter: netlify(),
})
