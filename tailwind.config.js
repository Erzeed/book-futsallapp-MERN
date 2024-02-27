/** @type {import('tailwindcss').Config} */
export default {
  darkMode: '',
  content: [
      "./index.html", "./src/**/*.{js,ts,jsx,tsx}",
      "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"
    ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 0 7px 5px rgba(0, 0, 0, .04)',
      }
    },
  },
  plugins: [],
}

