import { createAsyncThunk } from "@reduxjs/toolkit";
import { createArticleService, deleteArticleService, getArticlesService } from "../../services/articlesService";
import { toast } from "react-toastify";

// export const getArticlesPending = createAction("articles/getArticles/pending");
// export const getArticlesFulfilled = createAction(
//   "articles/getArticles/fulfilled"
// );
// export const getArticlesRejected = createAction(
//   "articles/getArticles/rejected"
// );

// export const getArticlesThunk = () => async (dispatch) => {
//   dispatch(getArticlesPending())
//   try {
//     const data = await getArticlesService()
//     dispatch(getArticlesFulfilled(data))
//   } catch (error) {
//     dispatch(getArticlesRejected())
//   }
// };

export const getArticlesThunk = createAsyncThunk(
  "articles/getArticles",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getArticlesService();
      return data;
    } catch (error) {
      toast.error(error.message);
      return rejectWithValue();
    }
  }
);



export const createArticleThunk = createAsyncThunk(
  "articles/createArticle",
  async (body, { rejectWithValue }) => {
    try {
      const data = await createArticleService(body);
      return data;
    } catch (error) {
      toast.error(error.message);
      return rejectWithValue();
    }
  }
);

export const deleteArticleThunk = createAsyncThunk(
  "articles/deleteArticle",
  async (id, { rejectWithValue }) => {
    try {
      const data = await deleteArticleService(id);
      return data;
    } catch (error) {
      toast.error(error.message);
      return rejectWithValue();
    }
  }
);
