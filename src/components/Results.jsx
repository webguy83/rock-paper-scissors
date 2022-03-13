import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Piece from './Piece';
import { pieces } from '../utils';
import Fade from '@mui/material/Fade';
import { forwardRef, useState } from 'react';

const headerStyling = {
  textTransform: 'uppercase',
  color: 'background.paper',
};

const pickedStyles = {
  display: 'flex',
  flexDirection: 'column',
  marginLeft: 4,
  marginRight: 4,
};

function checkResult(selectedPiece, housePiece, items) {
  if (selectedPiece === housePiece) {
    return 'tie';
  }
  if (items[selectedPiece].defeats.includes(housePiece)) {
    return 'win';
  }
  return 'lose';
}

export default function Results({ selectedPiece, housePiece }) {
  const [result, setResult] = useState(null);

  const WrapperPiece = forwardRef((props, ref) => {
    return (
      <div ref={ref} {...props}>
        <Piece size={{ width: 220, height: 220 }} info={pieces[housePiece]} />
      </div>
    );
  });

  return (
    <Box display='flex'>
      <Box sx={pickedStyles}>
        <Typography
          textAlign='center'
          marginBottom={6}
          letterSpacing={2}
          variant='h6'
          component='h2'
          sx={headerStyling}
        >
          You Picked
        </Typography>
        <Piece size={{ width: 220, height: 220 }} info={pieces[selectedPiece]} />
      </Box>
      {result && <Box>{result}</Box>}

      <Box sx={pickedStyles}>
        <Typography
          textAlign='center'
          letterSpacing={2}
          marginBottom={6}
          variant='h6'
          component='h2'
          sx={headerStyling}
        >
          The House Picked
        </Typography>
        <Box position='relative' sx={{ width: 220, height: 220 }}>
          <Box position='absolute' zIndex={1}>
            <Fade
              in={true}
              timeout={{ enter: 3000 }}
              addEndListener={(node) => {
                node.addEventListener('transitionend', () => {
                  setResult(checkResult(selectedPiece, housePiece, pieces));
                });
              }}
            >
              <WrapperPiece />
            </Fade>
          </Box>
          <Box
            position='absolute'
            sx={{
              width: '78%',
              height: '78%',
              top: '12%',
              left: '11%',
              backgroundColor: 'black',
              opacity: 0.2,
              borderRadius: '50%',
              zIndex: 0,
            }}
          ></Box>
        </Box>
      </Box>
    </Box>
  );
}
