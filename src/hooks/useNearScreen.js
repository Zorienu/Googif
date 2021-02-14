import { useState, useEffect, useRef } from "react";

const useNearScreen = (distance = "100px") => {
  const [show, setShow] = useState(false);
  const elementRef = useRef(null); // este valor se va a mantener inalterado entre renders
  // y cuando se cambia el valor no renderiza el componente

  useEffect(() => {
    const onIntersection = (entries, observer) => {
      const el = entries[0];
      if (el.isIntersecting) {
        setShow(true);
        //observer.disconnect(); // stop watching all of its target elements for visibility changes
        observer.unobserve(elementRef.current); // instructs IntersectionObserver to stop observing the specified target element
      }
    };

    const observer = new IntersectionObserver(onIntersection, {
      rootMargin: distance,
    }); // executes the callback when there is a distance of 100px

    observer.observe(elementRef.current);

    return () => observer.disconnect(); // execute when the component is not used anymore
  });

  return { show, elementRef };
};

export default useNearScreen;
