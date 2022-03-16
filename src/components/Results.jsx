import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Piece from './Piece';
import { pieces } from '../utils';
import Fade from '@mui/material/Fade';
import { forwardRef, useState } from 'react';
import PlayAgainButton from './PlayAgainButton';

const headerStyling = {
  textTransform: 'uppercase',
  color: 'background.paper',
  fontWeight: 700,
};

const pickedStyles = {
  display: 'flex',
  flexDirection: 'column',
  marginLeft: 4,
  marginRight: 4,
};

export default function Results({
  setSelectedPiece,
  setSelectedHousePiece,
  selectedPiece,
  housePiece,
  setScore,
}) {
  const [result, setResult] = useState(null);

  function checkResult(selectedPiece, housePiece, items) {
    if (selectedPiece === housePiece) {
      return 'tie';
    }
    if (items[selectedPiece].defeats.includes(housePiece)) {
      setScore((prevScore) => {
        const score = prevScore + 1;
        localStorage.setItem('gameScore', score);
        return score;
      });
      return 'win';
    }
    setScore((prevScore) => {
      let score = prevScore;
      if (score > 0) {
        score--;
      } else {
        score = 0;
      }
      localStorage.setItem('gameScore', score);
      return score;
    });
    return 'lose';
  }

  const WrapperPiece = forwardRef((props, ref) => {
    return (
      <div ref={ref} {...props}>
        <Piece {...props} size={{ width: 220, height: 220 }} info={pieces[housePiece]} />
      </div>
    );
  });

  return (
    <Box display='flex' height='max-content'>
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
        <Piece
          winner={result === 'win'}
          size={{ width: 220, height: 220 }}
          info={pieces[selectedPiece]}
        />
      </Box>
      {result && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Typography letterSpacing={2} variant='h3' component='p' sx={headerStyling}>
            You {result}!
          </Typography>
          <PlayAgainButton
            onClick={() => {
              setSelectedPiece(null);
              setSelectedHousePiece(null);
            }}
            sx={{ mt: 2 }}
            variant='contained'
            disableRipple
          >
            Play Again
          </PlayAgainButton>
        </Box>
      )}

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
              timeout={{ enter: 1500 }}
              addEndListener={(node) => {
                node.addEventListener('transitionend', () => {
                  setResult(checkResult(selectedPiece, housePiece, pieces));
                });
                node.addEventListener('transitioncancel', () => {
                  setResult(checkResult(selectedPiece, housePiece, pieces));
                });
              }}
            >
              <WrapperPiece winner={result === 'lose'} />
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
