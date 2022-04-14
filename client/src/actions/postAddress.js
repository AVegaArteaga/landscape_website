import {CREATE_ADDRESS, FETCH_ALL, FETCH_ADDRESS_NAME, START_LOADING, END_LOADING} from '../constants/actionTypes'
import * as api from '../api/index.js';

export const createAddressPosts = (postAddress) => async (dispatch) => {
    try {

      dispatch({ type: START_LOADING });
      const { data } = await api.createAddressPosts(postAddress); //sends data to mongo

      
      dispatch({ type: CREATE_ADDRESS, payload: data }); //setting it to the store
      dispatch({ type: END_LOADING });
    } catch (error) {
      console.log(error);
    }
  };


export const getAddressPostByName = (userIdObama) => async (dispatch) => {

    try {
        dispatch({ type: START_LOADING });
        const {data} = await api.getAddressPostByName(userIdObama);
        // console.log("data in postAddress:")
        // console.log(data);
        dispatch({type: FETCH_ADDRESS_NAME, payload: data});
        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error);
    }
}

  export const getAddressPosts = () => async (dispatch) => {
    try {
      const { data } = await api.fetchAddressPosts(); //fetches all the posts
      dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
      console.log(error);
    }
  };