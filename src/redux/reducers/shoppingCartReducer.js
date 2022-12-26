import { createReducer } from "@reduxjs/toolkit";
import { shoppingCartActions } from "../actions";
import CartItemModel from "../../shared/models/cartItemModel";
import ItemModel from "../../shared/models/itemModel";
import shirt from "../../assets/img/shirt.jpg";
import sweatshirt from "../../assets/img/sweatshirt.jpg";

const initialState = {
  cartItems: [],
  shipping: {
    description: "Free Shipping",
    cost: 0,
  },
  discount: undefined,
};

const state = {
  ...initialState,
  cartItems: [
    CartItemModel(
      ItemModel(
        1,
        "Plain Red Shirt",
        "Shirt",
        "Red",
        "M",
        shirt,
        39.49,
        "1 Piece"
      ),
      1
    ),
    CartItemModel(
      ItemModel(
        2,
        "Blue Sweatshirt",
        "Sweatshirt",
        "Blue",
        "L",
        sweatshirt,
        49.99,
        ""
      ),
      2
    ),
  ],
};

const shoppingCartReducer = createReducer(state, (builder) => {
  builder
    .addCase(shoppingCartActions.addItem, (state, action) => {
      state.push(action.payload);
    })
    .addCase(shoppingCartActions.updateItem, (state, action) => {
      const updatedItemIdx = state.cartItems.findIndex(
        (i) => i.item.id === action.payload.id
      );

      console.log(updatedItemIdx);

      if (updatedItemIdx !== -1) {
        state.cartItems[updatedItemIdx] = {
          ...state.cartItems[updatedItemIdx],
          quantity: state.cartItems[updatedItemIdx].quantity + action.payload.inc,
        };
      }
    })
    .addCase(shoppingCartActions.removeItem, (state, action) => {
      state.cartItems = state.cartItems.filter(
        (i) => i.item.id !== action.payload.id
      );

      console.log(state.cartItems);
    });
});

export default shoppingCartReducer;
