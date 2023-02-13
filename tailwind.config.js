/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundimage: (theme) => ({
        'elipe-image': "url('/ellipe 1385.png)",
      })
    },
  },
  plugins: [],
}
