import { ON_SET_CARDS_DATA } from "./constants";

export const onSetCardsData = (data) => ({ type: ON_SET_CARDS_DATA, data });

export const onLoadCardsData = () => {
  return async (dispatch) => {
    try {
      let response = await fetch("http://localhost:3001/api/cards");
      let json = await response.json();
      dispatch(onSetCardsData(json));
    } catch (error) {
      console.log(error);
    }
  };
};
