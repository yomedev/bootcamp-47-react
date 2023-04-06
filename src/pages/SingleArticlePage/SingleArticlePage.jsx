import { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";

import { toast } from "react-toastify";

import { Loader } from "../../components/Loader";
import { getSingelArticleService } from "../../services/articlesService";

export const SinglearticlePage = () => {
  const { articleId } = useParams();

  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const location = useLocation()

  const from = location.state?.from
  console.log(location);

  useEffect(() => {
    setIsLoading(true);

    getSingelArticleService(articleId)
      .then(setArticle)
      .catch(() => {
        toast.error("Something went wrong!");
      })
      .finally(() => setIsLoading(false));
  }, [articleId]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    article && (
      <>
        <Link to={from ?? '/articles'} className="btn btn-primary my-3">Back</Link>
        <img
          src={article.urlToImage}
          alt={article.title}
          className="img-fluid mb-4"
          style={{ maxHeight: "600px", width: "100%", objectFit: "cover" }}
        />
        <h1 className="mb-5">{article.title}</h1>

        <div>{article.content}</div>

        <Link to="newest" state={location.state} className="btn btn-primary my-3">
          Show newest articles
        </Link>

        <Outlet />

        {/* <div dangerouslySetInnerHTML={{ __html: article.content.replace(/\n/g, '<br/>') }} /> */}
      </>
    )
  );
};
