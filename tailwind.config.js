/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      backgroundImage: {
        'hero-pattern': "url('/public/bg-props.jpg')",
      },

      colors: {
        'header-from': '#F3F3F3',
        'header-to' : '#e9d3f5',
        'text-color':'#463853',
        'text-lighter':'#998da0',
        'back-smoke' : '#f7f7f7',
        'true-gray' : '#808080',
        'true-gray-100' : '#949494',
      },

      animation: {
                'spin-slow': 'spin 5s linear infinite',
      },

      screens: {

        'sm': '350px',
        '2xl': '1440px',

      },

    },
  },
  plugins: [],
})
