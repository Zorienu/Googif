import Gifs from "components/Gifs/Gifs";
import useGifs from "hooks/useGifs";

const SearchResults = ({ params }) => {
  const { keyword } = params;
  const { gifs, loading, setPage } = useGifs(keyword);

  const handleNextPage = () => setPage((prevPage) => prevPage + 1);

  return loading ? (
    <div>Loading...</div>
  ) : (
    <>
      <h4>{decodeURI(keyword)}</h4>
      <Gifs gifs={gifs} />
      <button onClick={handleNextPage}>Get next page</button>
    </>
  );
};

export default SearchResults;
