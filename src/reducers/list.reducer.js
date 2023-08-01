/* eslint-disable import/no-anonymous-default-export */
import { LIST_DETAILS } from "../actions/type";

const INITIAL_STATE = {
  isloading: false,
  list: {},
};

export default (state = INITIAL_STATE, action) => {
  const newState = { ...state };
  switch (action.type) {
    case LIST_DETAILS:
      newState.excelHeaders = action.payload.AllSheetsHeader;
      return newState;
    default:
      return state;
  }
};
