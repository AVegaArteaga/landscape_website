import React, { useState } from 'react';
import PasswordStrengthBar from 'react-password-strength-bar';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import { Avatar, Button, Paper, Grid, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import {AUTH} from '../../constants/actionTypes';
import { signin, signup } from '../../actions/auth';

import useStyles from './styles';
import Icon from './icons';
import Input from './Input';

const initialState = { firstName: '', email: '', password: '', confirmPassword: '' , lastName: ''};

const SignUp = () => {
  
  const [formData, setForm]     = useState(initialState);

  const [isSigninSuccess, setIsSigninSuccess]   = useState(false);
  const [isSignupSuccess, setIsSignupSuccess]   = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStregnth, setPasswordStrength] = useState(0);
  const passwordStregnthLimit = 1;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const classes = useStyles();

  //inverts the showPassword bool
  const handleShowPassword = () => setShowPassword(!showPassword);

  //sets the data from the feild to the formData
  const handleChange = (e) => setForm({ ...formData, [e.target.name]: e.target.value }); // sign up <--> sign in keeps the same email and password
  
  //switching login to signout
  const switchMode = () => {
    setIsSigninSuccess(false);
    setIsSignupSuccess(false);
    setForm(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };
  
  //Sets the score of the password
  function handleChangeScore (score, feedback) {setPasswordStrength(score)}
  
  
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

  //alerts if Google failed to sign in
  const googleError = () => alert('Google Sign In was unsuccessful. Try again later');

  //Clears the text feild
  const clearText = () =>{
    setForm({ ...formData, password: '', confirmPassword: '', email: ''});
    console.log(formData);
  }

  //start of the to backend
  const handleSubmit = (e) => {
    //prevent screen to refresh
    e.preventDefault();

    //Connecting Backend Code
    if (isSignup) {
      //check password strength
      if(passwordStregnth < passwordStregnthLimit){ 
        console.log("Too Weak of a Password!");  
        return false;
      }
      //check if password is the same
      if(formData.password != formData.confirmPassword){ 
        console.log("Does Not Match!");  
        return false;
      }
      //validate password, send to /actions
      dispatch(signup(formData,navigate))
    }
    //logging in 
    else {
      dispatch(signin(formData,navigate))
      clearText()
    }
  };
  
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
                                                                                          {/* passwordStregnth Yeah, this is weird looking statments, may want to change this*/}
            <Button type="submit" fullWidth variant="contained" color="primary" className={(isSignup ? passwordStregnth > passwordStregnthLimit : formData.password.length) ? classes.submitFillPassword : classes.submit}>
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