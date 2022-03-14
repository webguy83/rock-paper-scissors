import pentagon from '../images/bg-pentagon.svg';
import Piece from './Piece';
import { pieces } from '../utils';
import Box from '@mui/material/Box';

const mainPieceCSSstyles = {
  position: 'absolute',
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
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        mt: 10,
      }}
      position='relative'
    >
      <Piece
        info={scissors}
        customCSS={{ top: -40, left: 100, ...mainPieceCSSstyles }}
        size={{ width: 125, height: 125 }}
        onClick={() => onPieceClick('scissors')}
      />
      <Piece
        info={paper}
        customCSS={{ top: 65, right: -50, ...mainPieceCSSstyles }}
        size={{ width: 125, height: 125 }}
        onClick={() => onPieceClick('paper')}
      />
      <Piece
        info={rock}
        customCSS={{ top: 240, right: 17, ...mainPieceCSSstyles }}
        size={{ width: 125, height: 125 }}
        onClick={() => onPieceClick('rock')}
      />
      <Piece
        info={lizard}
        customCSS={{ top: 240, left: 17, ...mainPieceCSSstyles }}
        size={{ width: 125, height: 125 }}
        onClick={() => onPieceClick('lizard')}
      />
      <Piece
        info={spock}
        customCSS={{ top: 65, left: -50, ...mainPieceCSSstyles }}
        size={{ width: 125, height: 125 }}
        onClick={() => onPieceClick('spock')}
      />

      <img src={pentagon} alt='pentagon background' />
    </Box>
  );
}
