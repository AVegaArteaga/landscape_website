
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    image: {
        position: "relative",
        height: "100vh",
    },
    
    content: {
        display: "flex",
        alignItems: "center",
        justifyContent: "right",
        position: "absolute",
        height: "100vh",
        paddingRight: "255px",
        width: "100%",
    },
    paper: {
        width:"400px",
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(1),
      },
    // .content span.img-txt {
    //     background-color: #4c5760;
    //     text-transform: uppercase;
    //     color: #fff;
    //     padding: 1rem;
    //     font-size: 1.5rem;
    //     letter-spacing: 10px;
    // },
    
    // h3{
    //     letter-spacing: 6px;
    //     text-transform: uppercase;
    //     font: 1.3rem;
    //     text-align: center;
    // },
    
    // .text-box{
    //     text-align: center;
    //     padding: 3rem 1rem;
    //     text-align: justify;
    // }

}));
