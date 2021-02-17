import { useCallback } from "react";
import { useLocation } from "wouter";
import useGifs from "hooks/useGifs";
import Gifs from "components/Gifs/Gifs";
import TrendingSearch from "components/TrendingSearch";
import SearchForm from "components/SearchForm/SearchForm";

const Home = () => {
  const [location, setLocation] = useLocation();

  const { gifs } = useGifs();

  // esto se vuelve a crear con cada renderizado
  // por lo cual SearchForm se vuelve a renderizar
  // para solucionarlo usamos useCallback
  const handleSubmit = useCallback(
    ({ keyword }) => {
      setLocation(`/search/${keyword}`);
    },
    [setLocation]
  );

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
