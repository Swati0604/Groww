import { ActionTypes } from "./constant";

const initialState = {
  allBank: [],
};

export const allBankReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ALL_BANK:
      return {...state, allBank: payload};
    default:
      return state;
  }
};


