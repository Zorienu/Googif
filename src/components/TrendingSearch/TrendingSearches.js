import { useEffect, useState } from "react";
import { Link } from "wouter";
import getTrendingTerms from "services/getTrendingTerms";

import classes from "./TrendingSearch.module.css";

const TrendingSearches = () => {
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

export default TrendingSearches;
