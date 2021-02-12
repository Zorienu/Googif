import { Link } from "wouter";
import classes from "./Gif.module.css";

const Gif = ({ id, url, title, date }) => {
  return (
    <Link to={`/gifinfo/${id}`} className={classes.gif}>
      <h4>{title}</h4>
      <img src={url} alt="gif" />
      {date && <i>{date}</i>}
    </Link>
  );
};

export default Gif;
