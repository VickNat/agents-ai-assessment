'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  cssVariables: true,
  typography: {
    fontFamily: 'var(--font-sans-serif)',
    h1: {
      fontSize: '2.8rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1.2rem',
      fontWeight: 400,
    },
  },
  palette: {
    mode: 'light',
    primary: {
      main: "#1E88E5",
    },
    secondary: {
      main: '#FFC107',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '8px',
          padding: '10px 15px',
          '&:hover': {
            backgroundColor: '#1565C0',
          },
        },
        contained: {
          backgroundColor: '#1E88E5',
          boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#1565C0',
          },
        },
        outlined: {
          borderColor: '#1E88E5',
          color: '#1E88E5',
          '&:hover': {
            borderColor: '#1565C0',
            boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)',
            backgroundColor: 'rgba(21, 101, 192, 0.04)',
          },
        },
        text: {
          color: '#1E88E5',
          '&:hover': {
            backgroundColor: 'rgba(21, 101, 192, 0.04)',
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#1E88E5',
          textDecoration: 'none',
          '&:hover': {
            textDecoration: 'underline',
            color: '#1565C0',
          },
        },
      }
    }
  },
});

export default theme;