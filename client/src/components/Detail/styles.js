
import { makeStyles } from '@material-ui/core/styles';
// import imageWall from '../../images/sunset.jpg';

export default makeStyles((theme) => ({
//   background: {
//     backgroundImage: `url(${imageWall})`,
//     display: 'flex',
//     justifyContent: 'center',
//     width: '100%',
//     height: '100%',
    
//     backgroundRepeat: 'no-repeat',
//     backgroundSize: 'cover',
//     position: 'absolute', 
// },
  // centerPaper:{
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   margin: "auto",
  //   width: "50%",
  //   height: "50%",

  // },

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
    '& p': {
     
    },
    '& button':{
      marginTop: theme.spacing(1),
      background: 'linear-gradient(45deg, #81c784 25%, #BAEBBD 60%)',
      boxShadow: '0 3px 5px 2px rgba(129, 199, 132, .3)',
      color: '#4A4A48',
      '&:hover':{
        boxShadow: "1px 2px 5px 1px rgba(0, 0, 0, .2)",
      }
    }
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
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  googleButton: {
    marginBottom: theme.spacing(2),
  },
  passwordProgressBar:{
    width: '95%',
    marginLeft: '11px',
  },

}));