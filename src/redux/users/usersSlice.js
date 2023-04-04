import { createSlice, nanoid } from "@reduxjs/toolkit";
import { usersIntialState } from "./usersInitialState";

// export const createUserAction = createAction(
//   "users/createUserAction",
//   (user) => ({ payload: { ...user, id: nanoid() } })
// );

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
        state.data.push(payload);
      },
    },
    changeSearchAction: (state, { payload }) => {
      state.search = payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(createUserAction, (state, { payload }) => {
  //     state.data.push(payload);
  //   });
  // },
});

export const usersReducer = usersSlice.reducer;

export const {
  toggleModalAction,
  deleteUserAction,
  createUserAction,
  changeSearchAction,
} = usersSlice.actions;
