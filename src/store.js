import { configureStore } from '@reduxjs/toolkit'
import addtocart from './slices/addToCartSlice'
import cartReducer from "./slices/cartSlice" 



export default configureStore({
  reducer: {
    cart:addtocart, cartReducer,
   
    
   
  }
})