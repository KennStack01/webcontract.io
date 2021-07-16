module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
       'sans': ['Gontserrat', 'poppins light', 'montserrat regular'],
       'serif': ['Gontserrat', 'poppins medium', 'montserrat medium'],
    },
    // fontFamily: {
    //    'sans': ['poppins medium', 'montserrat regular', 'ui-sans-serif', 'system-ui'],
    //    'serif': [ 'poppins medium', 'montserrat medium', 'ui-serif', 'Georgia'],
    // },
    extend: {
      colors: {
       'turbo': {
          DEFAULT: '#E2DF00',
          '50': '#FFFEC8',
          '100': '#FFFEAF',
          '200': '#FFFD7C',
          '300': '#FFFD49',
          '400': '#FFFC16',
          '500': '#E2DF00',
          '600': '#AFAD00',
          '700': '#7C7A00',
          '800': '#494800',
          '900': '#161600'
        },
        'gun-powder': {
          DEFAULT: '#3F3D56',
          '50': '#B3B1C8',
          '100': '#A4A2BD',
          '200': '#8784A8',
          '300': '#6B6792',
          '400': '#555274',
          '500': '#3F3D56',
          '600': '#292838',
          '700': '#13131A',
          '800': '#000000',
          '900': '#000000'
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
