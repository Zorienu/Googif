import { useState, useEffect, useContext } from "react";
import getGifs from "../services/getGifs";
import GifsContext from "../context/GifContext";

const INITIAL_PAGE = 0;

const useGifs = (keyword = localStorage.getItem("lastKeyword")) => {
  const { gifs, setGifs } = useContext(GifsContext);
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
  }, [keyword, setGifs]);

  useEffect(() => {
    if (page !== INITIAL_PAGE) {
      setLoadingNextPage(true);

      getGifs({ keyword, page }).then((nextGifs) => {
        setGifs((prevGifs) => prevGifs.concat(nextGifs));
        setLoadingNextPage(false);
      });
    }
  }, [page, keyword, setGifs]);

  return { gifs, loading, loadingNextPage, setPage };
};

export default useGifs;
