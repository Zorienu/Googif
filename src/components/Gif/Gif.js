import { Link } from "wouter";
import classes from "./Gif.module.css";

const Gif = ({ id, url, title, date }) => {
  return (
    <Link to={`/gifinfo/${id}`} className={classes.gif}>
      <p className={classes.title}>{title}</p>
      <img className={classes.img} src={url} alt="gif" />
      {date && <i>{date}</i>}
    </Link>
  );
};

export default Gif;
