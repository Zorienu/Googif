import { useState, useEffect, useContext } from "react";

import GifsContext from "context/GifContext";
import getGifById from "services/getGifById";

const useSingleGif = ({ id }) => {
  const { gifs } = useContext(GifsContext);
  const cachedGif = gifs.find((singleGif) => singleGif.id === id);

  const [gif, setGif] = useState(cachedGif);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!gif) {
      setIsLoading(true);

      getGifById(id)
        .then((res) => {
          setGif(res);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
          setIsError(true);
        });
    }
  }, [gif, id]);

  return { gif, isLoading, isError };
};

export default useSingleGif;
