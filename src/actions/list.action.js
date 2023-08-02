import axios from 'axios';

import { LIST_DETAILS, EDIT_DETAILS, UPDATE_DETAILS } from '../actions/type';

export const edit_data = ({ prop, value }) => ({
  type: EDIT_DETAILS,
  payload: { prop, value },
});

export const update_data = (value) => ({
  type: UPDATE_DETAILS,
  payload: value,
});
export const loadData = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `http://68.178.162.203:8080/application-test-v1.1/books`
    );
    dispatch({
      type: LIST_DETAILS,
      payload: res.data.data,
    });
  } catch (e) {
    console.log(e);
    // dispatch({
    //   type: USERS_ERROR,
    //   payload: console.log(e),
    // });
  }
};
