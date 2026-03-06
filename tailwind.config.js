/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'electric-green': '#39ff14',
        'electric-blue': '#00f6ff',
        'electric-purple': '#9400d3',
      }
    },
  },
  plugins: [],
};
