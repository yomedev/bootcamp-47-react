import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProfileService } from "../../services/usersService";
import { token } from "../../http";
// import { logoutAction } from "../auth/authSlice";

export const getProfileThunk = createAsyncThunk(
  "profile/getProfile",
  async (_, { rejectWithValue, getState, dispatch }) => {
    const { access_token, token_type } = getState().auth;

    if (!access_token || !token_type) {
      // dispatch(logoutAction())
      return rejectWithValue()
    }

    try {
      token.set(`${token_type} ${access_token}`)
      const data = await getProfileService();
      return data
    } catch (error) {
      token.unset()
      return rejectWithValue();
    }
  }
);