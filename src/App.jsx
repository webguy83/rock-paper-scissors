// @ts-nocheck
import './App.css';
import { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Header from 'components/Header';
import Gameboard from 'components/Gameboard';
import { theme } from './utils';
import RulesButton from 'components/RulesButton';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import closeIcon from './images/icon-close.svg';
import imageRules from './images/image-rules-bonus.svg';
import IconButton from '@mui/material/IconButton';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  textTransform: 'uppercase',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  p: 4,
  borderRadius: 2.5,
  outline: 'none',
};

function App() {
  const [open, setOpen] = useState(true);
  const [score, setScore] = useState(0);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const storage = localStorage.getItem('gameScore');

    if (storage) {
      setScore(parseInt(storage));
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Modal
        aria-labelledby='rules-modal-title'
        aria-describedby='rules-modal-description'
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Box display='flex' justifyContent='space-between'>
              <Typography
                id='rules-modal-title'
                color={theme.palette.neutral.darkText}
                fontWeight={700}
                variant='h4'
                component='h2'
              >
                Rules
              </Typography>
              <IconButton onClick={handleClose} aria-label='show rules'>
                <img style={{ alignSelf: 'center' }} src={closeIcon} alt='close icon' />
              </IconButton>
            </Box>

            <img src={imageRules} alt='rules' />
          </Box>
        </Fade>
      </Modal>
      <Container
        maxWidth='md'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <Header score={score} />
        <Gameboard setScore={setScore} />
      </Container>
      <Box
        sx={{
          position: 'fixed',
          display: 'flex',
          justifyContent: 'right',
          [theme.breakpoints.down('sm')]: {
            justifyContent: 'center',
          },
          bottom: 0,
          width: '100%',
          p: 4,
        }}
      >
        <RulesButton variant='outlined' disableRipple onClick={handleOpen}>
          Rules
        </RulesButton>
      </Box>
    </ThemeProvider>
  );
}

export default App;
