import axios from "axios";

axios.defaults.baseURL = "https://newsapi.org/v2/";
axios.defaults.params = {
  apiKey: "81a8a03a925b4f9598b82021fed677f7",
  pageSize: 9,
};

export const getPosts = async (query, page) => {
  const { data } = await axios.get("everything", {
    params: {
      q: query || "javascript",
      page: page,
    },
  }); // 'https://newsapi.org/v2/' + "everything"
  return data;
};

