import { createSlice } from "@reduxjs/toolkit";

export const addToCartSlice = createSlice({
  name: "cart",
  initialState: {
    value: [],
  },
  reducers: {
    addtocart: (state, action) => {
      let alldata = state.value.find(
        (item) => item.title === action.payload.title
      );
      if (alldata) {
        alldata.quantity += 1;
      } else {
        state.value.push({ ...action.payload, quantity: 1 });
      }
    },
    increment: (state, action) => {
      state.value.map((item) => {
        if (item.title === action.payload) {
          item.quantity += 1;
        }
      });
    },
    decrement: (state, action) => {
      state.value.map((item) => {
        if (item.title === action.payload) {
          item.quantity -= 1;
        }
      });
    },

    removeFromCart: (state, action) => {
      state.value.map((item,index) => {

        if (item.title === action.payload) {
        state.value.splice(index,1)
        }
      });
    },
  },
});

export const { addtocart, increment, decrement, removeFromCart } =
  addToCartSlice.actions;

export default addToCartSlice.reducer;
