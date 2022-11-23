/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'Sansita': ['Sansita Swashed', 'cursive'],
        'Roboto': ['Roboto', 'sans-serif']
      },
    },
  },
  plugins: [],
}