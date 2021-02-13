import { useState, useEffect } from "react";
import getGifs from "../services/getGifs";

const useGifs = (keyword = localStorage.getItem("lastKeyword")) => {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getGifs({ keyword }).then((res) => setGifs(res));
    if (keyword) localStorage.setItem("lastKeyword", keyword);
    setLoading(false);
  }, [keyword]);

  return { gifs, loading };
};

export default useGifs;
