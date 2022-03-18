import Box from '@mui/material/Box';

export default function Ripple({ size }) {
  const halfWidth = size.width / 16 / 2;
  const halfHeight = size.height / 16 / 2;
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        transform: 'translate(6.875rem, 6.875rem)',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          zIndex: 2,
          width: `${size.width / 16 + halfWidth}rem`,
          height: `${size.height / 16 + halfHeight}rem`,
          transform: 'translate(-50%,-50%)',
          borderRadius: '50%',
          backgroundColor: 'rgba(255,255,255,.05)',
        }}
      ></Box>
      <Box
        sx={{
          position: 'absolute',
          zIndex: 1,
          width: `${size.width / 16 + halfWidth * 2}rem`,
          height: `${size.height / 16 + halfHeight * 2}rem`,
          transform: 'translate(-50%,-50%)',
          borderRadius: '50%',
          backgroundColor: 'rgba(255,255,255,.03)',
        }}
      ></Box>
      <Box
        sx={{
          position: 'absolute',
          zIndex: 0,
          width: `${size.width / 16 + halfWidth * 3}rem`,
          height: `${size.height / 16 + halfHeight * 3}rem`,
          transform: 'translate(-50%,-50%)',
          borderRadius: '50%',
          backgroundColor: 'rgba(255,255,255,.01)',
        }}
      ></Box>
    </Box>
  );
}
