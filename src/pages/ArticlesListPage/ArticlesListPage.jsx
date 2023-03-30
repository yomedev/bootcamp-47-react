import React, { useCallback, useState } from "react";
import { fetchStatus } from "../../constants/fetch-status";
import { useFetch } from "../../hooks/useFetch";
import { getArticlesService } from "../../services/articlesService";
import { Button } from "../../components/Button";
import { ArticlesError } from "../../components/Articles/ArticlesError";
import { ArticlesItem } from "../../components/Articles/ArticlesItem";
import { ArticlesLoader } from "../../components/Articles/ArticlesLoader";
import { ArticlesSearch } from "../../components/Articles/ArticlesSearch";

export const ArticlesListPage = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const getArticles = useCallback(async () => {
    const data = await getArticlesService({ query, page });
    return data.articles;
  }, [page, query]);

  const { data: articles, status } = useFetch(getArticles, page === 1);

  const handleChangeQuery = (value) => {
    setQuery(value);
    setPage(1);
  };

  const handleChangePage = () => {
    setPage((prev) => prev + 1);
  };

  if (status === fetchStatus.Error) {
    return <ArticlesError />;
  }

  return (
    <>
      <ArticlesSearch onSubmit={handleChangeQuery} />

      <div className="container-fluid g-0">
        <div className="row">
          {articles?.map((article) => (
            <ArticlesItem key={article.url} article={article} />
          ))}
        </div>
      </div>

      {status === fetchStatus.Loading && <ArticlesLoader />}
      {status === fetchStatus.Success && (
        <div className="d-flex justify-content-center">
          <Button onClick={handleChangePage}>Load more</Button>
        </div>
      )}
    </>
  );
};
