import ActionType from "./types.js";

const { UPDATE_TEXT, ADD_NEW_POST_TEXT, TOGGLE_NAV } = ActionType;

export const updateTextActionCreator = (value = "") => ({
  type: UPDATE_TEXT,
  payload: value,
});

export const addNePostActionCreator = (newPost = {}) => ({
  type: ADD_NEW_POST_TEXT,
  payload: newPost,
});

export const toggleNavMenuActionCreator = () => ({
  type: TOGGLE_NAV,
});
