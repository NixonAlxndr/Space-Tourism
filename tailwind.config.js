/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      lg: '1150px',
      md: '800px',
      sm: '500px'
    },
    extend: {},
  },
  plugins: [],
}

