import { useState } from "react";

const SearchForm = ({ onSubmit }) => {
  const [keyword, setKeyword] = useState("");

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ keyword });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="keyword"
        placeholder="Search Gifs here"
        onChange={handleChange}
      />
    </form>
  );
};

export default SearchForm;
