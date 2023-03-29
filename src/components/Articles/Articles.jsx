import React, { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { fetchStatus } from "../../constants/fetch-status";
import { useFetch } from "../../hooks/useFetch";
import { getArticlesService } from "../../services/articlesService";
import { Button } from "../Button";
import { ArticlesError } from "./ArticlesError";
import { ArticlesItem } from "./ArticlesItem";
import { ArticlesLoader } from "./ArticlesLoader";
import { ArticlesSearch } from "./ArticlesSearch";

export const Articles = () => {
  // const [articles, setArticles] = useState([]);
  // const [status, setStatus] = useState(fetchStatus.Idle);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  
  const getArticles = useCallback(async () => {
    const data = await getArticlesService({query, page})
    return data.articles
  }, [page, query])

  const {data: articles, status } = useFetch(getArticles, page === 1)

  // const fetchArticles = useCallback(async () => {
  //   setStatus(fetchStatus.Loading)
  //   try {
  //     const data = await getArticlesService({query, page})
  //     console.log(data);
  //   } catch (error) {

  //   }
  // }, [page, query])

  // useEffect(() => {
  //   const fetchArticles = async () => {
  //     setStatus(fetchStatus.Loading);
  //     try {
  //       const data = await getArticlesService({ query, page });
  //       setArticles((prev) => [...prev, ...data.articles]);
  //       setStatus(fetchStatus.Success);
  //     } catch (error) {
  //       toast.error(error.message);
  //       setStatus(fetchStatus.Error);
  //     }
  //   };
  //   fetchArticles();
  // }, [page, query]);

  const handleChangeQuery = (value) => {
    setQuery(value);
    setPage(1);
    // setArticles([]);
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
