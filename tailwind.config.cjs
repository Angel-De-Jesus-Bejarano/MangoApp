/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '72': '18rem',
        '84': '35rem',
        '96': '65rem',
      }
    },
  },
  plugins: [],
}
