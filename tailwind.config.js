/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Just:'Jost'
      },
      colors:{
        primary:"#010851",
        secondery:"#917af1",
        tartiary:"#707070",
        pink:"#ee9ae5",
      },
      boxShadow:{
        '3xl':'0px 10px 50px 0px rgba(0, 0, 0, 0.15)'
      }
    },
  },
  plugins: [],
}