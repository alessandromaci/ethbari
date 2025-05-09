/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ethbari-green-light': '#A7F3D0',
        'ethbari-beige': '#E5E0D5',
        'ethbari-dark': '#1A1A1A',
      },
      fontFamily: {
        koho: ['KoHo', 'sans-serif'],
        geist: ['Geist', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '1400px',
        '9xl': '1600px',
      },
    },
  },
  plugins: [],
} 