import { createSlice, nanoid } from "@reduxjs/toolkit";
import { usersIntialState } from "./usersInitialState";

const usersSlice = createSlice({
  name: "users",
  initialState: usersIntialState,
  reducers: {
    toggleModalAction: (state) => {
      state.isModalOpen = !state.isModalOpen;
    },
    deleteUserAction: (state, { payload }) => {
      state.data = state.data.filter((user) => user.id !== payload);
    },
    createUserAction: {
      prepare: (user) => ({ payload: { ...user, id: nanoid() } }),
      reducer: (state, { payload }) => {
        state.data.unshift(payload);
      },
    },
    changeSearchAction: (state, { payload }) => {
      state.search = payload;
    },
  },
});

export const usersReducer = usersSlice.reducer;

export const {
  toggleModalAction,
  deleteUserAction,
  createUserAction,
  changeSearchAction,
} = usersSlice.actions;
