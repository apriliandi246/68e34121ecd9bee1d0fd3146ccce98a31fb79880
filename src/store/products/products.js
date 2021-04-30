import { createSlice, createAction } from "@reduxjs/toolkit";

const addProduct = createAction("food/addProduct");

const slice = createSlice({
   name: "products",
   initialState: {
      products: [],
      totalItems: 0,
      totalPriceOfProducts: 0,
   },
   reducers: {
      addedTotalPrice: (state, action) => {
         state.totalPriceOfProducts = action.payload.totalPrice;
      },
      addedTotalItems: (state, action) => {
         state.totalItems = action.payload.totalItems;
      },
   },
});

export const { addedProduct, addedTotalPrice, addedTotalItems } = slice.actions;
export default slice.reducer;

export const totalPriceOfProducts = (state) =>
   state.entities.totalPriceOfProducts;

export const totalItems = (state) => state.entities.totalItems;

export const addToCart = (data) =>
   addProduct({
      price: data.price,
   });
