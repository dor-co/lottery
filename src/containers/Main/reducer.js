import { mockData } from "../../utils/mockData";
import { ON_LOAD_CARDS_DATA } from "./constants";

const initialState = {
  test: "testtt",
  cards: [],
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_LOAD_CARDS_DATA:
      return {
        ...state,
        cards: mockData,
      };
    default:
      return state;
  }
};

export default appReducer;
