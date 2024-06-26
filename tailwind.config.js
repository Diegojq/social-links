/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "black":"#141414",
        "dark-grey":"#1f1f1f",
        "grey":"#333333",
        "white":"#ffffff",
        "neon-green":"#c4f829",
      }
    },

  },
  plugins: [],
}
