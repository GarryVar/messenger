import { combineReducers } from "redux";
import { likeReducer } from "./likeReducer.js";
import { addNewPostReducer } from "./addNewPostReducer.js";
import { toggleNavReducer } from "./toggleNavReducer.js";

export const rootReducer = combineReducers({
  likeReducer,
  addNewPostReducer,
  toggleNavReducer,
});
