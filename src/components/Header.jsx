import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import logo from '../images/logo-bonus.svg';

const containerStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  mt: 3,
  borderWidth: '0.125rem',
  borderStyle: 'solid',
  borderRadius: 5,
  p: (theme) => {
    return theme.spacing(3, 2, 3);
  },
};

const scoreBoxStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  bgcolor: 'background.paper',
  p: (theme) => {
    if (theme.breakpoints.up('xs')) {
      return theme.spacing(0, 4);
    }
    return theme.spacing(0, 5);
  },
  borderRadius: 1.5,
  textTransform: 'uppercase',
};

export default function Header({ score }) {
  return (
    <Box sx={containerStyles} borderColor='neutral.headerOutline'>
      <Box
        sx={{
          width: {
            xs: '5rem',
            sm: '7rem',
          },
        }}
      >
        <img
          src={logo}
          alt='logo'
          style={{
            width: '100%',
          }}
        />
      </Box>

      <Box sx={scoreBoxStyles}>
        <Typography letterSpacing='0.125rem' color='neutral.scoreText'>
          Score
        </Typography>
        <Typography
          sx={{
            fontSize: {
              xs: '3rem',
              sm: '3.75rem',
            },
          }}
          component='p'
          fontWeight={700}
          lineHeight={1}
          color='neutral.darkText'
        >
          {score}
        </Typography>
      </Box>
    </Box>
  );
}
