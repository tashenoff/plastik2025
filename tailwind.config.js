/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
      },
      colors: {
        primary: {
          blue: '#0066FF',
          dark: '#0052CC',
          light: '#3385FF'
        },
        secondary: {
          red: '#FF4D4D',
          light: '#FF6666'
        }
      },
    },
  },
  plugins: [],
} 