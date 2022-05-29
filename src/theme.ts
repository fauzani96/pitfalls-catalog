import {createTheme} from '@mui/material/styles'
import {red} from '@mui/material/colors'

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#000',
      light: '#ffffff',
    },
    secondary: {
      main: '#a8a8a8',
    },
    error: {
      main: red.A400,
    },
    text: {
      primary: '#000',
      secondary: '#a8a8a8',
    },
  },
  typography: {
    fontFamily: [
      '"GT Walsheim"',
      '"Helvetica Neue"',
      'Helvetica',
      'Arial',
      'sans-serif',
    ].join(','),
    button: {
      textTransform: 'capitalize',
    },
  },
})

export default theme
