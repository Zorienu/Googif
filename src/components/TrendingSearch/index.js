import React, { Suspense } from "react";

import classes from "./TrendingSearch.module.css";
import useNearScreen from "hooks/useNearScreen";

// importing TrendingSearches just when we need it (dinamically imported)
const TrendingSearches = React.lazy(() => import("./TrendingSearches.js"));

const LazyTrending = () => {
  const { show, elementRef } = useNearScreen({});

  // Suspense component render promises, and render another thing while the promise is resolving
  // inside fallback goes what we want to show while it's loading
  return (
    <Suspense fallback={"Cargando..."}>
      <div className={classes.links} ref={elementRef}>
        {show && <TrendingSearches />}
      </div>
    </Suspense>
  );
};

export default LazyTrending;
