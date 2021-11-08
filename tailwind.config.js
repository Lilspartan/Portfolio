module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#273043",
        accent: "#DD0426"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
