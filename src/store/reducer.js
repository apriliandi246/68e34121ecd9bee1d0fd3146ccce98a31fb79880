import ui from "./ui";
import foods from "./foods";
import { combineReducers } from "redux";

export default combineReducers({
   ui,
   entities: foods,
});
