/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontSize: {
			title_m: '45px',
			title_d: '65px',
			navLinks: '22px',
			paragraph: '18px'
		},
		colors: {
			primary: '#FFF6BF',
			secondary: '#5B4974'
		},

		extend: {
			fontFamily: {
				sans: ["source-sans-pro", ...defaultTheme.fontFamily.sans],
			},
			dropShadow: {
				'3xl': '20px 20px 3px rgba(0, 0, 0, 0.25)',
			},
			boxShadow: {
				'btn': '0px 0px 10px 0.5px #FFF6BF'
			}
		},
	},
	plugins: [],
}
