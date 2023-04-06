import { fetchStatus } from "../../constants/fetch-status";
import { ArticlesError } from "../../components/Articles/ArticlesError";
import { ArticlesItem } from "../../components/Articles/ArticlesItem";
import { ArticlesSearch } from "../../components/Articles/ArticlesSearch";
import { getArticlesThunk } from "../../redux/articles/articlesThunk";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export const ArticlesListPage = () => {
  const articles = useSelector(state => state.articles.data)
  const status = useSelector(state => state.articles.status)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getArticlesThunk())
  }, [dispatch])

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
    </>
  );
};
