import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

export default styled(Button)(({ theme }) => ({
  color: '#141639',
  borderColor: theme.palette.background.paper,
  backgroundColor: theme.palette.background.paper,
  paddingLeft: 35,
  paddingRight: 35,
  fontSize: 18,
  letterSpacing: 2,
  textTransform: 'uppercase',
  '&:hover': {
    color: '#141639',
    backgroundColor: theme.palette.background.paper,
    opacity: 0.9,
  },
}));
