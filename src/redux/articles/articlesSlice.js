import { createSlice } from "@reduxjs/toolkit";
import { articlesInitialState } from "./articlesInitialState";
import { fetchStatus } from "../../constants/fetch-status";
import {
  createArticleThunk,
  deleteArticleThunk,
  getArticlesThunk,
} from "./articlesThunk";

const articlesSlice = createSlice({
  initialState: articlesInitialState,
  name: "articles",
  extraReducers: (builder) => {
    builder
      .addCase(getArticlesThunk.pending, (state) => {
        state.status = fetchStatus.Loading;
      })
      .addCase(getArticlesThunk.fulfilled, (state, { payload }) => {
        state.status = fetchStatus.Success;
        state.data = payload;
      })
      .addCase(getArticlesThunk.rejected, (state) => {
        state.status = fetchStatus.Error;
      })
      .addCase(createArticleThunk.pending, (state) => {
        state.status = fetchStatus.Loading;
      })
      .addCase(createArticleThunk.fulfilled, (state, { payload }) => {
        state.status = fetchStatus.Success;
        state.data.push(payload);
      })
      .addCase(createArticleThunk.rejected, (state) => {
        state.status = fetchStatus.Error;
      })
      .addCase(deleteArticleThunk.pending, (state) => {
        state.status = fetchStatus.Loading;
      })
      .addCase(deleteArticleThunk.fulfilled, (state, { payload }) => {
        state.status = fetchStatus.Success;
        state.data = state.data.filter((article) => article.id !== payload.id);
      })
      .addCase(deleteArticleThunk.rejected, (state) => {
        state.status = fetchStatus.Error;
      });
  },
  // extraReducers: {
  //   [getArticlesPending]: (state) => {
  //     state.status = fetchStatus.Loading;
  //   },
  //   [getArticlesFulfilled]: (state, { payload }) => {
  //     state.status = fetchStatus.Success;
  //     state.data = payload;
  //   },
  //   [getArticlesRejected]: (state) => {
  //     state.status = fetchStatus.Error;
  //   },
  // },
});

export const articlesReducer = articlesSlice.reducer;
