import axios from 'axios';

//const url = 'https://video-game-project.herokuapp.com';
const url = 'http://localhost:5000';

const API = axios.create({ baseURL: url });


//this function will happen on each requests
API.interceptors.request.use((req) => { //callback funtion google it
  if (localStorage.getItem('profile')) { // we have to send the token back to the backend from profile 
    req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`; //if true, then we get
  }

  return req;
});

export const getAddressPostByName = (penisExtension) => API.get(`/addressList/${penisExtension}`);
export const createAddressPosts = (newPostAddresses) => API.post('/addressList', newPostAddresses);
export const fetchAddressPosts  = () => API.get(`/addressList`);
// export const fetchPost = (id) => API.get(`/posts/${id}`) ;
// export const fetchPosts = (page) => API.get(`/posts?page=${page}`);
// export const fetchPostsBySearch = (searchQuery) => API.get(`/posts/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`);//we sending all the infomation to the /posts/search?searchQuery endpoint
// export const likePost =   (id) =>      API.patch(`/posts/${id}/likePost`);
// export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
// export const deletePost = (id) =>      API.delete(`/posts/${id}`);

export const signIn = (formData) => API.post('/user/signin', formData); //hey data base, get me some info and return it to me
export const signUp = (formData) => API.post('/user/signup', formData);
