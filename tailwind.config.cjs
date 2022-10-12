/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    colors: {
      black: '#000000',
      cyan: {
        300: '#9be1fb',
        400: '#6dd1f7',
        500: '#81d8f7',
      },
      gray: {
        100: '#E1E1E6',
        200: '#C4C4CC',
        300: '#A1A1AA',
        400: '#7C7C8A',
        500: '#61617A',
        600: '#52525B',
        700: '#3F3F46',
        800: '#202024',
        900: '#121214'
      },
      transparent: 'transparent',
      white: '#FFFFFF'
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32
    }
  },
  plugins: [],
}
