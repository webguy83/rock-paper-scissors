import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import logo from '../images/logo-bonus.svg';

const containerStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  borderWidth: 2,
  borderStyle: 'solid',
  borderRadius: 5,
  p: (theme) => {
    return theme.spacing(3, 2, 3);
  },
};

const scoreBoxStyles = (theme) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  bgcolor: 'background.paper',
  p: theme.spacing(0, 5),
  [theme.breakpoints.up('xs')]: {
    p: theme.spacing(0, 4),
  },
  borderRadius: 1.5,
  textTransform: 'uppercase',
});

export default function Header({ score }) {
  return (
    <Box
      component='header'
      sx={{
        width: '100%',
        maxWidth: 800,
        alignSelf: 'center',
      }}
    >
      <Typography
        variant='body1'
        component='h1'
        sx={{ color: 'background.paper', textAlign: 'center' }}
      >
        Challenge by&nbsp;
        <Link href='https://www.frontendmentor.io?ref=challenge' target='_blank' rel='noreferrer'>
          Frontend Mentor
        </Link>
        . Coded by&nbsp;
        <Link href='https://github.com/webguy83' target='_blank' rel='noreferrer'>
          Curtis
        </Link>
        .
      </Typography>
      <Box sx={containerStyles} borderColor='neutral.headerOutline'>
        <Box
          sx={{
            width: {
              xs: 80,
              sm: 112,
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
          <Typography letterSpacing={2} color='neutral.scoreText'>
            Score
          </Typography>
          <Typography
            sx={{
              fontSize: {
                xs: 48,
                sm: 60,
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
    </Box>
  );
}
