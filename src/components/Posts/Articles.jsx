import { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

import { Button } from "../Button";

import { PostsItem } from "./PostsItem";
import { PostsLoader } from "./PostsLoader";
import { PostsSearch } from "./PostsSearch";
import { PostsError } from "./PostsError";
import { getArticlesSearvice } from "../../services/articlesService";

import { fetchStatus } from "../../constants/fetch-status";
import { useFetch } from "../../hooks/useFetch";

const POSTS_LIMIT_PER_PAGE = 9;

export const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [status, setStatus] = useState(fetchStatus.Idle);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  const getArticles = useCallback(() => getArticlesSearvice({ page, query }), [page, query]);

  useFetch(getArticles, page, query)

  const total = useRef(0);

  const fetchArticles = useCallback(async () => {
    setStatus(fetchStatus.Loading);
    try {
      const data = await getArticlesSearvice({ page, query });
      setArticles((prev) => [...prev, ...data.articles]);
      setStatus(fetchStatus.Success);
      total.current = data.totalResults;
    } catch (error) {
      setStatus(fetchStatus.Error);
      toast.error(error.message);
    }
  }, [page, query]);

  useEffect(() => {
    fetchArticles();
  }, [page, query, fetchArticles]);

  if (status === fetchStatus.Error) {
    return <PostsError />;
  }

  const handleChangeQuery = (value) => {
    setQuery(value);
    setPage(1);
    setArticles([]);
  };

  const handleChangePage = () => {
    setPage((prev) => prev + 1);
  };

  const canLoadMore = Math.ceil(total.current / POSTS_LIMIT_PER_PAGE) > page;
  return (
    <>
      <PostsSearch onSubmit={handleChangeQuery} />
      {(status === fetchStatus.Loading || status === fetchStatus.Idle) && (
        <PostsLoader />
      )}
      <div className="container-fluid g-0 pb-5 mb-5">
        <div className="row">
          {articles.map((article) => (
            <PostsItem key={article.url} post={article} />
          ))}
        </div>
      </div>

      <div className="pagination">
        <div className="btn-group my-2 mx-auto btn-group-lg">
          {canLoadMore && <Button onClick={handleChangePage}>Load more</Button>}
        </div>
      </div>
    </>
  );
};

// export class Posts extends Component {
//   state = {
//     posts: [],
//     status: fetchStatus.Idle,
//     page: 1,
//     search: "",
//     // isLoading: false,
//     // isError: false,
//   };

//   total = null

//   async componentDidMount() {
//     // this.setState({ isLoading: true });
//     this.setState({ status: fetchStatus.Loading });
//     try {
//       const posts = await getPosts();
//       this.total = posts.totalResults
//       this.setState({ posts: posts.articles, status: fetchStatus.Success });
//     } catch (error) {
//       // this.setState({ isError: true });
//       this.setState({ status: fetchStatus.Error });
//       toast.error(error.message);
//     }
//     //finally {
//     //   this.setState({ isLoading: false });
//     // }
//   }

//   async componentDidUpdate(_, prevState) {
//     const {page, search} = this.state
//     if (prevState.page !== page || prevState.search !== search) {
//       this.setState({ status: fetchStatus.Loading });
//       try {
//         const posts = await getPosts(search, page);
//         this.setState((prev) => ({
//           posts: page === 1 ? posts.articles : [...prev.posts, ...posts.articles],
//           // posts: [...prev.posts, ...posts.articles],
//           status: fetchStatus.Success,
//         }));
//       } catch (error) {
//         // this.setState({ isError: true });
//         this.setState({ status: fetchStatus.Error });
//         toast.error(error.message);
//       }
//     }
//   }

//   handleChangeSearch = async (search) => {
//     // this.setState({ search, page: 1, posts: [] });
//     this.setState({ search, page: 1 });

//     // this.setState({ status: fetchStatus.Loading });
//     // try {
//     //   const posts = await getPosts(search);
//     //   this.setState({ posts: posts.articles, status: fetchStatus.Success });
//     // } catch (error) {
//     //   // this.setState({ isError: true });
//     //   this.setState({ status: fetchStatus.Error });
//     //   toast.error(error.message);
//     // }
//   };

//   handleChangePage = () => {
//     this.setState((prev) => ({ page: prev.page + 1 }));
//   };

//   render() {
//     const { posts, status, page } = this.state;

//     if (status === fetchStatus.Error) {
//       return <PostsError />;
//     }

//     const canLoadMore = Math.ceil(this.total / POSTS_LIMIT_PER_PAGE) > page

//     return (
//       <>
//         <PostsSearch onSubmit={this.handleChangeSearch} />
//         {(status === fetchStatus.Loading || status === fetchStatus.Idle) && (
//           <PostsLoader />
//         )}
//         <div className="container-fluid g-0 pb-5 mb-5">
//           <div className="row">
//             {posts.map((post) => (
//               <PostsItem key={post.url} post={post} />
//             ))}
//           </div>
//         </div>

//         <div className="pagination">
//           <div className="btn-group my-2 mx-auto btn-group-lg">
//             {/* {posts.map((_, index) => (
//               <Button key={index}>{index + 1}</Button>
//             ))} */}
//             {canLoadMore && <Button onClick={this.handleChangePage}>Load more</Button>}
//           </div>
//         </div>
//       </>
//     );
//   }
// }
