import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const itemExists = state.find((item) => item.name === action.payload.name);
      if (itemExists) {
        itemExists.quantity++;
        console.log("item exisits");
      } else {
        state.push({ ...action.payload, quantity: 1 });
        console.log("not exisits");
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.find((item) => item.name === action.payload);
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.find((item) => item.name === action.payload);
      if (item.quantity === 1) {
        const index = state.findIndex((item) => item.name === action.payload);
        state.splice(index, 1);
      } else {
        item.quantity--;
      }
    },
    removeFromCart: (state, action) => {
      const index = state.findIndex((item) => item.name === action.payload);
      state.splice(index, 1);
    },
  },
});

export const cartReducer = cartSlice.reducer;

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} = cartSlice.actions;