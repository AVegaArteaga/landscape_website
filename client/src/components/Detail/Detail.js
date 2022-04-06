import { Button, Paper, Typography } from "@material-ui/core";
import React, {useState} from "react";
import useStyles from './styles'
import {useNavigate} from 'react-router-dom'; 

const Detail = () =>{

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    const classes = useStyles();    
    const navigate = useNavigate();
    
    console.log(user);


    const addressDetail = () =>{
        
        navigate(`/address`);
    }

    return(
         <Paper className={classes.paper} elevation={6}>

            <Typography>
                Check here for Weekly Schedule <br/> 
                
                <Button onClick={addressDetail}>
                    hello
                </Button>
                Check here for Weekly Schedule <br/> 
                Check here for Weekly Schedule <br/> 
                Check here for Weekly Schedule <br/> 
            </Typography>
         </Paper>
    );

}

export default Detail;