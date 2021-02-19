import React, { useState } from "react";

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

// le pasamos el componente que queremos memorizar basándose en las props
// React.memo es un componente de orden superior (una función que se le pasa un componente y que devuelve otro componente)
// ahora se evita que se renderize si sus props no han cambiado, haciendo una comparación entre las props viejas y las nuevas
export default React.memo(SearchForm);
