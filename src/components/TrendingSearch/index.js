import { useEffect, useState, useRef } from "react";
import { Link } from "wouter";
import getTrendingTerms from "services/getTrendingTerms";

import classes from "./TrendingSearch.module.css";
import useNearScreen from "hooks/useNearScreen";

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
  const { show, elementRef } = useNearScreen();

  return (
    <div className={classes.links} ref={elementRef}>
      {show && <TrendingSearch />}
    </div>
  );
};
export default LazyTrending;
