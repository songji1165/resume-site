import { useRef, useEffect, useCallback } from "react";

const useScrollGraph = (count = 0) => {
  const element = useRef();

  const handleScroll = useCallback(
    ([entry]) => {
      if (entry.isIntersecting) {
        element.current.style.width = count + "%";
      }
    },
    [count]
  );

  useEffect(() => {
    let observer;
    const { current } = element;

    if (current) {
      observer = new IntersectionObserver(handleScroll, { threshold: 0.6 });
      observer.observe(current);

      return () => observer && observer.disconnect();
    }
  }, [handleScroll]);

  return {
    ref: element,
    style: {
      width: 0,
    },
  };
};

export default useScrollGraph;
