import { Link } from "wouter";

const Home = () => {
  const tags = ["ferrari", "subaru", "anime", "japon", "korea", "otter"];

  return (
    <>
      {tags.map((tag) => (
        <Link to={`/search/${tag}`}>Gif de {tag}</Link>
      ))}
    </>
  );
};

export default Home;
