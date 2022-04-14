import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData); //this goes to the api/index.js

    dispatch({ type: AUTH, data });

    router('/');
    
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    
    const { data } = await api.signUp(formData); //goes to index.js and bring back info

    dispatch({ type: AUTH, data }); //tpye AUTH is string for "AUTH" and data is info we got from signUp

    router('/');
  } catch (error) {
    console.log(error);
  }
};