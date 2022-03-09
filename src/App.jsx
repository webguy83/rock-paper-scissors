// @ts-nocheck
import './App.css';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Header from 'components/Header';
import Gameboard from 'components/Gameboard';

const theme = createTheme({
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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Container
        maxWidth='md'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        <Header />
        <Gameboard />
      </Container>
    </ThemeProvider>
  );
}

export default App;
