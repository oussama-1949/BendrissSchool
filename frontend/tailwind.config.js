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
      colors: {
        'custom-yellow': '#fdc526',  
        'custom-blue': '#0C356A',
      },
      animation: {
        'slide-up': 'slideUp 1s ease-out',
        'fade-in': 'fadeIn 1s ease-out',
        'fade-out': 'fadeOut 1s ease-out',
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      
      },
    },
  },
  plugins: [],
}
