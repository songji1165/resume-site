import { useRef, useEffect, useCallback } from 'react';

const useScrollFadeIn = (direction = 'up', duration = 1, delay = 0) => {
    const element = useRef();

    const handleDirection = (name) => {
        //transform : translate3d(x, y, z)
        switch (name) {
          case 'up':
            return 'translate3d(0, 50%, 0)';
          case 'down':
            return 'translate3d(0, -50%, 0)';
          case 'left':
            return 'translate3d(50%, 0, 0)';
          case 'right':
            return 'translate3d(-50%, 0, 0)';
          default:
            return;
        }
      };

    const handleScroll = useCallback(([entry]) => {
        const { current } = element;
        // const currentTranslate = current.style.transform;
        //현재 교차되고 있는지 여부 (0: 안 보임, 1: 완전 다 보임)
        if (entry.isIntersecting) {
            current.style.transitionProperty = 'all';
            current.style.transitionDuration = `${duration}s`;
            current.style.transitionTimingFunction = 'ease-out';
            current.style.transitionDelay = `${delay}s`;
            current.style.opacity = 1;
            current.style.transform = 'translate3d(0, 0, 0)';
        } 

      },
      [delay, duration]);
      
      useEffect(() => {
        let observer;
        const { current } = element;
      
        if (current) {  
           // threshold : 타겟의 교차되는 지점의 점수를 지정 => isIntersecting property 의 true, false 반환                                                             
          observer = new IntersectionObserver(handleScroll, { threshold: 0.5 });
          observer.observe(current);
      
          return () => observer && observer.disconnect();
        }
      }, [handleScroll]);

    return {
        ref : element,
        style : {
            opacity: 0, 
            transform: handleDirection(direction)
        }

    }
} 

export default useScrollFadeIn;