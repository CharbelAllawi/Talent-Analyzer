/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        '5': '0.5rem',
        '10': '1.5rem',
        '12': '2.3rem',
        '20': '5rem',
        '21': '5.9rem',
        '22': '15rem',
        '23': '10.5rem',
        '50': '80rem',
      },
      fontFamily: {
        display: ["Inter"],
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(260deg, #393973 21.62%, #6C6CD9 95.41%)',
      },
      colors: {
        'custom-purple': '#333366',
        'custom-blue': '#2596be',
        'custom-grey': '#F5F5F5',
        'white': '#ffffff',
        'black': '#000000'
      },
    },
  },
  plugins: [],
});
