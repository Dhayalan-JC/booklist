import { combineReducers } from 'redux';
import listreducer from './list.reducer';
import userReducer from './user.reducer';

export default combineReducers({
  lists: listreducer,
  users: userReducer,
});
