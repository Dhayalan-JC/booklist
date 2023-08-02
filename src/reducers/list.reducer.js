/* eslint-disable import/no-anonymous-default-export */
import { LIST_DETAILS } from '../actions/type';

const INITIAL_STATE = {
  lists: [],
  isloading: true,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LIST_DETAILS:
      return {
        ...state,
        lists: action.payload,
        isloading: false,
      };
    default:
      return state;
  }
};
