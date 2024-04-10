/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}","./main.js"],
  theme: {
    extend: {
      fontFamily: {
        inter:['Inter-VariableFont_slnt,wght','sans-serif']
      }
    },
  },
  plugins: [],
};
