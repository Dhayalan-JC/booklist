import { LIST_DETAILS, EDIT_DETAILS, UPDATE_DETAILS } from "../actions/types";

export const loadData = () => (dispatch) => {
  dispatch({ type: LIST_DETAILS });
};

export const edit_data = ({ prop, value }) => ({
  type: EDIT_DETAILS,
  payload: { prop, value },
});

export const update_data = (value) => ({
  type: UPDATE_DETAILS,
  payload: value,
});
