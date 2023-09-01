import { ON_SET_CARDS_DATA } from "./constants";

const initialState = {
  cards: [],
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_SET_CARDS_DATA:
      return {
        ...state,
        cards: action.data,
      };
    default:
      return state;
  }
};

export default appReducer;
