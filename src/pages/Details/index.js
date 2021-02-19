import classes from "./Details.module.css";

import Gif from "components/Gif/Gif";
import Loading from "components/Loading";

import useSingleGif from "hooks/useSingleGif";
import { Redirect } from "wouter";

const Details = ({ params }) => {
  const { id } = params;
  // obtain gif from cache or fetch it
  const { gif, isLoading, isError } = useSingleGif({ id });

  if (isLoading) return <Loading />;
  if (isError) return <Redirect to="/404" />;
  if (!gif) return null;

  return (
    <div className={classes.gifContainer}>
      <Gif id={id} title={gif.title} url={gif.url} />
    </div>
  );
};

export default Details;
