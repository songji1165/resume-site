import React, { useEffect, useState, useCallback, useRef } from "react";
import styled from "styled-components";
// import Button from "../styles/buttonCss";
import { FaBlogger, FaGithub } from "react-icons/fa";
import { AiOutlineIdcard } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

const S = {
  Wrapper: styled.div`
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 1000;
    transition: all 0.2s ease-in-out;
    background-color: ${(props) => (props.isScroll ? "#fff" : "none")};
    box-shadow: ${(props) =>
      props.isScroll ? "0 0 3px 3px rgba(0, 0, 0, 0.2)" : "none"};
  `,
  Header: styled.header`
    width: 100%;
    max-width: 1180px;
    margin: 0 auto;
    transition: all 0.2s ease-in-out;
    height: ${(props) => (props.isScroll ? "60px" : "100px")};

    @media (max-width: 860px) {
      position: relative;
      background: #414042;
      height: 50px;
    }
  `,
  Navigation: styled.div`
    max-width: 50%;
    margin: 0 auto;
    display: flex;
    justify-content: center;

    @media (max-width: 860px) {
      display: block;
      max-width: 100%;
      width: 100%;
      box-shadow: 3px 10px 9px -9px rgba(0, 0, 0, 0.4);
      background: #fff;
      position: absolute;
      top: 50px;
      left: 0;
      height: ${(props) => (props.isOpenMenu ? "auto" : 0)};
      overflow:hidden;
    }
  `,
  NavigationItem: styled.a`
    color: #000;
    font-size: ${(props) => (props.isScroll ? "14px" : "16px")};
    font-weight: 400;
    margin: 0 1rem;
    padding: 0 1rem;
    cursor: pointer;
    transition: all 500ms;
    line-height: ${(props) => (props.isScroll ? "60px" : "100px")};
    &:hover {
      opacity: 0.5;
    }

    @media (max-width: 860px) {
      display: block;
      max-width: 100%;
      margin: -1px 0;
      line-height: 50px !important;
      padding: 0 1rem;
      text-align: left;
      background: #414042;
      color: #fff;
      font-size: 14px !important;
      font-weight: 300;
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
    margin: 0 1rem;
    padding: 0 1rem;
    cursor: pointer;
    &:hover {
      opacity: 0.5;
    }
    color: #000;
  `,
  MenuBar: styled.div`
    width: 100%;
    text-align: right;
    font-size: 2.5rem;
    line-height: 50px;
    padding: 0 1rem;
    color: #fff;
  `,
};

function Header({ navi, author, sections }) {
  const handleNavigate = (section) => {
    if (section) {
      let el = section.ref.current;

      window.scrollTo({
        behavior: "smooth",
        left: 0,
        top: el.offsetTop,
      });

      setIsOpenMenu(false);
    }
  };
  
  const eleMenu = useRef();
  //스크롤 여부
  const [isScroll, setIsScroll] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  //스크롤 여부 판단(중복되는 값을 메모리에 저장하여, 속도 최적화함)
  const handleScroll = useCallback((event) => {
    // console.log(event);
    //스크롤 한 경우
    if (window.pageYOffset > 100) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  }, []);

  const handleClickMenu = (event) => {
    const changeMenu = !isOpenMenu
    setIsOpenMenu(changeMenu);
  };

  //Like [componentDidMount + componentDidUpdate + componentWillUpdate]
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // const current = eleMenu;
    // if(eleMenu.current){
    //   eleMenu.current.addEventListener("click", handleClickMenu);

    //   return eleMenu.current.removeEventListener("click", handleClickMenu);
    // }

    //정리가 필요한 Effects는 메모리 누수 발생을 예방하기 위해 제거!
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <S.Wrapper isScroll={isScroll}>
      <S.Header isScroll={isScroll}>
        <S.Navigation isOpenMenu={isOpenMenu}>
          {sections.map((item, idx) => (
            <S.NavigationItem
              key={idx}
              isScroll={isScroll}
              onClick={() => handleNavigate(item)}
            >
              {item.name}
            </S.NavigationItem>
          ))}
        </S.Navigation>
        <S.MenuBar>
          <span ref={eleMenu} onClick={handleClickMenu} >
            <GiHamburgerMenu className="bar" style={{height:"50px"}}/>
          </span>
        </S.MenuBar>
      </S.Header>
    </S.Wrapper>
  );
}

export default Header;
/*
 */
