import React, { useRef, useEffect, useCallback } from "react";
import { FcBriefcase, FcNext } from "react-icons/fc";

import styled from "styled-components";
import Box from "../styles/articleCss";
// import useScrollFadeIn from "../hook/useScrollFadeIn";

const FONTSIZE = {
  smaller: "0.6rem",
  small: "0.8rem",
  normal: "1rem",
  large: "1.2rem",
  larger: "1.4rem",
};

const S = {
  //경력 div
  CareerWrap: styled.div`
    margin: 15px auto;
    padding: 15px 5px 5px;
    border-radius: 5px;
    box-shadow: 3px 5px 15px #888888;
    transition: 1s;
    opacity: 0,
    transform: translate3d(0, 50%, 0);
    text-align: center;
  `,
  DetailWrap: styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: left;

    @media (max-width: 860px) {
      flex-direction: column;
    }
  `,
  BriefDiv: styled.div`
    flex: 0 0 25%;
    max-width: 25%;
    @media (max-width: 860px) {
      flex: 0 0 100%;
      max-width: 100%;
    }
  `,
  ProjectDiv: styled.div`
    flex: 0 0 75%;
    max-width: 75%;
    @media (max-width: 860px) {
      flex: 0 0 100%;
      max-width: 100%;
      padding: 10px;
    }
  `,
  Dt: styled.dt`
    font-weight: 900;
    font-size: ${(props) =>
      props.size ? FONTSIZE[props.size] : FONTSIZE.normal};
  `,
  Dd: styled.dd`
    padding: 5px 10px;
  `,
  Li: styled.li`
    padding: 3px 0;
    color: ${(props) => (props.color ? props.color : "#333")};
    font-weight: ${(props) => (props.bold ? 600 : "normal")};
    font-size: ${(props) =>
      props.size ? FONTSIZE[props.size] : FONTSIZE.normal};
  `,
  Button: styled.button`
    margin: 5px 2px;
    padding: 2px 3px;
    border-radius: 3px;
    color: ${(props) => (props.color ? props.color : "#fff")};
    background: ${(props) => (props.button ? props.button : "green")};
    font-size: ${(props) =>
      props.size ? FONTSIZE[props.size] : FONTSIZE.normal};
  `,
};

function Info({ careers }) {
//   console.log("경력:", careers);
  const element = useRef();
//   console.log("****element", element);

  //useCallback : 이미 저장되어있는 data를 다시 불러옴 (메모리 낭지 방지)
  const onScroll = useCallback(
    ([entry]) => {
      const { current } = element;
    //   console.log("####", entry);
    //   console.log("####", entry.isIntersecting);
      if (entry.isIntersecting) {
        current.style.transitionProperty = "all";
        // current.style.transitionDration = `${duration}s`;
        current.style.transitionTimingFunction = "cubic-bezier(0, 0, 0.2, 1)";
        // current.style.transitionDelay = `${delay}s`;
        current.style.opacity = 1;
        current.style.transform = "translate3d(0,0,0)";
      }
    },
    // [delay, duration]
    []
  );

  useEffect(() => {
    let observer;
    // console.log("+++++++USEEFFEDCT:", element.current);
    if (element.current) {
      /*화면(뷰포트) 상에 내가 지정한 타겟 엘레멘트가 보이고 있는지에 대한 여부를 제공하느 api
          - new IntersectionObserver(callback,  option)
              - callback : 관찰이 실행되는 시점에서 실행되는 콜백 함수 => 인자 2개를 가짐 
                  1) entries: IntersectionObserverEntry 객체들을 배열로 반환
                  2) observer: IntersectionObserver instance - 관찰이 시작되는 상황에 대해 옵션을 설정 (threshold : 엘리먼트가 얼마나 보여지고 있는지)
*/
      observer = new IntersectionObserver(onScroll, { threshold: 0.3 });

      observer.observe(element.current);
    //   console.log("[[[[[[[[[observer]]]]]]]]]",observer)
    }

    return () => observer && observer.disconnect(); //관찰 멈추기
  }, [onScroll]);

//   const useScrollFadeIn = (direction = "up", duration = 1, delay = 0) => {
//     return {
//       ref: element,
//       style: {},
//     };
//   };

  //   const animatedItem = {
  //     0: useScrollFadeIn("up", 1, 0),
  //     1: useScrollFadeIn("up", 1, 0.2),
  //     2: useScrollFadeIn("up", 1, 0.3),
  //   };

  return (
    <Box.Article>
      <Box.Div>
        <Box.DivItem>
          <Box.Label>
            <FcBriefcase /> 경력사항
          </Box.Label>
          <Box.HR />
          {careers.map((item, idx) => {
            return (
              <S.CareerWrap
                className="careers_wrap"
                key={idx}
                ref={element}
                delay={"0." + idx}
                
              >
                <div style={{'display': 'inline-block', 'textAlign': 'justify'}}> 
                <dl>
                  <S.Dt size="large"> {item.company}</S.Dt>
                  <S.Dd className="flexWrap">
                    <S.DetailWrap>
                      <S.BriefDiv>
                        <ul>
                          <S.Li bold="true">{item.position}</S.Li>
                          <S.Li color="gray">
                            {item.start_date} ~ {item.end_date}
                          </S.Li>
                        </ul>
                      </S.BriefDiv>
                      <S.ProjectDiv>
                        {item.contents.map((content, index) => {
                          return (
                            <dl key={index}>
                              <S.Dt size="normal">{content.project}</S.Dt>
                              <S.Dd>
                                <ul>
                                  {content.summary.map((list, index) => {
                                    return (
                                      <S.Li key={index} size="small" >
                                        <FcNext style={{"fontSize":"10px"}}/>{list}
                                      </S.Li>
                                    );
                                  })}
                                </ul>
                                {content.skills.map((skill, index) => {
                                  return (
                                    <S.Button
                                      button="lightcoral"
                                      size="small"
                                      key={index}
                                    >
                                      {skill}
                                    </S.Button>
                                  );
                                })}
                              </S.Dd>
                            </dl>
                          );
                        })}
                      </S.ProjectDiv>
                    </S.DetailWrap>
                  </S.Dd>
                </dl>
                </div>
              </S.CareerWrap>
            );
          })}
        </Box.DivItem>
      </Box.Div>
    </Box.Article>
  );
}

export default Info;
