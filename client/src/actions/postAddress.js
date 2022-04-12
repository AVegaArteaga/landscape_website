import {CREATE_ADDRESS, FETCH_ALL, FETCH_ADDRESS_NAME} from '../constants/actionTypes'
import * as api from '../api/index.js';

export const createAddressPosts = (postAddress) => async (dispatch) => {
    try {

      
      const { data } = await api.createAddressPosts(postAddress); //sends data to mongo

      
      dispatch({ type: CREATE_ADDRESS, payload: data }); //setting it to the store
    } catch (error) {
      console.log(error);
    }
  };


export const getAddressPostByName = (userIdObama) => async (dispatch) => {

    try {
        const {data} = await api.getAddressPostByName(userIdObama);
        // console.log("data in postAddress:")
        // console.log(data);
        dispatch({type: FETCH_ADDRESS_NAME, payload: data});
    } catch (error) {
        console.log(error);
    }
}

  // export const getAddressPosts = () => async (dispatch) => {
  //   try {
  //     const { data } = await api.fetchAddressPosts(); //fetches all the posts
  //     dispatch({ type: FETCH_ALL, payload: data });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };