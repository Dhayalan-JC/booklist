/* eslint-disable import/no-anonymous-default-export */
import { LIST_DETAILS } from '../actions/type';

const INITIAL_STATE = {
  isloading: false,
  list: {},
};

export default (state = INITIAL_STATE, action) => {
  // console.log('action type => ', action.type);
  const newState = { ...state };
  switch (action.type) {
    case LIST_DETAILS:
      console.log('action type => ', action.type);
      newState.excelHeaders = action.payload.AllSheetsHeader;
      return newState;
    default:
      return state;
  }
};
