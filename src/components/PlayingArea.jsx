import pentagon from '../images/bg-pentagon.svg';
import Piece from './Piece';
import { pieces } from '../utils';
import Box from '@mui/material/Box';

const mainPieceCSSstyles = {
  position: 'absolute',
  transform: 'translate(-50%,-50%)',
  '&:hover': {
    cursor: 'pointer',
    opacity: 0.9,
  },
};

export default function PlayingArea({ setSelectedPiece }) {
  const { scissors, paper, rock, lizard, spock } = pieces;
  const pieceSize = {
    xs: 175,
  };

  const onPieceClick = function (piece) {
    setSelectedPiece(piece);
  };
  return (
    <Box position='relative'>
      <Piece
        info={scissors}
        customCSS={{ ...mainPieceCSSstyles, top: 10, left: 230 }}
        size={pieceSize}
        onClick={() => onPieceClick('scissors')}
      />
      <Piece
        info={paper}
        customCSS={{ ...mainPieceCSSstyles, top: 180, left: 430 }}
        size={pieceSize}
        onClick={() => onPieceClick('paper')}
      />
      <Piece
        info={rock}
        customCSS={{ ...mainPieceCSSstyles, top: 415, left: 360 }}
        size={pieceSize}
        onClick={() => onPieceClick('rock')}
      />
      <Piece
        info={lizard}
        customCSS={{ ...mainPieceCSSstyles, top: 415, left: 90 }}
        size={pieceSize}
        onClick={() => onPieceClick('lizard')}
      />
      <Piece
        info={spock}
        customCSS={{ ...mainPieceCSSstyles, top: 180, left: 20 }}
        size={pieceSize}
        onClick={() => onPieceClick('spock')}
      />

      <img src={pentagon} style={{ width: '28.125rem' }} alt='pentagon background' />
    </Box>
  );
}
