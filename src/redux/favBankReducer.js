import { ActionTypes } from "./constant";

const initialState = {
  favBank: [],
};

export const favBankReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_TO_FAV:
      return {...state, favBank: payload};
    default:
      return state;
  }
};
