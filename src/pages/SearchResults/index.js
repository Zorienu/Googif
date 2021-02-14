import { useEffect, useCallback } from "react";
import debounce from "just-debounce-it";

import Gifs from "components/Gifs/Gifs";

import useGifs from "hooks/useGifs";
import useNearScreen from "hooks/useNearScreen";

const SearchResults = ({ params }) => {
  const { keyword } = params;
  const { gifs, loading, setPage } = useGifs(keyword);
  const { show, elementRef } = useNearScreen({ once: false });

  const debouncedHandleNextPage = useCallback(
    debounce(() => handleNextPage(), 200),
    []
  );

  useEffect(() => {
    console.log(show);
    if (show) debouncedHandleNextPage();
  }, [show]);

  const handleNextPage = () => setPage((prevPage) => prevPage + 1);

  return loading ? (
    <div>Loading...</div>
  ) : (
    <>
      <h4>{decodeURI(keyword)}</h4>
      <Gifs gifs={gifs} />
      <div ref={elementRef}>cargar mas gifs</div>
      <button onClick={handleNextPage}>Get next page</button>
    </>
  );
};

export default SearchResults;
