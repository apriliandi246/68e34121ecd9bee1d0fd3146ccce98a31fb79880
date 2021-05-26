import reducer from "./reducer.js";
import totalFoods from "./middleware/totalFoods";
import totalPrice from "./middleware/totalPrice";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

export default function getStore() {
   return configureStore({
      reducer,
      middleware: [...getDefaultMiddleware(), totalPrice, totalFoods],
   });
}
