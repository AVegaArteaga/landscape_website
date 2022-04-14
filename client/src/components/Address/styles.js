
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({


  paper: {
    width: "100%",
    background: '#FDFCFC',
    display: 'inline-flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& 	.MuiTypography-root':{
      // display: 'inline-flex',
      // alignItems: 'center',
      // flexDirection: 'row',
      paddingLeft: '20px',
      fontFamily: 'Arial, Helvetica, sans-serif',
    },
    '& .MuiButton-root ': {
      background: 'linear-gradient(45deg, #81c784 35%, #BAEBBD 100%)',
      '& .MuiSvgIcon-root ': {
        color: 'gray',
        // width: '30px',
        // height: '30px'
      }
    },
  },
  chipColor: {
    background: 'linear-gradient(45deg, #81c784 35%, #BAEBBD 100%)',
    '&:hover': {
      background: "#e3f7e4 "
    }
  },
  circleProg:{
    width:"100px",
    height:'100px'
  },
  footer: {
    fontSize: '10px',
    textAlign: "right",
    padding: "3px",
    color: "black",
  },
  paperEnterAddress: {
    display: 'inline-flex',
    height: '285px',
    background: '#FDFCFC',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(1),

    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },


    '& .MuiTextField-root': {
      margin: theme.spacing(1, 0),
    },

    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#8d99ae',
        borderWidth: '2px'
      },
      '& label.Mui-focused': {
        color: '#81c784',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'orange',
      },
      '&:hover fieldset': {
        borderColor: '#BAEBBD',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#81c784',
      },



    },
  },
  showAddressTable: {
    background: '#FDFCFC',
  },
  greenButton: {
    margin: theme.spacing(1, 0, 1, 0),
    color: '#FDFCFC',
    background: 'linear-gradient(45deg, #81c784 35%, #BAEBBD 100%)',
    '&:hover': {
      backgroundColor: "#81c795"
    }
  }

}));