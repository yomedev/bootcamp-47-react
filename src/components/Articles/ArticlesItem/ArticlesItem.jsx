import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

import { cutString } from "../../../helpers/cut-string";
import image from "./default_image.png";
import { useDeleteArticleMutation } from "../../../redux/articlesRtk/articlesApi";

// import { useDispatch } from "react-redux";
// import { deleteArticleThunk } from "../../../redux/articles/articlesThunk";

export const ArticlesItem = ({ article }) => {
  const { isAuth } = useAuth();
  const location = useLocation();

  const [deleteArticle] = useDeleteArticleMutation()


  // const dispatch = useDispatch()

  const handleDelete = () => {
    deleteArticle(article.id)
    // dispatch(deleteArticleThunk(article.id))
  }

  return (
    <div className="col-12 col-sm-6 col-lg-4 mb-4">
      <div className="card">
        <img
          height="250px"
          alt={article.title}
          src={article.urlToImage || image}
          className="card-img-top"
          style={{ objectFit: "cover" }}
        />

        <div className="card-body">
          <h5 className="card-title">{article.title}</h5>

          <p className="card-text">{cutString(article.content, 60)}</p>

          <ul className="list-group list-group-flush mb-4">
            <li className="list-group-item">{article.author}</li>
            <li className="list-group-item">
              Created: {formatDistanceToNow(new Date(article.publishedAt))}
            </li>
          </ul>

          {isAuth && (
            <div className="d-flex">
              <button type="button" className="btn btn-danger" onClick={handleDelete}>
                Delete article
              </button>

              <Link
                to={article.id}
                className="btn btn-primary ms-3"
                state={{ from: location }}
              >
                Read article
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
