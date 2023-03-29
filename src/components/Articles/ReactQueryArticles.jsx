import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "react-toastify";

import { getArticlesService } from "../../services/articlesService";
import { Button } from "../Button";
import { ArticlesError } from "./ArticlesError";
import { ArticlesItem } from "./ArticlesItem";
import { ArticlesLoader } from "./ArticlesLoader";
import { ArticlesSearch } from "./ArticlesSearch";

export const ReactQueryArticles = () => {
  const [query, setQuery] = useState("");
  // const [page, setPage] = useState(1);

  // const {
  //   data: articles,
  //   isError,
  //   isFetching,
  //   isSuccess,
  // } = useQuery({
  //   queryKey: ["articles", query, page],
  //   queryFn: () => getArticlesService({query, page}),
  //   enabled: !!query,
  //   select: (data) => data.articles,
  //   retry: false,
  //   onError: (error) => {
  //     toast.error(error.message);
  //   },
  // });

  const {
    data: articles,
    fetchNextPage,
    isError,
    isFetching,
    isSuccess,
  } = useInfiniteQuery({
    queryKey: ["articles", query],
    queryFn: ({ pageParam = 1 }) => getArticlesService({ page: pageParam, query }),
    getNextPageParam: (_, allPages) => allPages.length + 1,
    select: (data) =>
      data.pages.reduce((acc, item) => acc.concat(item.articles), []),
    onError: (error) => {
      toast.error(error.message);
    },
  });

  // console.log(articles);

  const handleChangeQuery = (value) => {
    setQuery(value);
    // setPage(1);
  };

  // const handleChangePage = () => {
  //   setPage((prev) => prev + 1);
  // };

  if (isError) {
    return <ArticlesError />;
  }

  return (
    <>
      <ArticlesSearch onSubmit={handleChangeQuery} />

      <div className="container-fluid g-0">
        <div className="row">
          {articles?.map((article) => (
            <ArticlesItem key={article.url} article={article} />
          ))}
        </div>
      </div>

      {isFetching && <ArticlesLoader />}
      {isSuccess && (
        <div className="d-flex justify-content-center">
          <Button onClick={() => fetchNextPage()}>Load more</Button>
        </div>
      )}
    </>
  );
};
