/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-green': '#00B294',
        'light-green': '#4CD2C0',
        'lightest-green': '#A6EEE3',
        'dark-green': '#0AA58B',
        'blue-green': '#02a5a5'
      }
    },
  },
  plugins: [],
}
