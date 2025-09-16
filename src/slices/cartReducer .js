// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice"; // Corrected import name

export default configureStore({
  reducer: {
    cart: cartReducer, // Corrected reducer name
  },
});
