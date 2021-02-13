import { useState } from "react";
import { Link, useLocation } from "wouter";
import useGifs from "hooks/useGifs";
import Gifs from "components/Gifs/Gifs";
import TrendingSearch from "components/TrendingSearch";

const Home = () => {
  const [location, setLocation] = useLocation();
  const tags = ["ferrari", "subaru", "anime", "japon", "korea", "otter"];
  const [keyword, setKeyword] = useState("");

  const { gifs } = useGifs();

  const handleSubmit = (e) => setLocation(`/search/${keyword}`);

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="keyword"
          placeholder="Search Gifs here"
          onChange={handleChange}
        />
      </form>
      <h4>Ultima búsqueda</h4>
      <Gifs gifs={gifs} />
      <h4>Gifs populares</h4>
      <TrendingSearch />
    </>
  );
};

export default Home;
