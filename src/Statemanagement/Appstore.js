import { configureStore } from '@reduxjs/toolkit';
import Cartslice from './Cartslice'
const Appstore=configureStore({
  reducer: {
     Cart:Cartslice,
     
  },
})

export default Appstore;