import { useLocation } from "wouter";
import useGifs from "hooks/useGifs";
import Gifs from "components/Gifs/Gifs";
import TrendingSearch from "components/TrendingSearch";
import SearchForm from "components/SearchForm/SearchForm";

const Home = () => {
  const [location, setLocation] = useLocation();

  const { gifs } = useGifs();

  const handleSubmit = ({ keyword }) => {
    setLocation(`/search/${keyword}`);
  };

  return (
    <>
      <SearchForm onSubmit={handleSubmit} />
      <h4>Ultima búsqueda</h4>
      <Gifs gifs={gifs} />
      <h4>Gifs populares</h4>
      <TrendingSearch />
    </>
  );
};

export default Home;
