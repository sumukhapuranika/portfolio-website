/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#050506',
          900: '#0a0a0d',
          850: '#101014',
          800: '#17171c',
        },
        accent: {
          DEFAULT: '#6d5dfc',
          soft: '#a9a2ff',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(109, 93, 252, 0.32), 0 20px 80px rgba(109, 93, 252, 0.10)',
      },
    },
  },
  plugins: [],
};
