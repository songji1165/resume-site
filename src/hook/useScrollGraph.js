import { useRef, useEffect, useCallback } from 'react';

const useScrollGraph = (count = 0) => {
  const element = useRef();

      const handleScroll = useCallback(([entry]) => {
          // const currentTranslate = current.style.transform;
          //현재 교차되고 있는지 여부 (0: 안 보임, 1: 완전 다 보임)
          if (entry.isIntersecting) {
            console.log("qldhk", element.current.children[1], count)
              // setCount(count);
              // element.current.style.width = count;
              element.current.style.width = count+"%";
             
          } 
  
        },
        [count]);

      useEffect(() => {
          /*
          // count가 0이되면 끝낸다.
          if (count === 80) return;
      
          // intervalId를 보관한다.
          const intervalId = setInterval(() => {
            setCount(count + 1);
          }, 0.1);
      
          // 함수 종료시에 인터벌을 클리어한다.
          return () => clearInterval(intervalId);
          // count에 변동이 있을 때마다 한다.
          */

          let observer;
          const { current } = element;
        
          if (current) {  
             // threshold : 타겟의 교차되는 지점의 점수를 지정 => isIntersecting property 의 true, false 반환                                                             
            observer = new IntersectionObserver(handleScroll, { threshold: 0.6 });
            observer.observe(current);
        
            return () => observer && observer.disconnect();
          }
        }, [handleScroll]);

    return {
        ref : element,
        style : {
          width: 0
        }
    }
} 

export default useScrollGraph;