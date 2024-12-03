/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        mplus: ['"M PLUS Rounded 1c"', 'sans-serif']
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

