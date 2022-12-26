import { createAction } from "@reduxjs/toolkit";

export const shoppingCartActions = {
  addItem: createAction("ADD_ITEM"),
  updateItem: createAction("UPDATE_ITEM"),
  removeItem: createAction("REMOVE_ITEM"),
};
