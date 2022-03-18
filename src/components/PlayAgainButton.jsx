import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

export default styled(Button)(({ theme }) => ({
  color: '#141639',
  borderColor: theme.palette.background.paper,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(0.625, 4.375),
  fontSize: '1.125rem',
  letterSpacing: '0.125rem',
  textTransform: 'uppercase',
  '&:hover': {
    color: '#141639',
    backgroundColor: theme.palette.background.paper,
    opacity: 0.9,
  },
}));
