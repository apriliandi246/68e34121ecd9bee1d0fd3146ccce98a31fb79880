import { combineReducers } from "redux";
import productsReducer from "./products/products.js";
import uiReducer from "./statusComponents/statusComponents.js";

export default combineReducers({
   entities: productsReducer,
   ui: uiReducer,
});
