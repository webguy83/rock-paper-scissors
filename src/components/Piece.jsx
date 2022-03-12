import Box from '@mui/material/Box';

const mainStyle = {
  width: 125,
  height: 125,
  borderRadius: '50%',
};

export default function Piece({ coords, colours, icon }) {
  const HSLvals = colours.darker.replace(/(hsl\(|\s|%|\))/g, '').split(',');
  const darkL = parseInt(HSLvals[2]) - 10;
  const darkestColour = `hsl(${HSLvals[0]}, ${HSLvals[1]}%, ${darkL}%)`;
  return (
    <Box sx={{ ...coords, position: 'absolute' }}>
      <Box position='relative'>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            zIndex: 3,
            backgroundColor: 'white',
            width: '78%',
            height: '78%',
            borderRadius: '50%',
            top: '12%',
            left: '11%',
            boxShadow: '0px 5px 0px 0px #dbdbdb inset',
          }}
        >
          <img style={{ width: '40%' }} src={icon} alt='icon' />
        </Box>
        <Box
          sx={{
            ...mainStyle,
            position: 'relative',
            zIndex: 1,
            background: `linear-gradient(${colours.lighter}, ${colours.darker});`,
            boxShadow: `0px 5px 0px 0px ${darkestColour}`,
          }}
        />
      </Box>
    </Box>
  );
}
