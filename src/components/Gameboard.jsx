import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import PlayingArea from './PlayingArea';
import Results from './Results';
import { pieces } from '../utils';

export default function Gameboard() {
  const [selectedPiece, setSelectedPiece] = useState(null);
  const [selectedHousePiece, setSelectedHousePiece] = useState(null);

  useEffect(() => {
    const piecesKeys = Object.keys(pieces);
    const getHousePiece = function (items) {
      return items[Math.floor(Math.random() * items.length)];
    };
    setSelectedHousePiece(getHousePiece(piecesKeys));
  }, []);

  const gameboardStyles = {
    display: 'flex',
    justifyContent: 'center',
    margin: 'auto',
    height: 500,
  };

  return (
    <Box sx={gameboardStyles}>
      {!selectedPiece && <PlayingArea setSelectedPiece={setSelectedPiece} />}
      {selectedPiece && <Results selectedPiece={selectedPiece} housePiece={selectedHousePiece} />}
    </Box>
  );
}
