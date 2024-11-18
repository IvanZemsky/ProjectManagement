import { blue, grey, orange, red } from "@mui/material/colors";
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    secondary: {
      main: orange[500],
      light: orange[300],
      dark: orange[700],
      contrastText: grey[900],
    },
    white: {
      main: '#ffffff',
      dark: grey[300],
      contrastText: blue[500],
    },
    sensitive: {
      main: red[500],
      dark: red[700],
      light: red[300],
      contrastText: '#ffffff',
    }
  },
  typography: {
    h1: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    h2: {
      fontSize: '1.75rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '1.5rem',
    },
    h4: {
      fontSize: '1.25rem',
    },
    h5: {
      fontSize: '1rem',
    },
    h6: {
      fontSize: '0.875rem',
    },
  },
});
