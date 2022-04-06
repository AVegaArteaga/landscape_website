import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    flexDirection: "row",
    justifyContent: "space-between",
    background: 'linear-gradient(45deg, #81c784 30%, #BAEBBD 90%)',
    border:0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(129, 199, 132, .3)',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    // Override media queries injected by theme.mixins.toolbar
    '@media all': {
      minHeight: 65,
    },
  
}));

  export default StyledToolbar;