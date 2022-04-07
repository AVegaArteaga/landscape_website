import React from 'react';
import { useEffect , useState } from 'react';

import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import { ButtonBase } from '@mui/material';
import {animateScroll as scroll} from 'react-scroll'
import {Link} from 'react-scroll'
import Logo from '../../images/Logo.png';
import useStyles from './styles';
import { useNavigate, useLocation} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import { Button } from '@mui/material';
import { Avatar } from '@mui/material';
import StyledToolbar from './StyledToolbar';
import { Box } from '@material-ui/core';

const Header = () => {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const [offset, setOffset] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation(); 
  
  const classes = useStyles();
  
  //expires token after 1000
  useEffect(() => {
    const token = user?.token;
    if(token){
        const decodeToken = decode(token);
        if(decodeToken.exp * 1000 < new Date().getTime()) logout();
    }
    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]); //JWT Location used to update on page.

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  //Logsout
  const logout = () =>{
  dispatch({type: 'LOGOUT'});
    navigate("/");
    setUser(null);
  };

  return (
    
      <AppBar position="fixed" className={classes.appBar}>

        <StyledToolbar>

          {/* Logo & scroll to top*/}
          <Link smooth={true} duration={1000} onClick={() => scroll.scrollToTop()}>
              <img src={Logo} className={classes.logo} />
          </Link>
          

          {/* scroll to projects & info
          <Box>
            <Link  to="whoWeAre" smooth={true} duration={1000} offset={-128}>
              <Typography variant="h5" noWrap component="div" sx={{ flexGrow: 1, alignSelf: 'flex-end' }} >
                Info
              </Typography>
            </Link>

            <Link  to="contact" smooth={true} duration={1000} offset={-120}>
              <Typography variant="h5" noWrap component="div" sx={{ flexGrow: 1, alignSelf: 'flex-end' }} >
                Contact
              </Typography>
            </Link>
          </Box>
          */}

          {/* Users Logo and signout */}
          
          {user?.result ? (
            <Box className={classes.profile}> 
              <div>
              <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
              <Typography className={classes.userName} variant='h6'> {user.result.name} </Typography>
              </div>
              <Button variant='contained' className={classes.logout} color="secondary" onClick={logout}>logout</Button>
            </Box>
            ) : (
              <Link smooth={true} duration={200} onClick={() => scroll.scrollToTop()}>
                <Typography variant='h5' className={classes.signOutText}>
                  please sign in!
                </Typography>
              </Link>              
            )}
           

        </StyledToolbar>
      </AppBar>
  
  );
}
export default Header;
