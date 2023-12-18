/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      backgroundColor: {
        'blob-color': '#edf0df',
        'blob-color2': '#e76346',
        'blob-color3': '#f89d44',
        'blob-color4': '#a3c465',
        'blob-color5': '#e66249',
      },

      borderRadius: {
        'blob-1': '30% 70% 28% 72% / 30% 30% 70% 70% ',
        'blob-2': '31% 78% 88% 21% / 49% 33% 76% 57% '
      },

      colors: {
        'blob-color': '#edf0df',
        'blob-color2': '#e76346',
        'blob-color3': '#f89d44',
        'blob-color4': '#a3c465',
        'blob-color5': '#e66249',
      }
    },
  },
  plugins: [],
}