import { combineReducers } from "redux";
import { counterReducer } from "./counter/counterReducer";
import { usersReducer } from "./users/usersReducer";

export const rootReducer = combineReducers({
  counter: counterReducer,
  users: usersReducer,
});