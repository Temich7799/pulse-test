import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: '#F5F5F5',
          },
          border: '2px solid #000000',
          borderRadius: '0',
          boxShadow: 'none',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          ':hover': {
            backgroundColor: 'transparent',
          },
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: '#E0E0E0',
            border: '2px solid #000000',
          },
          border: '1px solid #000000',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
          border: '2px solid #000000',
          borderRadius: '0',
          boxShadow: 'none',
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: '#000000',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          border: '2px solid #000000',
          borderRadius: '0',
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#FFFFFF',
    },
    text: {
      primary: '#000000',
      secondary: '#333333',
    },
  },
  typography: {
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
    },
    button: {
      fontSize: '1rem',
      textTransform: 'none',
    },
    fontFamily: 'Comic Neue, sans-serif',
    h3: {
      fontSize: '1.5rem',
      fontWeight: 700,
    },
    h6: {
      fontSize: '1.2rem',
      fontWeight: 700,
    },
  },
});

export default theme;
