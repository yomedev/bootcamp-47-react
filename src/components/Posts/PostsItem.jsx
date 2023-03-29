import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { useAuth } from "../../context/AuthContext";

import { cutString } from "../../helpers/cut-string";
import image from "./default_image.png";

export const PostsItem = ({ post }) => {
  const {isAuth} = useAuth()
  return (
    <div className="col-12 col-xl-6 col-xxl-4 mb-4">
      <div className="card">
        <img
          height="250px"
          alt={post.title}
          src={post?.urlToImage || image}
          className="card-img-top"
          style={{ objectFit: "cover" }}
        />

        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>

          <p className="card-text">{cutString(post.content, 60)}</p>

          <ul className="list-group list-group-flush mb-4">
            <li className="list-group-item">{post.author}</li>
            <li className="list-group-item">
              Created: {formatDistanceToNow(new Date(post.publishedAt))}
            </li>
          </ul>

          {isAuth && (
            <div className="d-flex">
              <button type="button" className="btn btn-danger">
                Delete post
              </button>

              <a href={`/posts/${post.id}`} className="btn btn-primary ms-3">
                Read post
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
