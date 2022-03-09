// @ts-nocheck
import './App.css';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Header from 'components/Header';

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
      <Box
        height='100%'
        width='100%'
        position='absolute'
        sx={{
          backgroundImage: 'radial-gradient(circle at top, #1F3756, #141639);',
        }}
      >
        <Container
          maxWidth='md'
          sx={{
            height: '100%',
          }}
        >
          <Header />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
