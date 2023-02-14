/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    colors: {
      primary: '#FFF6BF',
      secondary: '#5B4974',
    },
    extend: {
      fontFamily: {
        inconsolata: ['Inconsolata'],
      },
      dropShadow: {
        '3xl': '20px 20px 3px rgba(0, 0, 0, 0.25)',
      },
      boxShadow: {
        btn: '0px 0px 10px 0.5px #FFF6BF',
      },
    },
  },
  plugins: [],
};
