import Box from '@mui/material/Box';
import pentagon from '../images/bg-pentagon.svg';

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
        <Box
          sx={{
            width: 130,
            height: 130,
            borderRadius: '50%',
            backgroundColor: 'yellow',
            position: 'absolute',
            top: 60,
            left: -50,
          }}
        ></Box>
        <Box
          sx={{
            width: 130,
            height: 130,
            borderRadius: '50%',
            backgroundColor: 'green',
            position: 'absolute',
            top: -40,
            left: 100,
          }}
        ></Box>
        <Box
          sx={{
            width: 130,
            height: 130,
            borderRadius: '50%',
            backgroundColor: 'red',
            position: 'absolute',
            top: 60,
            right: -50,
          }}
        ></Box>
        <Box
          sx={{
            width: 130,
            height: 130,
            borderRadius: '50%',
            backgroundColor: 'orange',
            position: 'absolute',
            bottom: 50,
            left: 0,
          }}
        ></Box>
        <Box
          sx={{
            width: 130,
            height: 130,
            borderRadius: '50%',
            backgroundColor: 'pink',
            position: 'absolute',
            bottom: 50,
            right: 0,
          }}
        ></Box>
        <img src={pentagon} alt='pentagon background' />
      </Box>
    </Box>
  );
}
