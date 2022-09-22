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
      }, 
      animation: {
        fadeIn: "fadeIn 2s ease-in forwards"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        }
      }
    },
    variants: {
      animation: ["motion-safe"]
    }
  },
  plugins: [],
}
