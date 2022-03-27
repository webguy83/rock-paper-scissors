import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import PlayingArea from './PlayingArea';
import Results from './Results';
import { pieces } from '../utils';

export default function Gameboard({ setScore }) {
  const [selectedPiece, setSelectedPiece] = useState(null);
  const [selectedHousePiece, setSelectedHousePiece] = useState(null);

  useEffect(() => {
    const piecesKeys = Object.keys(pieces);
    const getHousePiece = function (items) {
      return items[Math.floor(Math.random() * items.length)];
    };
    setSelectedHousePiece(getHousePiece(piecesKeys));
  }, [selectedHousePiece]);

  const hideHeaderStyle = {
    fontSize: 0,
    width: 1,
    height: 1,
    display: 'inline-block',
    overflow: 'hidden',
    position: 'absolute!important',
    border: '0!important',
    padding: '0!important',
    margin: '0!important',
    clip: 'rect(1px,1px,1px,1px)',
  };

  const gameboardStyles = {
    display: 'flex',
    flexDirection: 'column',
    mt: '10vh',
    width: '100%',
  };

  return (
    <Box component='main' sx={gameboardStyles}>
      <Typography variant='h1' sx={hideHeaderStyle}>
        Rock Paper Scissors Lizard Spock
      </Typography>
      {!selectedPiece && <PlayingArea setSelectedPiece={setSelectedPiece} />}
      {selectedPiece && (
        <Results
          setScore={setScore}
          selectedPiece={selectedPiece}
          setSelectedPiece={setSelectedPiece}
          setSelectedHousePiece={setSelectedHousePiece}
          housePiece={selectedHousePiece}
        />
      )}
    </Box>
  );
}
