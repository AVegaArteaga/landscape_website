import React, { useState } from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './styles';
import Input from './Input';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import {AUTH} from '../../constants/actionTypes';

import { signin, signup } from '../../actions/auth';
import { useNavigate } from 'react-router-dom';
import PasswordStrengthBar from 'react-password-strength-bar';
import Icon from './icons';

const initialState = { firstName: '', email: '', password: '', confirmPassword: '' , lastName: ''};

const SignUp = () => {
  const [formData, setForm]     = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);
  const [isSigninSuccess, setIsSigninSuccess]   = useState(false);
  const [isSignupSuccess, setIsSignupSuccess]   = useState(false);
  const [passwordStregnth, setPasswordStrength] = useState(0);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const classes = useStyles();

  //inverts the showPassword bool
  const handleShowPassword = () => setShowPassword(!showPassword);
  
  //switching login to signout
  const switchMode = () => {
    setIsSigninSuccess(false);
    setIsSignupSuccess(false);
    setForm(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };

  //Gets response from googleSuccess that has profile and tokenId
  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: AUTH, data: { result, token } });
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  //Sets the score of the password
  function handleChangeScore (score, feedback) {setPasswordStrength(score)}

  //alerts if Google failed to sign in
  const googleError = () => alert('Google Sign In was unsuccessful. Try again later');

  //sets the data from the feild to the formData
  const handleChange = (e) => setForm({ ...formData, [e.target.name]: e.target.value }); // sign up <--> sign in keeps the same email and password

  //Clears the text feild
  const clearText = () =>{
    setForm({ ...formData, password: '', confirmPassword: '', email: ''});
    console.log(formData);
  }

  //start of the to backend
  const handleSubmit = (e) => {
    e.preventDefault();

    
    /*
    Connecting Backend Code
    */
   if (isSignup) {

     if(passwordStregnth <= 1){ 
       console.log("Too Weak of a Password!");  
       return false;
     }

     if(formData.password != formData.confirmPassword){ 
       console.log("Does Not Match!");  
       return false;
     }
     
     dispatch(signup(formData,navigate))
      //.catch(setIsSignupSuccess(true)) //fix because .catch catches both success and failure

    } else {
      dispatch(signin(formData,navigate))
      //.catch(setIsSigninSuccess(true))
    }
    clearText()
  };
  
  //className={classes.submit}
  return( 
        <Paper className={classes.paper} elevation={6}>
          
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          
          <Typography component="h1" variant="h5">{ isSignup ? 'Sign up' : 'Sign in' }</Typography>
        
          {  isSigninSuccess && <Typography component="h1" variant="h6">Email/Password is in correct!</Typography>}
          {  isSignupSuccess && <Typography component="h1" variant="h6">Email already taken!</Typography>}

          <form className={classes.form} onSubmit={handleSubmit}>
            
            <Grid container spacing={2}>
              {isSignup && (
                <>
                    <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half/>
                    <Input name="lastName" label="Last Name" handleChange={handleChange} half/>
                </>
              )}
              <Input name="email" val={formData.email} label="Email Address" handleChange={handleChange} type="email" />
              { isSignup && <PasswordStrengthBar  scoreWords={['weak', 'too short', 'weak', 'good', 'strong']} shortScoreWord={"Enter Password"} onChangeScore={handleChangeScore}  className={classes.passwordProgressBar} password={formData.password}  barColors={['#818181', '#ef4836', '#f6b44d', '#2b90ef', '#81c784']}/>}
              <Input name="password" val={formData.password} label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword}/>
              { isSignup && <Input val={formData.confirmPassword} name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" handleShowPassword={handleShowPassword}/> }
            </Grid>

            <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
              { isSignup ? 'Sign Up' : 'Sign In' }
            </Button>

            <GoogleLogin
              clientId="73583287469-24n3df9nncuofg56ccdm61cvap7ek58c.apps.googleusercontent.com"
              render={(renderProps) => (
                <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained">
                  Google Sign In
                </Button>
                )}
              onSuccess={googleSuccess}
              onFailure={googleError}
              cookiePolicy="single_host_origin"
            />
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Button onClick={switchMode} >
                  { isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up" }
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
    
  )
 
};

export default SignUp;