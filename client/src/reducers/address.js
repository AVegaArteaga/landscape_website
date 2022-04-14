import { CREATE_ADDRESS, FETCH_ALL,START_LOADING ,END_LOADING , FETCH_ADDRESS_NAME} from '../constants/actionTypes';

export default (state = {isLoading: true, posts: [], allPosts: []}, action) => {
  // console.log("data in reducers:")
  // console.log(action.payload);
  
  switch (action.type) {
    case START_LOADING:
      return {...state, isLoading: true}
    case END_LOADING:
      return {...state, isLoading: false}
    case CREATE_ADDRESS:
      return {...state, posts: [...state.posts, action.payload]};
    case FETCH_ALL:
      return {...state, allPosts: action.payload};   
    case FETCH_ADDRESS_NAME: //may want to change this
      return {...state, posts: action.payload};
    default:
      return state;
  }
};
