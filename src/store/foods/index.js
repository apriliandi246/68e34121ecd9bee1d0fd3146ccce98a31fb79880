import { createSlice, createAction } from "@reduxjs/toolkit";

const addProduct = createAction("food/addProduct");

const slice = createSlice({
   name: "foods",
   initialState: {
      foods: [],
      totalFoods: 0,
      totalPrice: 0,
   },
   reducers: {
      addedTotalPrice: (state, action) => {
         state.totalPrice = action.payload.totalPrice;
      },
      addedTotalFoods: (state, action) => {
         state.totalFoods = action.payload.totalFoods;
      },
   },
});

export const { addedTotalPrice, addedTotalFoods } = slice.actions;
export const totalItems = (state) => state.entities.totalFoods;
export const addToCart = (data) => addProduct({ price: data.price });
export const totalPriceOfProducts = (state) => state.entities.totalPrice;

export default slice.reducer;
