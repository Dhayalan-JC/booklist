import { API_START, API_END, ACCESS_DENIED, API_ERROR } from '../actions/type';

export const apiStart = (data) => ({
  type: API_START,
  payload: data,
});

export const apiEnd = (data) => ({
  type: API_END,
  payload: data,
});

export const accessDenied = (url) => ({
  type: ACCESS_DENIED,
  payload: {
    url,
  },
});

export const apiError = (error) => ({
  type: API_ERROR,
  error,
});
