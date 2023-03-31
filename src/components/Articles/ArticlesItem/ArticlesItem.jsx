import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

import { cutString } from "../../../helpers/cut-string";
import image from "./default_image.png";

export const ArticlesItem = ({ article }) => {
  const { isAuth } = useAuth();
  const location = useLocation();
  console.log(location);
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
              <button type="button" className="btn btn-danger">
                Delete article
              </button>

              <Link
                to={article.title}
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
