import Box from '@mui/material/Box';
import pentagon from '../images/bg-pentagon.svg';
import lizardIcon from '../images/icon-lizard.svg';
import paperIcon from '../images/icon-paper.svg';
import rockIcon from '../images/icon-rock.svg';
import scissorsIcon from '../images/icon-scissors.svg';
import spockIcon from '../images/icon-spock.svg';
import Piece from './Piece';

export default function Gameboard() {
  const gameboardStyles = {
    display: 'flex',
    justifyContent: 'center',
    margin: 'auto',
    height: 500,
  };
  return (
    <Box sx={gameboardStyles}>
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
          coords={{ top: -40, left: 100 }}
          colours={{ darker: 'hsl(39, 89%, 49%)', lighter: 'hsl(40, 84%, 53%)' }}
          icon={scissorsIcon}
        />
        <Piece
          coords={{ top: 60, right: -50 }}
          colours={{ darker: 'hsl(230, 89%, 62%)', lighter: 'hsl(230, 89%, 65%)' }}
          icon={paperIcon}
        />
        <Piece
          coords={{ top: 240, right: 0 }}
          colours={{ darker: 'hsl(349, 71%, 52%)', lighter: 'hsl(349, 70%, 56%)' }}
          icon={rockIcon}
        />
        <Piece
          coords={{ top: 240, left: 0 }}
          colours={{ darker: 'hsl(261, 73%, 60%)', lighter: 'hsl(261, 72%, 63%)' }}
          icon={lizardIcon}
        />
        <Piece
          coords={{ top: 60, left: -50 }}
          colours={{ darker: 'hsl(189, 59%, 53%)', lighter: 'hsl(189, 58%, 57%)' }}
          icon={spockIcon}
        />

        <img src={pentagon} alt='pentagon background' />
      </Box>
    </Box>
  );
}
