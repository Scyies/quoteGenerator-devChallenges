/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.tsx'],
  theme: {
    fontFamily: {
      montserrat: 'Montserrat, Arial, sans-serif',
      raleway: 'Raleway, Arial, sans-serif',
    },
    extend: {
      colors: {
        gray: {
          800: '#333333',
          500: '#4f4f4f',
          300: '#828282',
          100: '#f2f2f2',
        },
        yellow: '#f7df94',
      },
    },
  },
  plugins: [],
};
