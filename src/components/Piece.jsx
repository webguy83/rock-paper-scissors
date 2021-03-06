import Box from '@mui/material/Box';
import Ripple from './Ripple';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Piece({ customCSS, info, size, onClick, winner }) {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const HSLvals = info.colours.darker.replace(/(hsl\(|\s|%|\))/g, '').split(',');
  const darkL = parseInt(HSLvals[2]) - 10;
  const darkestColour = `hsl(${HSLvals[0]}, ${HSLvals[1]}%, ${darkL}%)`;
  const shadowSize = isSmall ? 4 : 7;
  return (
    <Box
      sx={{
        position: 'relative',
        zIndex: 4,
        width: {
          ...size,
        },
        height: {
          ...size,
        },
        ...customCSS,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
        background: `linear-gradient(${info.colours.lighter}, ${info.colours.darker});`,
        boxShadow: `0px ${shadowSize}px 0px 0px ${darkestColour}`,
      }}
      onClick={onClick}
    >
      <Box
        sx={{
          display: 'flex',
          position: 'absolute',
          zIndex: 5,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'background.paper',
          width: '75%',
          height: '75%',
          borderRadius: '50%',
          boxShadow: `0px ${shadowSize}px 0px 0px #dbdbdb inset`,
        }}
      >
        <img style={{ width: '40%' }} src={info.icon} alt='icon' />
      </Box>
      {winner && (
        <Ripple
          size={size}
          style={{
            position: 'absolute',
            zIndex: 0,
          }}
        />
      )}
    </Box>
  );
}
