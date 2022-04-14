import { makeStyles } from '@material-ui/core/styles';




export default makeStyles((theme) => ({


    appBar:{
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

