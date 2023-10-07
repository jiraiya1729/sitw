/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {
      backgroundColor: {
        'nebula-blue': '#242b3d',
        'nebula-blue-light': '#2c3346'
      },
      textColor: {
        'nebula-blue': '#242b3d'
      }
    },
  },
  plugins: [],
}