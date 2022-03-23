import Box from '@mui/material/Box';

export default function Ripple({ size }) {
  function getRippleSize(rippleSize, multiplier = 1) {
    return {
      xs: rippleSize.xs + (rippleSize.xs / 2) * multiplier,
      sm: rippleSize.sm + (rippleSize.sm / 2) * multiplier,
      md: rippleSize.md + (rippleSize.md / 2) * multiplier,
    };
  }

  return (
    <div>
      <Box
        sx={{
          position: 'absolute',
          zIndex: 2,
          width: getRippleSize(size),
          height: getRippleSize(size),
          transform: 'translate(-50%,-50%)',
          borderRadius: '50%',
          backgroundColor: 'rgba(255,255,255,.05)',
        }}
      ></Box>
      <Box
        sx={{
          position: 'absolute',
          zIndex: 1,
          width: getRippleSize(size, 2),
          height: getRippleSize(size, 2),
          transform: 'translate(-50%,-50%)',
          borderRadius: '50%',
          backgroundColor: 'rgba(255,255,255,.03)',
        }}
      ></Box>
      <Box
        sx={{
          position: 'absolute',
          zIndex: 0,
          width: getRippleSize(size, 3),
          height: getRippleSize(size, 3),
          transform: 'translate(-50%,-50%)',
          borderRadius: '50%',
          backgroundColor: 'rgba(255,255,255,.01)',
        }}
      ></Box>
    </div>
  );
}
