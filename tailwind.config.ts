import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#1E3A8A', // Deep blue
          light: '#3B82F6', // Lighter blue
        },
        secondary: {
          red: '#DC2626', // Deep red
          light: '#EF4444', // Lighter red
        },
      },
    },
  },
  plugins: [],
}
export default config 