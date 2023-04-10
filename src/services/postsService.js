import { omitBy } from 'lodash-es';

import axios from 'axios';

const postsApi = axios.create({
  baseURL: 'http://70.34.201.18:4444/',

})

export const getPostsService = async params => {
  const { data } = await postsApi.get('/posts', { params: { ...omitBy(params, item => !item), limit: 9 } });
  return data.data;
};

export const createNewPostService = async body => {
  const { data } = await postsApi.post('/posts', body);
  return data;
};

export const getSinglePostService = async (id, params) => {
  const { data } = await postsApi.get(`/posts/${id}`, { params });
  return data;
};

export const deletePostService = id => {
  return postsApi.delete(`/posts/${id}`);
};