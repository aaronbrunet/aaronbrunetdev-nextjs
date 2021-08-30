const { transformOrigin } = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
       wiggle: {
         '0%,50%,100%': { transform: 'rotate(0deg)' },
         '33%': { transform: 'rotate(50deg)',
         transformOrigin: 'center'
         },
         '66%': { transform: 'rotate(-15deg)',
         transformOrigin: 'center' }
       }
      },
      animation: {
        wiggle: 'wiggle .4s linear 2'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'),],
}
