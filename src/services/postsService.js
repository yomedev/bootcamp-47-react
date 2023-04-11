import { omitBy } from 'lodash-es';
import {publicApi, privateApi} from '../http/index'

export const getPostsService = async params => {
  const { data } = await publicApi.get('/posts', { params: { ...omitBy(params, item => !item), limit: 9 } });
  return data.data;
};

export const createNewPostService = async body => {
  const { data } = await privateApi.post('/posts', body);
  return data;
};

export const getSinglePostService = async (id, params) => {
  const { data } = await publicApi.get(`/posts/${id}`, { params });
  return data;
};

export const deletePostService = id => {
  return privateApi.delete(`/posts/${id}`);
};