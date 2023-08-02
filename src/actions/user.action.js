import axios from 'axios';

import {
  // SET_ARTICLE_DETAILS,
  LIST_DETAILS,
  EDIT_DETAILS,
  UPDATE_DETAILS,
  GET_USERS,
  USERS_ERROR,
} from '../actions/type';

export const edit_data = ({ prop, value }) => ({
  type: EDIT_DETAILS,
  payload: { prop, value },
});

export const update_data = (value) => ({
  type: UPDATE_DETAILS,
  payload: value,
});
export const getData = () => async (dispatch) => {
  try {
    const res = await axios.get(`http://jsonplaceholder.typicode.com/users`);
    dispatch({
      type: GET_USERS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: USERS_ERROR,
      payload: console.log(e),
    });
  }
};
export const loadData = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `http://68.178.162.203:8080/application-test-v1.1/books`
    );
    dispatch({
      type: LIST_DETAILS,
      payload: res.data,
    });
  } catch (e) {
    console.log(e);
    // dispatch({
    //   type: USERS_ERROR,
    //   payload: console.log(e),
    // });
  }
  // return apiAction({
  //   url: 'http://68.178.162.203:8080/application-test-v1.1/books',
  //   onSuccess: detailList,
  //   onFailure: () => console.log('Error occured loading articles'),
  // });
};
