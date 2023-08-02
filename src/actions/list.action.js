import {
  // SET_ARTICLE_DETAILS,
  LIST_DETAILS,
  API,
  EDIT_DETAILS,
  UPDATE_DETAILS,
} from '../actions/type';

export const edit_data = ({ prop, value }) => ({
  type: EDIT_DETAILS,
  payload: { prop, value },
});

export const update_data = (value) => ({
  type: UPDATE_DETAILS,
  payload: value,
});

export function loadData() {
  return apiAction({
    url: 'http://68.178.162.203:8080/application-test-v1.1/books',
    onSuccess: detailList,
    onFailure: () => console.log('Error occured loading articles'),
    label: LIST_DETAILS,
  });
}
function detailList(data) {
  return {
    type: LIST_DETAILS,
    payload: data,
  };
}

function apiAction({
  url = '',
  method = 'GET',
  data = null,
  accessToken = null,
  onSuccess = () => {},
  onFailure = () => {},
  label = '',
  headersOverride = null,
}) {
  return {
    type: API,
    payload: {
      url,
      method,
      data,
      accessToken,
      onSuccess,
      onFailure,
      label,
      headersOverride,
    },
  };
}
