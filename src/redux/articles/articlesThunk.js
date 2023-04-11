import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { createNewPostService, deletePostService, getPostsService } from "../../services/postsService";

export const getArticlesThunk = createAsyncThunk(
  "articles/getArticles",
  async (params, { rejectWithValue }) => {
    try {
      const data = await getPostsService(params);
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
      const data = await deletePostService(id);
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
      const data = await createNewPostService(body);
      return data;
    } catch (error) {
      toast.error(error.message);
      return rejectWithValue();
    }
  }
);