import ActionType from "./types.js";

const { ADD_LIKE } = ActionType;
const initialState = {
  like: 0,
  likedIcon: false,
};

export const likeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIKE:
      return {
        ...state,
        like: state.like + 1,
        likedIcon: !state.likedIcon,
      };
    default:
      return state;
  }
};
