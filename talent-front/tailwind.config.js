/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

    },
    spacing: {
      '10': '1.5rem',
      '20': '5rem',
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
      'white': '#ffffff',

    },
  },
  plugins: [],
}

