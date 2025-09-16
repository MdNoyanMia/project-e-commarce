import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Other reducers like addToCart and removeFromCart
    incrementQuantity: (state, action) => {
      const { id } = action.payload;
      const itemToUpdate = state.value.find(item => item.id === id);
      if (itemToUpdate) {
        itemToUpdate.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const { id } = action.payload;
      const itemToUpdate = state.value.find(item => item.id === id);
      if (itemToUpdate && itemToUpdate.quantity > 1) {
        itemToUpdate.quantity -= 1;
      }
    },
    removeFromCart: (state, action) => {
      const { id } = action.payload;
      state.value = state.value.filter(item => item.id !== id);
    },
  },
});

// The actions must be exported
export const { incrementQuantity, decrementQuantity, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;