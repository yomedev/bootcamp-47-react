import React, { useCallback } from "react";
import { ArticlesItem } from "../../components/Articles/ArticlesItem";
import { useFetch } from "../../hooks/useFetch";
import { getNewestArticles } from "../../services/articlesService";

export const NewestArticlesPage = () => {
  const getArticles = useCallback(async () => {
    const data = await getNewestArticles();
    return data.articles;
  }, []);

  const { data: articles } = useFetch(getArticles);

  return (
    <div className="container-fluid g-0">
      <div className="row">
        {articles?.map((article) => (
          <ArticlesItem key={article.url} article={article} />
        ))}
      </div>
    </div>
  );
};
