import { createAction } from "@reduxjs/toolkit";

export const getArticlesPending = createAction("articles/getArticles/pending");
export const getArticlesFulfilled = createAction(
  "articles/getArticles/fulfilled"
);
export const getArticlesRejected = createAction(
  "articles/getArticles/rejected"
);
