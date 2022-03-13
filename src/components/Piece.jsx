import Box from '@mui/material/Box';

const mainStyle = {
  borderRadius: '50%',
  position: 'relative',
  zIndex: 1,
};

export default function Piece({ customCSS, info, size, onClick }) {
  const HSLvals = info.colours.darker.replace(/(hsl\(|\s|%|\))/g, '').split(',');
  const darkL = parseInt(HSLvals[2]) - 10;
  const darkestColour = `hsl(${HSLvals[0]}, ${HSLvals[1]}%, ${darkL}%)`;
  return (
    <Box sx={customCSS} onClick={onClick}>
      <Box position='relative' sx={{ ...size }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            zIndex: 3,
            backgroundColor: 'background.paper',
            width: '78%',
            height: '78%',
            borderRadius: '50%',
            top: '12%',
            left: '11%',
            boxShadow: '0px 5px 0px 0px #dbdbdb inset',
          }}
        >
          <img style={{ width: '40%' }} src={info.icon} alt='icon' />
        </Box>
        <Box
          sx={{
            ...mainStyle,
            ...size,

            background: `linear-gradient(${info.colours.lighter}, ${info.colours.darker});`,
            boxShadow: `0px 5px 0px 0px ${darkestColour}`,
          }}
        />
      </Box>
    </Box>
  );
}
