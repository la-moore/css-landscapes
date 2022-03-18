const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    borderWidth: (theme) => ({
      ...theme('spacing')
    }),
    colors: {
      ...colors,
      current: 'currentColor',
      inherit: 'inherit',
    },
    extend: {
      borderRadius: {
        '4xl': '2rem',
      },
      rotate: {
        20: '20deg',
        30: '30deg',
        40: '40deg',
        50: '50deg',
        60: '60deg',
        70: '70deg',
        80: '80deg',
        '-20': '-20deg',
        '-30': '-30deg',
        '-40': '-40deg',
        '-60': '-60deg',
        '-70': '-70deg',
      },
      translate: {
        '1/5': '20%',
        '1/6': '16.66%',
        '1/7': '14.26%',
        '1/8': '12.5%',
        '-1/5': '-20%',
        '-1/6': '-16.66%',
      },
      scale: {
        '-100': '-1',
      },
    }
  },
  variants: {
    extend: {}
  },
}
