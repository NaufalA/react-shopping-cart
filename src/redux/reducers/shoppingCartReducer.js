import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  amount: 0,
  totalAmount: 0,
  discount: undefined,
};

const shoppingCartReducer = createReducer({ ...initialState }, (builder) => {
  builder
    .addCase("ADD_ITEM", (state, action) => {
      state.push(action.payload);
    })
    .addCase("UPDATE_ITEM", (state, action) => {
      const updatedItemIdx = state.cartItems.findIndex(
        (i) => i.id === action.payload.id
      );

      if (updatedItemIdx !== -1) {
        state.cartItems[updatedItemIdx] = action.payload;
      }
    })
    .addCase('REMOVE_ITEM', (state, action) => {
        state.cartItems = state.cartItems.filter(i => i.id !== action.payload.id);
    })
});


export default shoppingCartReducer;