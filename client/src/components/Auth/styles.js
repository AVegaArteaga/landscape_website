
import { makeStyles } from '@material-ui/core/styles';
// import imageWall from '../../images/sunset.jpg';

export default makeStyles((theme) => ({

  shadowButton:{
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
  },
  paper: {
    background: '#FDFCFC',
    width:"400px",
    display: 'inline-flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(1),
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.success.light,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submitFillPassword:{
    margin: theme.spacing(1,0,1,0),
    background: 'linear-gradient(45deg, #81c784 35%, #BAEBBD 100%)',
    '&:hover':{
      backgroundColor: "#81c795"
    }
  }, 
  submit:{ 
    margin: theme.spacing(1,0,1,0),
    background: 'linear-gradient(45deg, #818181 35%, #A3A3A3 100%)',
    // '&:hover':{
    //   backgroundColor: "#81c784"
    // }
  },
  googleButton: {
    marginBottom: theme.spacing(2),
  },
  passwordProgressBar:{
    width: '95%',
    marginLeft: '11px',
  },

  //style={{ width: '90%' , marginLeft: '11px'  }}
}));