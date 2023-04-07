import { ArticlesError } from "../../components/Articles/ArticlesError";
import { ArticlesItem } from "../../components/Articles/ArticlesItem";
import { ArticlesSearch } from "../../components/Articles/ArticlesSearch";
import { useGetArticlesQuery } from "../../redux/articlesRtk/articlesApi";
import Button from "@mui/material/Button";

export const ArticlesListPageRtk = () => {
  const { isError, data: articles } = useGetArticlesQuery();

  if (isError) {
    return <ArticlesError />;
  }

  return (
    <>
      <ArticlesSearch />
      <Button variant="outlined">
        Click
      </Button>
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
