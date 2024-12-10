/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'custom-red' : '#BC1823',
        'custom-red-light' : '#FF2533'
      }
    },
  },
  plugins: [],
}