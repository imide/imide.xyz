// @ts-check
import { defineConfig } from "astro/config";
import unocss from "@unocss/astro";
import netlify from "@astrojs/netlify";
import webVitals from "@astrojs/web-vitals";
import mdx from "@astrojs/mdx";
import remarkMdxCodeMeta from "rehype-mdx-code-props";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	site: "https://imide.xyz",

	integrations: [
		unocss({
			injectReset: true,
		}),
		webVitals(),
		mdx({
			syntaxHighlight: "shiki",
			shikiConfig: {
				theme: "css-variables",
			},
			remarkPlugins: [remarkMdxCodeMeta],
			gfm: false,
		}),
		sitemap(),
	],
	output: "server",
	adapter: netlify(),
});
