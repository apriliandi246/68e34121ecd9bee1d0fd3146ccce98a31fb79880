import reducer from "./reducer.js";
import totalItems from "./middleware/totalItems";
import totalPrice from "./middleware/totalPrice.js";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

export default function getStore() {
   return configureStore({
      reducer,
      middleware: [...getDefaultMiddleware(), totalPrice, totalItems],
   });
}
