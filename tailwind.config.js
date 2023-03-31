/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors:{
      'black': '#505465',
      'greenLight': '#4dffcf',
      'greeLighter': '#4dffcf80',
      'greenLight-hover':'#3ECCA6',
      'green-hover':'#4dffcf',
      'white':'#ffffff',
    },
    fontFamily:{
      TitilliumWeb:'Titillium Web',
      'Karma':'Karma',
    },
    
    extend: {},
  },
  plugins: [],
}
