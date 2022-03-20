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
  margin: (theme) => theme.spacing(0, 4),
};

export default function Results({
  setSelectedPiece,
  setSelectedHousePiece,
  selectedPiece,
  housePiece,
  setScore,
}) {
  const [result, setResult] = useState('');
  const [playerWinner, setPlayerWinner] = useState(false);
  const [houseWinner, setHouseWinner] = useState(false);

  const mainSize = 280;

  function checkResult(selectedPiece, housePiece, items) {
    if (selectedPiece === housePiece) {
      setResult('tie');
    } else if (items[selectedPiece].defeats.includes(housePiece)) {
      setScore((prevScore) => {
        const score = prevScore + 1;
        localStorage.setItem('gameScore', score);
        return score;
      });
      setPlayerWinner(true);
      setHouseWinner(false);
      setResult('win');
    } else {
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
      setPlayerWinner(false);
      setHouseWinner(true);
      setResult('lose');
    }
  }

  const WrapperPiece = forwardRef((props, ref) => {
    return (
      <div ref={ref} {...props}>
        <Piece
          {...props}
          winner={houseWinner}
          size={{ width: mainSize, height: mainSize }}
          info={pieces[housePiece]}
        />
      </div>
    );
  });

  return (
    <>
      <Box display='flex' height='max-content'>
        <Box sx={pickedStyles}>
          <Typography
            textAlign='center'
            marginBottom={6}
            letterSpacing='0.125rem'
            variant='h6'
            component='h2'
            sx={headerStyling}
          >
            You Picked
          </Typography>
          <Piece
            winner={playerWinner}
            size={{ width: mainSize, height: mainSize }}
            info={pieces[selectedPiece]}
          />
        </Box>
        {result && (
          <Box
            sx={(theme) => ({
              position: 'relative',
              zIndex: 4,
              display: 'flex',
              [theme.breakpoints.down('md')]: {
                display: 'none',
              },
              flexDirection: 'column',
              justifyContent: 'center',

              minWidth: 230,
            })}
          >
            <Typography
              letterSpacing='0.125rem'
              variant='h3'
              align='center'
              component='p'
              sx={headerStyling}
            >
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
            letterSpacing='0.125rem'
            marginBottom={6}
            variant='h6'
            component='h2'
            align='center'
            sx={headerStyling}
          >
            The House Picked
          </Typography>
          <Box position='relative' sx={{ width: mainSize, height: mainSize }}>
            <Box position='absolute' zIndex={1}>
              <Fade
                in={true}
                timeout={{ enter: 1500 }}
                addEndListener={(node) => {
                  node.addEventListener('transitionend', () => {
                    checkResult(selectedPiece, housePiece, pieces);
                  });
                  node.addEventListener('transitioncancel', () => {
                    checkResult(selectedPiece, housePiece, pieces);
                  });
                }}
              >
                <WrapperPiece />
              </Fade>
            </Box>
          </Box>
        </Box>
      </Box>
      {result && (
        <Box
          sx={(theme) => ({
            display: 'none',
            position: 'relative',
            zIndex: 4,
            mt: 6.25,
            [theme.breakpoints.down('md')]: {
              display: 'flex',
            },
            flexDirection: 'column',
            justifyContent: 'center',
            alignSelf: 'center',
            minWidth: 230,
          })}
        >
          <Typography
            letterSpacing='0.125rem'
            variant='h3'
            align='center'
            component='p'
            sx={headerStyling}
          >
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
    </>
  );
}
