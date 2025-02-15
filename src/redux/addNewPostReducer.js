import ActionType from "./types.js";
const { UPDATE_TEXT, ADD_NEW_POST_TEXT } = ActionType;

const initialState = {
  textAreaValue: "",
  postText: "",
  posts: [],
};

export const addNewPostReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TEXT:
      return {
        ...state,
        textAreaValue: (state.textAreaValue = action.payload),
      };
    case ADD_NEW_POST_TEXT:
      return {
        ...state,
        postText: state.textAreaValue,
        posts: [...state.posts, action.payload],
        textAreaValue: (state.textAreaValue = ""),
      };
    default:
      return state;
  }
};
