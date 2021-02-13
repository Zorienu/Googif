import { useEffect, useState } from "react";
import { Link } from "wouter";
import getTrendingTerms from "services/getTrendingTerms";

import classes from "./TrendingSearch.module.css";

const TrendingSearch = () => {
  const [trends, setTrends] = useState(null);

  useEffect(() => {
    getTrendingTerms().then(setTrends);
  }, []);

  return (
    <>
      {!trends ? (
        <div>Loading...</div>
      ) : (
        trends.map((trend, i) => (
          <Link className={classes.link} key={i} to={`/search/${trend}`}>
            {trend}
          </Link>
        ))
      )}
    </>
  );
};

const LazyTrending = () => {
  const [show, setShow] = useState(false);

  const onIntersection = (entries) => {
    entries[0].isIntersecting && setShow(true);
    console.log(entries[0].isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(onIntersection, {
      rootMargin: "100px",
    });

    observer.observe(document.getElementById("lazy_trending"));
  });

  return (
    <div className={classes.links} id="lazy_trending">
      {show && <TrendingSearch />}
    </div>
  );
};
export default LazyTrending;
