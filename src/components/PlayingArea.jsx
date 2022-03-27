import pentagon from '../images/bg-pentagon.svg';
import Piece from './Piece';
import { pieces } from '../utils';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';

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
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const pieceSize = {
    xs: 100,
    sm: 175,
  };
  const bgSize = isSmall ? 300 : 430;
  const bufferSize = isSmall ? 25 : 0;

  const onPieceClick = function (piece) {
    setSelectedPiece(piece);
  };
  return (
    <Box
      position='relative'
      minHeight={500}
      sx={{
        background: `url(${pentagon}) no-repeat center`,
        backgroundSize: bgSize,
      }}
    >
      <Piece
        info={scissors}
        customCSS={{
          ...mainPieceCSSstyles,
          top: `calc(50% - ${bgSize / 2 - 50 + bufferSize}px)`,
          left: '50%',
        }}
        size={pieceSize}
        onClick={() => onPieceClick('scissors')}
      />
      <Piece
        info={paper}
        customCSS={{
          ...mainPieceCSSstyles,
          top: `calc(50% - ${bgSize / 2 - 170 + bufferSize * 2}px)`,
          left: `calc(50% + ${bgSize / 2 - 25}px)`,
        }}
        size={pieceSize}
        onClick={() => onPieceClick('paper')}
      />
      <Piece
        info={rock}
        customCSS={{
          ...mainPieceCSSstyles,
          top: `calc(50% + ${bgSize / 2 - 20}px)`,
          left: `calc(50% + ${bgSize / 2 - 100 + bufferSize}px)`,
        }}
        size={pieceSize}
        onClick={() => onPieceClick('rock')}
      />
      <Piece
        info={lizard}
        customCSS={{
          ...mainPieceCSSstyles,
          top: `calc(50% + ${bgSize / 2 - 20}px)`,
          left: `calc(50% - ${bgSize / 2 - 100 + bufferSize}px)`,
        }}
        size={pieceSize}
        onClick={() => onPieceClick('lizard')}
      />
      <Piece
        info={spock}
        customCSS={{
          ...mainPieceCSSstyles,
          top: `calc(50% - ${bgSize / 2 - 170 + bufferSize * 2}px)`,
          left: `calc(50% - ${bgSize / 2 - 25}px)`,
        }}
        size={pieceSize}
        onClick={() => onPieceClick('spock')}
      />
      <Box
        sx={{
          width: {
            xs: 250,
            sm: 450,
          },
        }}
      ></Box>
    </Box>
  );
}
