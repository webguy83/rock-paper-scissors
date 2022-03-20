import { createTheme } from '@mui/material/styles';
import lizardIcon from '../images/icon-lizard.svg';
import paperIcon from '../images/icon-paper.svg';
import rockIcon from '../images/icon-rock.svg';
import scissorsIcon from '../images/icon-scissors.svg';
import spockIcon from '../images/icon-spock.svg';

export const theme = createTheme({
  palette: {
    neutral: {
      headerOutline: '#606e85',
      scoreText: '#2a46c0',
      darkText: '#3b4363',
    },
  },
  typography: {
    fontFamily: [
      'Barlow Semi Condensed',
      'Caveat',
      'cursive',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

export const pieces = {
  scissors: {
    icon: scissorsIcon,
    colours: {
      darker: 'hsl(39, 89%, 49%)',
      lighter: 'hsl(40, 84%, 53%)',
    },
    defeats: ['paper', 'lizard'],
  },
  paper: {
    icon: paperIcon,
    colours: {
      darker: 'hsl(230, 89%, 62%)',
      lighter: 'hsl(230, 89%, 65%)',
    },
    defeats: ['rock', 'spock'],
  },
  rock: {
    icon: rockIcon,
    colours: {
      darker: 'hsl(349, 71%, 52%)',
      lighter: 'hsl(349, 70%, 56%)',
    },
    defeats: ['lizard', 'scissors'],
  },
  lizard: {
    icon: lizardIcon,
    colours: {
      darker: 'hsl(261, 73%, 60%)',
      lighter: 'hsl(261, 72%, 63%)',
    },
    defeats: ['spock', 'paper'],
  },
  spock: {
    icon: spockIcon,
    colours: {
      darker: 'hsl(189, 59%, 53%)',
      lighter: 'hsl(189, 58%, 57%)',
    },
    defeats: ['scissors', 'rock'],
  },
};

{
  /* <Piece
        info={scissors}
        customCSS={{ ...mainPieceCSSstyles, top: 10, left: 160 }}
        size={{ width: pieceSize, height: pieceSize }}
        onClick={() => onPieceClick('scissors')}
      />
      <Piece
        info={paper}
        customCSS={{ ...mainPieceCSSstyles, top: 120, left: 310 }}
        size={{ width: pieceSize, height: pieceSize }}
        onClick={() => onPieceClick('paper')}
      />
      <Piece
        info={rock}
        customCSS={{ ...mainPieceCSSstyles, top: 300, left: 260 }}
        size={{ width: pieceSize, height: pieceSize }}
        onClick={() => onPieceClick('rock')}
      />
      <Piece
        info={lizard}
        customCSS={{ ...mainPieceCSSstyles, top: 300, left: 70 }}
        size={{ width: pieceSize, height: pieceSize }}
        onClick={() => onPieceClick('lizard')}
      />
      <Piece
        info={spock}
        customCSS={{ ...mainPieceCSSstyles, top: 120, left: 10 }}
        size={{ width: pieceSize, height: pieceSize }}
        onClick={() => onPieceClick('spock')}
      /> */
}
