import { makeStyles } from '@material-ui/core/styles';




export default makeStyles((theme) => ({


    appBar:{

    
        
    },
    logo: {
        maxWidth: '80px',
        maxHeight:'80px',
        marginRight: '15px',
    },
    highlight:{
        backgroundColor: 'red',
        borderColor: 'text.primary',
        m: 1,
        border: 1,
        width: '5rem',
        height: '5rem',

        '&:hover':{
            backgroundColor: "#818181"
        }
    },
    profile:{
        
        width: '400px',
        display: 'flex',
        justifyContent: 'space-around',
        justifyItems: 'space-around',
    },

    signOutText:{
        marginTop: '50px',
        maxWidth: '80px',
    }


}));

