import { useEffect, useState } from "react";
import {
  Link,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";

import { toast } from "react-toastify";

import { Loader } from "../../components/Loader";
import { getSinglePostService } from "../../services/postsService";
import { useSelector } from "react-redux";
import { fetchStatus } from "../../constants/fetch-status";

export const SinglearticlePage = () => {
  const { articleId } = useParams();

  const status = useSelector((state) => state.auth.status);

  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const location = useLocation();

  const from = location.state?.from;
  console.log(location);

  useEffect(() => {
    setIsLoading(true);

    getSinglePostService(articleId)
      .then(setArticle)
      .catch(() => {
        toast.error("Something went wrong!");
      })
      .finally(() => setIsLoading(false));
  }, [articleId]);


  const handleNavigate = () => {
    if (status === fetchStatus.Success) {
      toast.success('You successfully added comment!')
      return
      // navigate("newest", { state: location.state });
    }
    toast.error('You are not authorized!')
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    article && (
      <>
        <Link to={from ?? "/articles"} className="btn btn-primary my-3">
          Back
        </Link>
        <img
          src={article.preview_image}
          alt={article.title}
          className="img-fluid mb-4"
          style={{ maxHeight: "600px", width: "100%", objectFit: "cover" }}
        />
        <h1 className="mb-5">{article.title}</h1>

        <div>{article.content}</div>

        <button onClick={handleNavigate} className="btn btn-primary my-3">
          Add comment
        </button>

        <Outlet />

        {/* <div dangerouslySetInnerHTML={{ __html: article.content.replace(/\n/g, '<br/>') }} /> */}
      </>
    )
  );
};
