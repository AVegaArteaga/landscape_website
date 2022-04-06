import { combineReducers } from 'redux';

import posts from './address';
import auth from './auth';

export const reducers = combineReducers({ posts, auth });