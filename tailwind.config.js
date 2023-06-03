/** @type {import('tailwindcss').Config} */
const purple = '#6558f5'
const yellow = '#fdf3d3'
const green = '#d1efec'

export default {
  content: ['./index.html', './src/**/*.{js,ts,vue}'],
  theme: {
    extend: {
      backgroundColor: {
        header: green,
        cartIcon: yellow,
        button: purple
      },
      textColor: {
        link: purple
      }
    }
  },
  plugins: []
}