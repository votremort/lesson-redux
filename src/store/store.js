import { configureStore } from '@reduxjs/toolkit'

import logger from 'redux-logger';

import counterReducer from '../slices/counter/counterSlice'
import usersReducer from '../slices/users/usersSlice';
import postsReducer from '../slices/posts/postsSlice';

import customLogger from '../middleware/customLogger';
import incrementPlusThree from '../middleware/incrementPlusThree';

export default configureStore({
  reducer:{
    counter: counterReducer,
    users: usersReducer,
    posts: postsReducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware()
      .concat(logger)
      .concat(customLogger)
      .concat(incrementPlusThree),
})
