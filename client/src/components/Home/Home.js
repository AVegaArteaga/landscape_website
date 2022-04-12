import React from 'react';
import { useEffect, useState } from 'react';
import './Home.scss';
import Header from '../Header/Header';
import ImageOne from './ImageOne/ImageOne';
import ImageTwo from './ImageTwo/ImageTwo'
import decode from 'jwt-decode';
import { useNavigate, useLocation} from 'react-router-dom';
import { useDispatch } from 'react-redux';


{/* <Main />
<Projects />
<ContactForm/>
<ContactForm />  */}
const Home = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation(); 

  const logout = () =>{
    dispatch({type: 'LOGOUT'});
    navigate("/");
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if(token){
        const decodeToken = decode(token);
        if(decodeToken.exp * 1000 < new Date().getTime()) 
          logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));

  }, [location]); //JWT Location used to update on page.

    return (
    <div className="App">
        <Header/>
        <ImageOne/>
        <ImageTwo/>
    </div>
  );
}

export default Home;