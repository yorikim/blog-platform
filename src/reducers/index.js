import { combineReducers } from 'redux';

import posts from './Posts';
import post from './Post';

export default combineReducers({
  post,
  posts
})
