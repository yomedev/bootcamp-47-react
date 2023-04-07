import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const articlesApi = createApi({
  reducerPath: "articlesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://642db3cc66a20ec9cea44565.mockapi.io",
  }),
  tagTypes: ["Articles"],
  endpoints: (builder) => ({
    getArticles: builder.query({
      query: () => "articles",
      providesTags: ["Articles"],
    }),
    deleteArticle: builder.mutation({
      query: (id) => ({ url: `articles/${id}`, method: "DELETE" }),
      invalidatesTags: ["Articles"],
    }),
    createArticle: builder.mutation({
      query: (body) => ({ url: "articles", method: "POST", body }),
      invalidatesTags: ["Articles"],
    }),
  }),
});

export const { useGetArticlesQuery, useDeleteArticleMutation, useCreateArticleMutation } = articlesApi;
