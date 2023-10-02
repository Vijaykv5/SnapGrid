/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      height: {
        '128': '37rem',
      }
    },
  },
  plugins: [],
}
