import { useEffect, useState } from "react";

import getGifs from "../../services/getGifs";
import Gif from "../../components/Gif/Gif";

import classes from "./index.module.css";

const SearchResults = ({ params }) => {
  const { keyword } = params;
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    getGifs({ keyword }).then((res) => setGifs(res));
  }, [keyword]);

  return (
    <div className={classes.gifs}>
      {gifs.map(({ id, title, url }) => (
        <Gif key={id} id={id} title={title} url={url} />
      ))}
    </div>
  );
};

export default SearchResults;
