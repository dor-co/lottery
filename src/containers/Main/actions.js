import { ON_SET_CARDS_DATA, ON_SET_IS_LOADING } from "./constants";

export const onSetCardsData = (data) => ({ type: ON_SET_CARDS_DATA, data });

export const onSetIsLoading = () => ({ type: ON_SET_IS_LOADING });

export const onLoadCardsData = () => {
  return async (dispatch) => {
    dispatch(onSetIsLoading());
    try {
      let response = await fetch("http://localhost:3001/api/cards");
      let json = await response.json();
      dispatch(onSetCardsData(json));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(onSetIsLoading());
    }
  };
};
