import { combineReducers } from "redux";
import listReducer from "./list.reducer";
import userReducer from "./user.reducer";

export default combineReducers({
  lists: listReducer,
  users: userReducer,
});
