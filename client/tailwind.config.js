/** @type {import('tailwindcss').Config} */

const default_theme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...default_theme.fontFamily.sans]
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
}
