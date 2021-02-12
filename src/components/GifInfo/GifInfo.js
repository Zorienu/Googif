import { useEffect, useState } from "react";

import getGifById from "../../services/getGifById";
import Gif from "../Gif/Gif";

const GifInfo = ({ params }) => {
  const { id } = params;
  const [gif, setGif] = useState(null);

  useEffect(() => getGifById(id).then((res) => setGif(res)), [id]);
  console.log(gif);

  return !gif ? (
    <h2>Loading...</h2>
  ) : (
    <Gif id={id} title={gif.title} url={gif.url} date={gif.date} />
  );
};

export default GifInfo;
