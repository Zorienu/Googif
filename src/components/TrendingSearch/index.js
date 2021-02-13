import { useEffect, useState, useRef } from "react";
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
  const trendingEl = useRef(null); // este valor se va a mantener inalterado entre renders
  // y cuando se cambia el valor no renderiza el componente

  useEffect(() => {
    const onIntersection = (entries, observer) => {
      if (entries[0].isIntersecting) {
        setShow(true);
        observer.disconnect();
      }
    };

    const observer = new IntersectionObserver(onIntersection, {
      rootMargin: "100px",
    }); // executes the callback when there is a distance of 100px

    observer.observe(trendingEl.current);

    return () => observer.disconnect(); // execute when the component is not used anymore
  });

  return (
    <div className={classes.links} ref={trendingEl}>
      {show && <TrendingSearch ref={trendingEl} />}
    </div>
  );
};
export default LazyTrending;
