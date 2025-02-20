import { combineReducers } from "redux";
import { addNewPostReducer } from "./addNewPostReducer.js";
import { toggleNavReducer } from "./toggleNavReducer.js";

export const rootReducer = combineReducers({
  addNewPostReducer,
  toggleNavReducer,
});
