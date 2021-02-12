import { Link } from "wouter";
import classes from "./Logo.module.css";

const Logo = () => {
  const url = "https://media.giphy.com/media/ayMW3eqvuP00o/giphy.gif";

  return (
    <Link to="/" className={classes.logo}>
      <img className={classes.img} src={url} alt="logo" />
      <h1 className={classes.title}>Googif</h1>
    </Link>
  );
};

export default Logo;
