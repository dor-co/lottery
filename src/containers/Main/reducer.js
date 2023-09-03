import { ON_SET_CARDS_DATA, ON_SET_IS_LOADING } from "./constants";

const initialState = {
  cards: [],
  totalLengthCards: null,
  currentPage: 1,
  isLoading: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_SET_IS_LOADING:
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    case ON_SET_CARDS_DATA:
      return {
        ...state,
        cards: action.data.cards,
        totalLengthCards: action.data.totalLength,
        currentPage: action.data.currentPage,
      };
    default:
      return state;
  }
};

export default appReducer;
