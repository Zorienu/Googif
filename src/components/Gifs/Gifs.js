import Gif from "components/Gif/Gif";

import classes from "./Gifs.module.css";

const Gifs = ({ gifs }) => {
  return (
    <div className={classes.gifs}>
      {gifs.map(({ id, title, url }) => (
        <Gif key={id} id={id} title={title} url={url} />
      ))}
    </div>
  );
};

export default Gifs;
