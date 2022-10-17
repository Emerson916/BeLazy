/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,esm.mjs}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        colors:{
          "primary-color": "#7808a1",
          "secondary-color": "#6C63FF",
          "third-color": "#303C76",
        },
        purple: {
          800: "#303C76",
          500: "#6C63FF",
          200: "#7808a1",
        },
        gray: {
          700: "#343746",
        },
      },
    },
  },
  plugins: [],
};
