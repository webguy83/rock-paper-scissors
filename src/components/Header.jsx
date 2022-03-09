import { useTheme } from '@emotion/react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import logo from '../images/logo-bonus.svg';

const containerStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  mt: 3,
  borderWidth: 2,
  borderStyle: 'solid',
  borderRadius: 5,
  p: 3,
  pt: 2,
  pb: 2,
};

const scoreBoxStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  bgcolor: 'white',
  pl: 5,
  pr: 5,
  borderRadius: 1.5,
  textTransform: 'uppercase',
};

export default function Header() {
  const theme = useTheme();
  return (
    <Box sx={containerStyles} borderColor={theme.palette.neutral.headerOutline}>
      <img src={logo} alt='logo' />
      <Box sx={scoreBoxStyles}>
        <Typography letterSpacing={2} color={theme.palette.neutral.scoreText}>
          Score
        </Typography>
        <Typography
          variant='h2'
          component='p'
          fontWeight={700}
          lineHeight={1}
          color={theme.palette.neutral.darkText}
        >
          69
        </Typography>
      </Box>
    </Box>
  );
}
