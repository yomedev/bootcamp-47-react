import { Component } from "react";
import { toast } from "react-toastify";

import { Button } from "../Button";

import { PostsItem } from "./PostsItem";
import { PostsLoader } from "./PostsLoader";
import { PostsSearch } from "./PostsSearch";
import { PostsError } from "./PostsError";
import { getPosts } from "../../services/postsService";

const fetchStatus = {
  Idle: "idle",
  Loading: "loading",
  Success: "success",
  Error: "error",
};

const POSTS_LIMIT_PER_PAGE = 9

export class Posts extends Component {
  state = {
    posts: [],
    status: fetchStatus.Idle,
    page: 1,
    search: "",
    // isLoading: false,
    // isError: false,
  };

  total = null

  async componentDidMount() {
    // this.setState({ isLoading: true });
    this.setState({ status: fetchStatus.Loading });
    try {
      const posts = await getPosts();
      this.total = posts.totalResults
      this.setState({ posts: posts.articles, status: fetchStatus.Success });
    } catch (error) {
      // this.setState({ isError: true });
      this.setState({ status: fetchStatus.Error });
      toast.error(error.message);
    }
    //finally {
    //   this.setState({ isLoading: false });
    // }
  }

  async componentDidUpdate(_, prevState) {
    const {page, search} = this.state
    if (prevState.page !== page || prevState.search !== search) {
      this.setState({ status: fetchStatus.Loading });
      try {
        const posts = await getPosts(search, page);
        this.setState((prev) => ({
          posts: page === 1 ? posts.articles : [...prev.posts, ...posts.articles],
          // posts: [...prev.posts, ...posts.articles],
          status: fetchStatus.Success,
        }));
      } catch (error) {
        // this.setState({ isError: true });
        this.setState({ status: fetchStatus.Error });
        toast.error(error.message);
      }
    }
  }

  handleChangeSearch = async (search) => {
    // this.setState({ search, page: 1, posts: [] });
    this.setState({ search, page: 1 });

    // this.setState({ status: fetchStatus.Loading });
    // try {
    //   const posts = await getPosts(search);
    //   this.setState({ posts: posts.articles, status: fetchStatus.Success });
    // } catch (error) {
    //   // this.setState({ isError: true });
    //   this.setState({ status: fetchStatus.Error });
    //   toast.error(error.message);
    // }
  };

  handleChangePage = () => {
    this.setState((prev) => ({ page: prev.page + 1 }));
  };

  

  render() {
    const { posts, status, page } = this.state;

    if (status === fetchStatus.Error) {
      return <PostsError />;
    }

    const canLoadMore = Math.ceil(this.total / POSTS_LIMIT_PER_PAGE) > page

    return (
      <>
        <PostsSearch onSubmit={this.handleChangeSearch} />
        {(status === fetchStatus.Loading || status === fetchStatus.Idle) && (
          <PostsLoader />
        )}
        <div className="container-fluid g-0 pb-5 mb-5">
          <div className="row">
            {posts.map((post) => (
              <PostsItem key={post.url} post={post} />
            ))}
          </div>
        </div>

        <div className="pagination">
          <div className="btn-group my-2 mx-auto btn-group-lg">
            {/* {posts.map((_, index) => (
              <Button key={index}>{index + 1}</Button>
            ))} */}
            {canLoadMore && <Button onClick={this.handleChangePage}>Load more</Button>}
          </div>
        </div>
      </>
    );
  }
}
