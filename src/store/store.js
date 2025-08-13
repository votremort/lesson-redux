import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../slices/counter/counterSlice'
import usersReducer from '../slices/users/usersSlice';

export default configureStore({
  reducer:{
    counter: counterReducer,
    users: usersReducer,
  }
})