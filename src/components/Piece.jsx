import Box from '@mui/material/Box';

const mainStyle = {
  width: 130,
  height: 130,
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
            position: 'absolute',
            zIndex: 2,
            backgroundColor: '#d3d3d3',
            width: 90,
            height: 90,
            borderRadius: '50%',
            top: '15%',
            left: '15%',
          }}
        />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            zIndex: 3,
            backgroundColor: 'white',
            width: 90,
            height: 90,
            borderRadius: '50%',
            top: '19%',
            left: '15%',
          }}
        >
          <img style={{ width: '50%' }} src={icon} alt='icon' />
        </Box>
        <Box
          sx={{
            ...mainStyle,
            position: 'relative',
            zIndex: 1,
            background: `linear-gradient(${colours.lighter}, ${colours.darker});`,
          }}
        />
        <Box
          sx={{
            ...mainStyle,
            backgroundColor: darkestColour,
            position: 'absolute',
            top: 7,
            zIndex: 0,
          }}
        />
      </Box>
    </Box>
  );
}
