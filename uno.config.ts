import {
	defineConfig,
	presetUno,
	presetIcons,
	presetTypography,
	presetWebFonts,
	presetAttributify,
} from "unocss";

export default defineConfig({
	shortcuts: {
		"nav-li": "mx-0 my-6 md:mx-4 md:my-0",
		"nav-a": "text-xl font-medium !text-fg hover:!text-primary",
	},

	presets: [
		presetUno({}),
		presetIcons({
			scale: 1.2,
		}),
		presetTypography(),
		presetWebFonts({
			fonts: {
				sans: "Inter",
				serif: "Inter",
				mono: "Iosevka",
			},
		}),
		presetAttributify(),
	],
	theme: {
		colors: {
			darker: "#000008",
			bg: "#0d0f18",
			mbg: "#050710",
			bg3: "#6e92d4",
			fg: "#a5b6cf",
			bright: "#b0b3b8",
			error: "#dd6777",
			success: "#90ceaa",
			warn: "#d4bb88",
			primary: "#769adc",
			disabled: "#c296eb",
			secondary: "#8baff1",
		},

		screens: {
			sm: "576px",
			// => @media (min-width: 576px) { ... }

			md: "960px",
			// => @media (min-width: 960px) { ... }

			lg: "1440px",
			// => @media (min-width: 1440px) { ... }
		},

		lineHeight: {
			"extra-loose": 2.5,
			14: "3rem",
		},

		height: {
			fuller: "140vh",
		},
	},
});
