/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width:{
        '400':'400px',
        '600': '600px',
        '30': '30px'
      },
      height:{
        '400':'400px',
        '600': '600px',
        '30': '30px'
      },
      
    },
  },
  plugins: [
  ],
}

