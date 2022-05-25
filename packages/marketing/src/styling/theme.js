import { createMuiTheme } from '@material-ui/core/styles'
import Barlow from './fonts/Barlow/Barlow-Regular.ttf'
import Playfair from './fonts/Playfair_Display/PlayfairDisplay-VariableFont_wght.ttf'

const Barlow = {
    fontFamily: 'Barlow',
    fontStyle: 'regular',
    fontDisplay: 'swap',
    fontWeight: '400',
    src: `
      local('Barlow'),
      local('Barlow-Regular'),
      url(${Barlow}) format('ttf')
    `,
    unicodeRange:
      'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
   };

const Playfair = {
    fontFamily: '"Playfair Display"',
    fontStyle: 'regular',
    fontDisplay: 'swap',
    fontWeight: '400',
    src: `
      local('Playfair'),
      local('PlayfairDisplay-VariableFont_wght'),
      url(${Playfair}) format('ttf')
    `,
    unicodeRange:
      'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
   };

export default createMuiTheme({
    typography: {
      fontFamily: ['"Open Sans"', '"Playfair Display"', 'Barlow', 'Roboto'].join(','),
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          '@font-face': [Playfair]
        }
      }
    }
})