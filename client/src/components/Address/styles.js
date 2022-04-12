
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({


  paper:{
    width: "100%",
    background: '#FDFCFC',
    display: 'inline-flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& .MuiButton-root':{
      background: 'linear-gradient(45deg, #BAEBBD 35%, #e3f7e4  95%)',
      '& .MuiSvgIcon-root ':{
        color:'#FDFCFC',
        width: '35px',
        height: '35px'
      }
    },

  },
  chipColor:{
    background: 'linear-gradient(45deg, #BAEBBD 35%, #e3f7e4  95%)',
    '&:hover':{
      background: "#e3f7e4 "
    }
  },
  footer:{
    fontSize:'10px',
    textAlign: "right",
    padding: "3px",
    color: "black",
  },
    paperEnterAddress: {
        display: 'inline-flex',
        height: '290px',
        background: '#FDFCFC',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(1),


        '& .MuiTextField-root': {
            
            margin: theme.spacing(1,0),
          },
          form: {
            width: '100%', // Fix IE 11 issue.
            marginTop: theme.spacing(3),
          },
    },
    showAddressTable:{
        background: '#FDFCFC',
    },

}));