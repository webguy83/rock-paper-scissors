import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

export default styled(Button)(({ theme }) => ({
  color: theme.palette.background.paper,
  borderColor: theme.palette.background.paper,
  padding: theme.spacing(0.625, 4.375),
  fontSize: '1.125rem',
  letterSpacing: '0.125rem',
  '&:hover': {
    borderColor: theme.palette.background.paper,
    backgroundColor: 'transparent',
  },
}));
