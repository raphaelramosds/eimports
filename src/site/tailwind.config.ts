import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    boxShadow: {
      'low': '0px 0px 6px 0px rgba(0, 0, 0, 0.15)',
    },
    colors: {
      'white': '#fff',

      'gray': {
        100: '#E1E1E6',
        300: '#C4C4CC',
        400: '#8D8D99',
        500: '#7C7C8A',
        600: '#323238',
        700: '#29292E',
        800: '#202024',
        900: '#121214',
      },

      'green': {
        300: '#00B37E',
        500: '#00875F',
        700: '#015F43',
      },

      'red': {
        300: '#F75A68',
        500: '#AB222E',
        700: '#7A1921',
      }
    },
  },
  plugins: [],
}
export default config
