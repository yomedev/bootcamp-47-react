import { createSlice } from "@reduxjs/toolkit";
import { authInitialState } from "./authInitialState";
import { loginThunk } from "./authThunk";
import { fetchStatus } from "../../constants/fetch-status";

const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {
    logoutAction: () => authInitialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state) => {
        state.status = fetchStatus.Loading;
      })
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.status = fetchStatus.Success;
        state.access_token = payload.access_token;
        state.token_type = payload.token_type;
      })
      .addCase(loginThunk.rejected, (state) => {
        state.status = fetchStatus.Error;
      });
  },
});

export const authReducer = authSlice.reducer;

export const { logoutAction } = authSlice.actions;
