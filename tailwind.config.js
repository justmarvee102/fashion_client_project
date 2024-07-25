/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{jsx,js}', './public/index.html'],

  darkMode: 'class', // or 'media' if you prefer automatic dark mode based on user's system preference
  theme: {
    extend: {
      // custom theme settings if needed
    },
  },
  variants: {
    extend: {
      backgroundColor: ['dark'],
      textColor: ['dark'],
      boxShadow: ['dark'],
    },
  },
  plugins: [],
};
