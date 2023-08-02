/* eslint-disable import/no-anonymous-default-export */
import {
  // SET_ARTICLE_DETAILS,
  LIST_DETAILS,
  API_START,
  API_END,
} from '../actions/type';

const INITIAL_STATE = {
  lists: [],
  isloading: true,
};

export default (state = INITIAL_STATE, action) => {
  // console.log('type => ', action.type);
  switch (action.type) {
    case LIST_DETAILS:
      // console.log('ACTION type => ', action.type);
      // console.log('PAYLOAD DATA => ', action.payload);
      // return Object.assign({}, state, { lists: action.lists });
      return { ...state, data: action.payload, isloading: false };
    case API_START:
      if (action.payload === LIST_DETAILS) {
        return {
          ...state,
          isloading: false,
        };
      }
      break;
    case API_END:
      if (action.payload === LIST_DETAILS) {
        return {
          ...state,
          isloading: false,
        };
      }
      break;
    default:
      return state;
  }
};
