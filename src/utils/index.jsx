import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    neutral: {
      headerOutline: '#606e85',
      scoreText: '#2a46c0',
      darkText: '#3b4363',
    },
  },
  typography: {
    fontFamily: [
      'Barlow Semi Condensed',
      'Caveat',
      'cursive',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});
