import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './DataSlice'
 
export default configureStore({
 reducer: {
   counter: counterReducer,
 },
})
 
 