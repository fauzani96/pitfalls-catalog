import {createTheme} from '@mui/material/styles'
import {red} from '@mui/material/colors'

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#000',
    },
    secondary: {
      main: '#424141',
    },
    error: {
      main: red.A400,
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
