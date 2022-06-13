import React from 'react';
import Typography from '@material-ui/core/Typography';
import MaterialLink from '@material-ui/core/Link';
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider, CssBaseline } from '@material-ui/core/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Playfair Display',
      'Barlow',
      'Overpass',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    fontSize: 16,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides:`
        @font-face: {
          font-family: 'Playfair Display';
          font-style: normal;
          font-display: swap;
          fontWeight: '400';
          src: url(https://fonts.googleapis.com/css2?family=Playfair-Display&display=swap);
        }
      `,
    },
  },
});

export default function Copyright() {
  return (
      <ThemeProvider theme={theme}>
          <Typography variant="body2" align="center">
              {'Copyright © '}
              <MaterialLink component={Link} to="/" color="inherit">
                  Mavata
              </MaterialLink>{' '}
              {new Date().getFullYear()}
              {'.'}
          </Typography>
      </ThemeProvider>
  );
};