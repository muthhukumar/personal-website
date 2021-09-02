const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: process.env.NODE_ENV ? 'jit' : undefined,
  purge: ['./app/**/*', './app/routes/**/*', './app/components/**/*'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      ...defaultTheme.fontFamily,
      'sans': ['Nunito'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
