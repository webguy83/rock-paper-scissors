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

  const onPieceClick = function (piece) {
    setSelectedPiece(piece);
  };
  return (
    <Box
      sx={{
        position: 'relative',
        mt: 10,
      }}
      position='relative'
    >
      <Piece
        info={scissors}
        customCSS={{ ...mainPieceCSSstyles, top: 10, left: 160 }}
        size={{ width: 125, height: 125 }}
        onClick={() => onPieceClick('scissors')}
      />
      <Piece
        info={paper}
        customCSS={{ ...mainPieceCSSstyles, top: 120, left: 310 }}
        size={{ width: 125, height: 125 }}
        onClick={() => onPieceClick('paper')}
      />
      <Piece
        info={rock}
        customCSS={{ ...mainPieceCSSstyles, top: 300, left: 260 }}
        size={{ width: 125, height: 125 }}
        onClick={() => onPieceClick('rock')}
      />
      <Piece
        info={lizard}
        customCSS={{ ...mainPieceCSSstyles, top: 300, left: 70 }}
        size={{ width: 125, height: 125 }}
        onClick={() => onPieceClick('lizard')}
      />
      <Piece
        info={spock}
        customCSS={{ ...mainPieceCSSstyles, top: 120, left: 10 }}
        size={{ width: 125, height: 125 }}
        onClick={() => onPieceClick('spock')}
      />

      <img src={pentagon} alt='pentagon background' />
    </Box>
  );
}
