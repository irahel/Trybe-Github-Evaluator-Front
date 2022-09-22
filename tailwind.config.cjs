/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    fontFamily:{
      sans:['Epilogue', 'sans-serif']
    },
    extend: {
      backgroundImage:{
        trybe: "url('/background.svg')"
      }
    },
  },
  plugins: [],
}
