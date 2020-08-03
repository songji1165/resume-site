import React, { useEffect, useState, useCallback } from "react";
import styled from "styled-components";

const S = {
  Wrapper: styled.div`
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 1000;
    transition: all 0.2s ease-in-out;
    background-color: ${(props) => (props.isScroll ? "white" : "#f1f1f1")};
    box-shadow: ${(props) =>
      props.isScroll ? "0 0 16px 8px rgba(0, 0, 0, 0.04)" : "none"};
  `,
  Header: styled.header`
    width: 100%;
    max-width: 1180px;
    margin: 0 auto;
    transition: all 0.2s ease-in-out;
    height: ${(props) => (props.isScroll ? "70px" : "100px")};
    display: flex;
    fles-direction: row;
    align-items: center;
  `,
  Logo: styled.div`
    color: ${(props) => (props.isScroll ? "red" : "white")};
    font-weight: 900;
    font-size: 1.5rem;
    flex: 0 0 25%;
    max-width: 25%;

    @media (max-width: 860px) {
      flex: 0 0 30%;
      max-width: 30%;
    }
  `,
  Navigation: styled.div`
    flex: 0 0 50%;
    max-width: 50%;
    display: flex;
    justify-content: center;

    @media (max-width: 860px) {
      display: none;
    }
  `,
  NavigationItem: styled.a`
        color: ${(props) => (props.isScroll ? "black" : "white")},
        margin: 0 5rem;
        padding : 0 1rem;
        cursor : pointer;
        &:hover {
            opacity : 0.5;
        }
    `,
  LinkWrapper: styled.div`
    flex: 0 0 25%;
    max-width: 25%;
    display: flex;
    justify-content: flex-end;

    @media (max-width: 860px) {
      flex: 0 0 70%;
      max-width: 70%;
      margin-left: auto;
    }
  `,
  LinkItem: styled.a`
        color: ${(props) => (props.isScroll ? "black" : "white")},
        margin: 0 1rem;
        padding : 0 1rem;
        cursor : pointer;
        &:hover {
            opacity : 0.5;
        }

        @media (max-width: 860px) {
          
         }
    `,
};

const NAVI_ITEMS = ["HOME", "HISTORY", "TECH", "PROJECT", "CONTACT"];

function Header({ navi, author }) {
//   console.log("HEADER", navi);
// const refs = list.reduce((acc, value) => {
//   acc[value.id] = ReactcreateRef();
//   return acc;
// }, {});

// const handleClick = id =>
//   refs[id].current.scrollIntoView({
//     behavior: 'smooth',
//     block: 'start',
//   });  


  //스크롤 여부
  const [isScroll, setIsScroll] = useState(false);

  //스크롤 여부 판단(중복되는 값을 메모리에 저장하여, 속도 최적화함)
  const handleScroll = useCallback(() => {
    //스크롤 한 경우
    if (window.pageYOffset > 50) {
    //   console.log("*************SCRPL", window.pageYOffset);
      setIsScroll(true);
    }
    
    //스크롤 안 한 경우
    if (window.pageYOffset === 0) {
        console.log("스크롤 0이다");
        setIsScroll(false);
    }
}, []);

  //Like [componentDidMount + componentDidUpdate + componentWillUpdate]
  useEffect(() => {
    window.addEventListener("mousewheel", handleScroll);

    //정리가 필요한 Effects는 메모리 누수 발생을 예방하기 위해 제거!
    return () => {
      window.removeEventListener("mousewheel", handleScroll);
    };
  }, [handleScroll]);

  return (
    <S.Wrapper isScroll={isScroll}>
      <S.Header isScroll={isScroll}>
        <S.Logo isScroll={isScroll}>{author}</S.Logo>
        <S.Navigation>
          {NAVI_ITEMS.map((item, idx) => (
            <S.NavigationItem key={idx} isScroll={isScroll}>
              {item}
            </S.NavigationItem>
          ))}
        </S.Navigation>
        <S.LinkWrapper>
          {navi.map((item, idx) => {
            if (item.link) {
              return (
                <S.LinkItem key={idx} isScroll={isScroll} href={item.link} target="_blank">
                  {item.title}
                </S.LinkItem>
              );
            } else {
              return ''
            }
          })}
        </S.LinkWrapper>
      </S.Header>
    </S.Wrapper>
  );
}

export default Header;
