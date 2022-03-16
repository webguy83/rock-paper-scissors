import Box from '@mui/material/Box';

export default function Ripple({ size }) {
  const halfWidth = size.width / 2;
  const halfHeight = size.height / 2;
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        transform: 'translate(110px, 110px)',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          zIndex: 2,
          width: size.width + halfWidth,
          height: size.height + halfHeight,
          transform: 'translate(-50%,-50%)',
          borderRadius: '50%',
          backgroundColor: 'rgba(255,255,255,.05)',
        }}
      ></Box>
      <Box
        sx={{
          position: 'absolute',
          zIndex: 1,
          width: size.width + halfWidth * 2,
          height: size.height + halfHeight * 2,
          transform: 'translate(-50%,-50%)',
          borderRadius: '50%',
          backgroundColor: 'rgba(255,255,255,.03)',
        }}
      ></Box>
      <Box
        sx={{
          position: 'absolute',
          zIndex: 0,
          width: size.width + halfWidth * 3,
          height: size.height + halfHeight * 3,
          transform: 'translate(-50%,-50%)',
          borderRadius: '50%',
          backgroundColor: 'rgba(255,255,255,.01)',
        }}
      ></Box>
    </Box>
  );
}
