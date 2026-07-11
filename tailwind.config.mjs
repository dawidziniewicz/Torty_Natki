/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Soft pastel pink used for backgrounds / sections
        blush: {
          50: '#fff7f9',
          100: '#ffedf2',
          200: '#ffd9e4',
          300: '#ffbdd1',
          400: '#ff96b6',
          500: '#fa6a97',
          600: '#e8497b',
          700: '#c33463',
          800: '#9e2a51',
          900: '#7c2544',
        },
        // Vibrant candy pink used for CTAs / accents
        candy: {
          50: '#fff0f6',
          100: '#ffdcea',
          200: '#ffb2d2',
          300: '#ff7fb3',
          400: '#ff4f97',
          500: '#f5227a',
          600: '#d90f63',
          700: '#b30a51',
          800: '#8f0c44',
          900: '#780f3c',
        },
        // Deep berry / chocolate tone for high-contrast typography
        berry: {
          50: '#f7f0f2',
          100: '#ecdbe1',
          200: '#d3aebb',
          300: '#b17f92',
          400: '#7e4a5e',
          500: '#5a2d40',
          600: '#472233',
          700: '#3a1c2a',
          800: '#2c1520',
          900: '#1e0e16',
        },
        cream: '#fffaf4',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"Quicksand"', '"Nunito"', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 30px -12px rgba(120, 15, 60, 0.18)',
        card: '0 8px 24px -8px rgba(120, 15, 60, 0.15)',
      },
      backgroundImage: {
        'blush-gradient': 'linear-gradient(135deg, #fff0f6 0%, #ffe4ec 45%, #ffd0e0 100%)',
      },
    },
  },
  plugins: [],
};
