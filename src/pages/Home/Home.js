import { useState } from "react";
import { Link, useLocation } from "wouter";

const Home = () => {
  const [location, setLocation] = useLocation();
  const tags = ["ferrari", "subaru", "anime", "japon", "korea", "otter"];
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (e) => setLocation(`/search/${keyword}`);

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };
  console.log(keyword);
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
      {tags.map((tag, i) => (
        <Link key={i} to={`/search/${tag}`}>
          Gif de {tag}
        </Link>
      ))}
    </>
  );
};

export default Home;
