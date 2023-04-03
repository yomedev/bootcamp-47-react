import { CHANGE_SEARCH, CREATE_USER, DELETE_USER, TOGGLE_MODAL } from "./usersTypes";

export const toggleModalAction = () => ({ type: TOGGLE_MODAL})

export const deleteUserAction = (userId) => ({
  type: DELETE_USER,
  payload: userId
})

export const createUserAction = (user) => ({
  type: CREATE_USER,
  payload: {...user, id: Date.now()}
})

export const changeSearchAction = (value) => ({
  type: CHANGE_SEARCH,
  payload: value
})