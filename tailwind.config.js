/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8DD3BB',
        secondary: '#CDEAE1'
      },
      fontFamily: {
        'roboto-regular': ['Roboto-Regular', 'sans-serif'],
        'roboto-thin': ['Roboto-Thin', 'sans-serif'],
        'roboto-thinItalic': ['Roboto-ThinItalic', 'sans-serif'],
        'roboto-medium': ['Roboto-Medium', 'sans-serif'],
        'roboto-mediumItalic': ['Roboto-MediumItalic', 'sans-serif'],
        'roboto-light': ['Roboto-Light', 'sans-serif'],
        'roboto-lightItalic': ['Roboto-LightItalic', 'sans-serif'],
        'roboto-bold': ['Roboto-Bold', 'sans-serif'],
        'roboto-boldItalic': ['Roboto-BoldItalic', 'sans-serif'],
        'roboto-italic': ['Roboto-Italic', 'sans-serif'],
        'roboto-black': ['Roboto-Black', 'sans-serif'],
        'roboto-blackItalic': ['Roboto-BlackItalic', 'sans-serif'],
      }
    },
  },
  plugins: [],
}