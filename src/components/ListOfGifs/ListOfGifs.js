import { useEffect, useState } from "react";
import getGifs from "../../services/getGifs";
import Gif from "../Gif/Gif";

const ListOfGifs = ({ keyword }) => {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    getGifs({ keyword }).then((res) => setGifs(res));
    console.log("aaa");
  }, [keyword]);

  console.log(keyword);
  return (
    <>
      {gifs.map(({ id, title, url }) => (
        <Gif key={id} title={title} url={url} />
      ))}
    </>
  );
};

export default ListOfGifs;
