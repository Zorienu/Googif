import { useState, useEffect } from "react";
import getGifs from "../services/getGifs";

const INITIAL_PAGE = 0;

const useGifs = (keyword = localStorage.getItem("lastKeyword")) => {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false); // for first fetch
  const [loadingNextPage, setLoadingNextPage] = useState(false);
  const [page, setPage] = useState(INITIAL_PAGE);

  useEffect(() => {
    setLoading(true);
    getGifs({ keyword }).then((res) => {
      setGifs(res);
      setLoading(false);
    });
    if (keyword) localStorage.setItem("lastKeyword", keyword);
  }, [keyword]);

  useEffect(() => {
    setLoadingNextPage(true);

    if (page !== INITIAL_PAGE) {
      getGifs({ keyword, page }).then((nextGifs) => {
        setGifs((prevGifs) => prevGifs.concat(nextGifs));
        setLoadingNextPage(false);
      });
    }
  }, [page]);

  return { gifs, loading, loadingNextPage, setPage };
};

export default useGifs;
