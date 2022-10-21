/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './src/*.{js,jsx,ts,tsx}',
    './src/**/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'topo': "url('/src/images/topography.svg')",
      },
      colors: {
        'greeny': '#22c55e', 
      },
    },
  },
  plugins: [],
}
