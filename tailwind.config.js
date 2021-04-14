const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './src/**/*.vue',
    './src/**/*.js',
    './src/**/*.md',
    './src/**/*.html',
  ],
  theme: {
    colors: {
      primary: colors.coolGray[50],
      secondary: colors.coolGray[200],
      tertiary: colors.purple[500],
      green: colors.green[500],
      hover: colors.orange[500],
      background: colors.gray[900],
      gray800: colors.gray[800],
    },
  },
}
