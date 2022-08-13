/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: [
    "./**/*.html",
  ],
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
  plugins: [],  
}
