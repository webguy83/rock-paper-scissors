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
  whiteSpace: 'nowrap',
  fontWeight: 700,
};

const selectionStylingText = {
  display: 'none',
  fontSize: {
    xs: '1rem',
    sm: '1.3rem',
  },
};

const pickedStyles = (theme) => ({
  position: 'relative',
  zIndex: 10,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: theme.spacing(0, 2),
  [theme.breakpoints.up('sm')]: {
    margin: theme.spacing(0, 4),
  },
});

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
  const breakpoints = {
    xs: 120,
    sm: 180,
    md: 280,
  };

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
        <Piece {...props} winner={houseWinner} size={breakpoints} info={pieces[housePiece]} />
      </div>
    );
  });

  const getResultBlock = (displayOnBreakpoint) => {
    return (
      <Box
        sx={(theme) => ({
          display: displayOnBreakpoint ? 'none' : 'flex',
          position: 'relative',
          zIndex: 99,
          mt: 6.25,
          [theme.breakpoints.up('md')]: {
            display: displayOnBreakpoint ? 'flex' : 'none',
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
          component='h2'
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
    );
  };

  return (
    <>
      <Box display='flex' height='max-content' justifyContent='center'>
        <Box component='section' sx={pickedStyles}>
          <Typography
            textAlign='center'
            marginBottom={6}
            letterSpacing='0.125rem'
            component='h2'
            sx={(theme) => ({
              ...selectionStylingText,
              ...headerStyling,
              [theme.breakpoints.up('md')]: { display: 'block' },
            })}
          >
            You Picked
          </Typography>
          <Piece winner={playerWinner} size={breakpoints} info={pieces[selectedPiece]} />
          <Typography
            textAlign='center'
            marginTop={6}
            letterSpacing='0.125rem'
            component='h2'
            sx={(theme) => ({
              ...selectionStylingText,
              ...headerStyling,
              [theme.breakpoints.down('md')]: { display: 'block' },
            })}
          >
            You Picked
          </Typography>
        </Box>
        {result && getResultBlock(true)}

        <Box component='section' sx={pickedStyles}>
          <Typography
            letterSpacing='0.125rem'
            marginBottom={6}
            component='h2'
            align='center'
            sx={(theme) => ({
              ...selectionStylingText,
              ...headerStyling,
              [theme.breakpoints.up('md')]: { display: 'block' },
            })}
          >
            The House Picked
          </Typography>

          <Box position='relative' zIndex={1}>
            <Fade
              in={true}
              timeout={2000}
              addEndListener={(node) => {
                node.addEventListener('transitionend', () => {
                  checkResult(selectedPiece, housePiece, pieces);
                });
                node.addEventListener('transitioncancel', () => {
                  checkResult(selectedPiece, housePiece, pieces);
                });
              }}
            >
              <WrapperPiece style={{ float: 'left' }} />
            </Fade>
            <Box
              position='absolute'
              sx={{
                width: '100%',
                height: '100%',
                backgroundColor: 'black',
                opacity: 0.2,
                borderRadius: '50%',
                zIndex: 0,
              }}
            ></Box>
          </Box>
          <Typography
            letterSpacing='0.125rem'
            marginTop={6}
            component='h2'
            align='center'
            sx={(theme) => ({
              ...selectionStylingText,
              ...headerStyling,
              [theme.breakpoints.down('md')]: { display: 'block' },
            })}
          >
            The House Picked
          </Typography>
        </Box>
      </Box>
      {result && getResultBlock(false)}
    </>
  );
}
