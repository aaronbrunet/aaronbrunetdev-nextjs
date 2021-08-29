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
         '25%': { transform: 'rotate(15deg)',
         transformOrigin: 'bottom-right'
         },
         '75%': { transform: 'rotate(-15deg)',
         transformOrigin: 'bottom-right' }
       }
      },
      animation: {
        wiggle: 'wiggle .3s ease-in-out 2'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'),],
}
