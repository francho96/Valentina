/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js, jsx}"],
  theme: {
    extend: {  
      
      extend: {
      backgroundImage: {
        'hero': "url('./img/fondo.png')",
      },
  }},
  },
  plugins: [],
}
