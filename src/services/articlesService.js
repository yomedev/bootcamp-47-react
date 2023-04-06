import axios from "axios";

axios.defaults.baseURL = "https://642db3cc66a20ec9cea44565.mockapi.io/articles";

export const getArticlesService = async () => {
  const { data } = await axios.get("");

  return data;
};

export const getSingelArticleService = async (id) => {
  const { data } = await axios.get(`${id}`);
  return data;
};

export const createArticleService = async (body) => {
  // console.log(body);
  const { data } = await axios.post('', body);
  console.log(data);
  return data;
};

export const deleteArticleService = async (id) => {
  const { data } = await axios.delete(`${id}`);
  return data;
};

export const getNewestArticles = () => {};
