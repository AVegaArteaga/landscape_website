import { Button, Paper, Typography } from "@material-ui/core";
import React, {useState} from "react";
import useStyles from './styles'
import {useNavigate} from 'react-router-dom'; 
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Detail = () =>{

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    const classes = useStyles();    
    const navigate = useNavigate();

    const addressDetail = () =>{
        navigate(`/address`);
    }

    return(
         <Paper className={classes.paper} elevation={6}>
            <Typography>
                View service dates & Address
            </Typography>
            
                
            <Button onClick={addressDetail}>
                View<ArrowForwardIcon/>
            </Button>
         </Paper>
    );

}

export default Detail;