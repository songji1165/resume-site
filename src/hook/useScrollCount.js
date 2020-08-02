import { useRef, useEffect, useCallback } from "react";

const useScrollCount = (end, start = 0, delay = 0) => {
  console.log("++++++", end);
  const element = useRef();
  const observer = useRef(null);
  const stepTime =100 / (end /2);
  console.log("STYEP",stepTime)

  const handleScroll = useCallback(
    ([entry]) => {
      let currentNumber = start;

      const counter = setInterval(() => {
        currentNumber += 1;

        element.current.innerHTML = currentNumber + "%";

        if (currentNumber == end) {
          clearInterval(counter);
          observer.current.disconnect(element.current);
        }
      }, 1);
    },
    [start, end, stepTime, element]
  );

  useEffect(() => {
    if (element.current) {
      // threshold : 타겟의 교차되는 지점의 점수를 지정 => isIntersecting property 의 true, false 반환
      observer.current = new IntersectionObserver(handleScroll, {
        threshold: 0.6,
      });
      observer.current.observe(element.current);

      return () => observer && observer.disconnect();
    }
  }, [handleScroll]);

  return {
    ref: element,
  };
};

export default useScrollCount;
