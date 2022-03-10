// @ts-nocheck
import './App.css';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
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

const rulesBtnStyles = {
  position: 'absolute',
  bottom: 30,
  right: 30,
};

const RulesButton = styled(Button)({
  color: 'white',
  borderColor: 'white',
  paddingLeft: 35,
  paddingRight: 35,
  fontSize: 18,
  letterSpacing: 2,
  '&:hover': {
    borderColor: 'white',
    backgroundColor: 'transparent',
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
          minHeight: '100vh',
        }}
      >
        <Header />
        <Gameboard />
        <RulesButton variant='outlined' disableRipple sx={rulesBtnStyles}>
          Rules
        </RulesButton>
      </Container>
    </ThemeProvider>
  );
}

export default App;
