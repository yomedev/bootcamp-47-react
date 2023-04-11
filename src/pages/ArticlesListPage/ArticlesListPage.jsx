import { fetchStatus } from "../../constants/fetch-status";
import { ArticlesError } from "../../components/Articles/ArticlesError";
import { ArticlesItem } from "../../components/Articles/ArticlesItem";
import { ArticlesSearch } from "../../components/Articles/ArticlesSearch";
import { getArticlesThunk } from "../../redux/articles/articlesThunk";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "../../components/Button";

export const ArticlesListPage = () => {
  const articles = useSelector((state) => state.articles.data);
  const status = useSelector((state) => state.articles.status);

  const [searchParams, setSearchParams] = useSearchParams();

  const page = searchParams.get("page") ?? 1;
  const search = searchParams.get("search") ?? "";

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArticlesThunk({ page, search }));
  }, [dispatch, page, search]);

  if (status === fetchStatus.Error) {
    return <ArticlesError />;
  }

  return (
    <>
      <ArticlesSearch />

      <div className="container-fluid g-0">
        <div className="row">
          {articles?.map((article) => (
            <ArticlesItem key={article.id} article={article} />
          ))}
        </div>
      </div>

      <div className="pagination">
        <div className="btn-group my-2 mx-auto btn-group-lg">
          {[...Array(5)].map((_, index) => (
            <Button
              key={index}
              onClick={() => setSearchParams({ page: index + 1, search })}
            >
              {index + 1}
            </Button>
          ))}
        </div>
      </div>
    </>
  );
};
