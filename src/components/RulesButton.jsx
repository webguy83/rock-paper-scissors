import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

export default styled(Button)(({ theme }) => ({
  color: theme.palette.background.paper,
  height: 45,
  borderColor: theme.palette.background.paper,
  borderRadius: 8,
  padding: theme.spacing(0.625, 4.375),
  fontSize: 18,
  letterSpacing: 2,
  '&:hover': {
    borderColor: theme.palette.background.paper,
    backgroundColor: 'transparent',
  },
}));
