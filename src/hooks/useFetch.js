import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { fetchStatus } from "../constants/fetch-status";

export const useFetch = (callback, isInitialRequest) => {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState(fetchStatus.Idle);

  useEffect(() => {
    const fetchArticles = async () => {
      setStatus(fetchStatus.Loading);
      try {
        const data = await callback();
        setData((prev) => (isInitialRequest ? data : [...prev, ...data]));
        setStatus(fetchStatus.Success);
      } catch (error) {
        toast.error(error.message);
        setStatus(fetchStatus.Error);
      }
    };
    fetchArticles();
  }, [callback, isInitialRequest]);

  return { data, status };
};
