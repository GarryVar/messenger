import ActionTypes from "./types.js";

const { TOGGLE_NAV } = ActionTypes;

const initialState = {
  hidden: false,
};

export const toggleNavReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_NAV:
      return {
        ...state,
        hidden: !state.hidden,
      };
    default:
      return state;
  }
};
