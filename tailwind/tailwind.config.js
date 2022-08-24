/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: [
    "./**/*.html",
  ],
  darkMode: "class",
  theme: {
    extend: {
      margin: {
        35: '35px',
      },
      colors: {
        gray33 : '#333',
        orangefa: '#ffa400',
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ["odd"]
    }
  },
  plugins: [],  
}
