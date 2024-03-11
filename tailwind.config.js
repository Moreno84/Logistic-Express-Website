/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors:{
      'black': '#000000',
      'greenLight': '#4dffcf',
      'greeLighter': '#4dffcf80',
      'greenLightDark': '#3ECCA6',
      'greeLighter-hover': '#4dffcf80',
      'greenLight-hover':'#e6fff8',
      'green-hover':'#4dffcf',
      'white':'#ffffff',
      'blackhover':'#003300',
   
    },
    fontFamily:{
      'TitilliumWeb':'Titillium Web',
      'Karma':'Karma',
    },
    texts:{

      'text-greenLight':'#4dffcf80',
      'text-black':'#000000',
    },
    
    extend: {},
  },
  plugins: [],
}
