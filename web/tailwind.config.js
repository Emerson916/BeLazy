/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,esm.mjs}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        purple: {
          800: "#303C76",
          500: "#6C63FF",
        },
        gray: {
          700: "#343746",
        },
      },
    },
  },
  plugins: [],
};
