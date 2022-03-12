// @ts-nocheck
import './App.css';
import { useState } from 'react';
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
  width: 400,
  bgcolor: 'background.paper',
  p: 4,
  borderRadius: 2.5,
};

function App() {
  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
        <Header />
        <Gameboard />
        <RulesButton variant='outlined' disableRipple onClick={handleOpen}>
          Rules
        </RulesButton>
      </Container>
    </ThemeProvider>
  );
}

export default App;
