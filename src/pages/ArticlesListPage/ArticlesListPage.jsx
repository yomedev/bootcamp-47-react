import React, { useCallback, useEffect } from "react";
import { fetchStatus } from "../../constants/fetch-status";
import { useFetch } from "../../hooks/useFetch";
import { getArticlesService } from "../../services/articlesService";
import { Button } from "../../components/Button";
import { ArticlesError } from "../../components/Articles/ArticlesError";
import { ArticlesItem } from "../../components/Articles/ArticlesItem";
import { ArticlesLoader } from "../../components/Articles/ArticlesLoader";
import { ArticlesSearch } from "../../components/Articles/ArticlesSearch";
import { useLocation, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../context/AuthContext";

export const ArticlesListPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const prevSearchParams = Object.fromEntries([...searchParams]);
  const query = searchParams.get("search");
  const page = searchParams.get("page");

  const getArticles = useCallback(async () => {
    const data = await getArticlesService({ query, page });
    return data.articles;
  }, [page, query]);

  const { data: articles, status } = useFetch(getArticles, page === 1);

  const location = useLocation()

  const isRegistered = location.state?.isRegistered ?? false

  const {username} = useAuth()

  useEffect(() => {
    if (isRegistered) {
      toast.success('Welcome ' + username)
    }
  }, [isRegistered, username])

  // const handleChangeQuery = (value) => {

  //   // setQuery(value);
  //   // setPage(1);
  // };

  const handleChangePage = (page) => {
    setSearchParams({ ...prevSearchParams, page });
    // setPage(page);
  };

  if (status === fetchStatus.Error) {
    return <ArticlesError />;
  }

  return (
    <>
      <ArticlesSearch />

      <div className="container-fluid g-0">
        <div className="row">
          {articles?.map((article) => (
            <ArticlesItem key={article.url} article={article} />
          ))}
        </div>
      </div>

      {status === fetchStatus.Loading && <ArticlesLoader />}
      {status === fetchStatus.Success && (
        <div className="pagination">
          <div className="btn-group my-2 mx-auto btn-group-lg">
            {[...Array(8)].map((_, index) => (
              <Button
                key={index}
                disabled={index + 1 === page}
                onClick={() => handleChangePage(index + 1)}
              >
                {index + 1}
              </Button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
