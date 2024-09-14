/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      fontWeight: {
        light: 300,
        regular: 400,
        semiBold: 600,
        bold: 700,
      },
      colors : {
        'custom-yellow': '#fdc526',  
        'custom-blue' : '#0C356A'

      }
    },
  },
  plugins: [],
}
