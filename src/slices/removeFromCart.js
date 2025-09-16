// cartSlice.js or slices/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.value.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.value.push({ ...action.payload, quantity: 1 });
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.value.find(item => item.id === action.payload);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          // Remove from cart if quantity is 1
          state.value = state.value.filter(item => item.id !== action.payload);
        }
      }
    },
    removeFromCart: (state, action) => {
      state.value = state.value.filter(item => item.id !== action.payload);
    },
  },
});

export const { addToCart, decreaseQuantity, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
