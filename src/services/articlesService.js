import axios from "axios";
import { format } from "date-fns";

axios.defaults.baseURL = "https://newsapi.org/v2/";
axios.defaults.params = {
  apiKey: "8cb01996c0d34dbebd5fe5c1bf4080cf",
  pageSize: 8,
};

export const getArticlesService = async ({ query, page }) => {
  const { data } = await axios.get("everything", {
    params: {
      q: query || "javascript",
      page: page,
    },
  });

  return data;
};

export const getSingeArticleService = async (query) => {
  const { data } = await axios.get("everything", {
    params: {
      q: query,
      searchIn: 'title',
      pageSize: 4
    },
  });
  return data.articles[0];
}

export const getNewestArticles = async () => {
  const { data } = await axios.get("everything", {
    params: {
      q: 'news',
      to: format(new Date(), 'yyyy-MM-dd'),
      pageSize: 3
    },
  });
  return data;
}
