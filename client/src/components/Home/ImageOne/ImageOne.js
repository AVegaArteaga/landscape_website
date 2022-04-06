import { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import {Parallax} from 'react-parallax';
import imageOne from '../../../images/Chicago2.jpg';
import AuthComp from '../../Auth/Auth'; 
import useStyles from './styles.js';
import {Link, useNavigate, useLocation} from 'react-router-dom';
import { Paper } from '@material-ui/core';
import decode from 'jwt-decode';
import Detail from '../../Detail/Detail';

const ImageOne = () =>{
    const location = useLocation(); 
    //<span className='img-txt'>a trip to yard</span>
    // <ImageBox/>
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    useEffect(() => {
        const token = user?.token;
    
        // if(token){
        //     const decodeToken = decode(token);
        //     if(decodeToken.exp * 1000 < new Date().getTime()) logout();
        // }
    
        setUser(JSON.parse(localStorage.getItem('profile')));

      }, [location]); //JWT Location used to update on page.


    const classes = useStyles();    
    return(
         <>
            <Parallax className={classes.image} blur={0} bgImage={imageOne} strength={700}>
                <div className={classes.content}>
                    <Grid>
                        {user?.result ? <Detail/> : <AuthComp/>}
                    </Grid>
                </div>
            </Parallax>
         </>
    );

}

export default ImageOne;