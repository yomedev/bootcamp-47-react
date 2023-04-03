import { combineReducers } from "redux";
import { usersIntialState } from "./usersInitialState";
import {
  CHANGE_SEARCH,
  CREATE_USER,
  DELETE_USER,
  TOGGLE_MODAL,
} from "./usersTypes";

const usersDataReducer = (state = usersIntialState.data, action) => {
  switch (action.type) {
    case DELETE_USER:
      return state.filter((user) => user.id !== action.payload);
    case CREATE_USER:
      return [action.payload, ...state];
    default:
      return state;
  }
};

export const usersModalReducer = (
  state = usersIntialState.isModalOpen,
  action
) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return !state;
    default:
      return state;
  }
};

export const usersSearchReducer = (state = usersIntialState.search, action) => {
  switch (action.type) {
    case CHANGE_SEARCH:
      return action.payload;
    default:
      return state;
  }
};

export const usersReducer = combineReducers({
  data: usersDataReducer,
  isModalOpen: usersModalReducer,
  search: usersSearchReducer,
});
