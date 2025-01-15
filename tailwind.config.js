/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html', // Ruta de tu archivo HTML principal
    './src/**/*.{html,js}', // Ruta de tus archivos de proyecto
    "./node_modules/flyonui/dist/js/accordion.js"
  ],
  safelist: [
    'hidden',
    'peer-checked:block',
    'peer-checked:hidden',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Añade "Poppins" como la fuente principal
      },
    },
  },
  plugins: [
    require("flyonui"),
    require("flyonui/plugin"), // Require only if you want to use FlyonUI JS component
    require('tailwindcss-animated')
  ],
};
