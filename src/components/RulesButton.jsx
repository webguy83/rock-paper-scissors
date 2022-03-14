import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

export default styled(Button)(({ theme }) => ({
  color: theme.palette.background.paper,
  borderColor: theme.palette.background.paper,
  paddingLeft: 35,
  paddingRight: 35,
  fontSize: 18,
  letterSpacing: 2,
  '&:hover': {
    borderColor: theme.palette.background.paper,
    backgroundColor: 'transparent',
  },
}));
