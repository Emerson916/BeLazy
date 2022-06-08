module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        purple: {
          800: "#303C76"
        },
        gray: {
          700: '#343746'
        }
      }
    },
  },
  plugins: [],
}
