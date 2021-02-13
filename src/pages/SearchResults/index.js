import Gifs from "../../components/Gifs/Gifs";
import useGifs from "../../hooks/useGifs";

const SearchResults = ({ params }) => {
  const { keyword } = params;
  const { gifs, loading } = useGifs(keyword);

  return loading ? <div>Loading...</div> : <Gifs gifs={gifs} />;
};

export default SearchResults;
