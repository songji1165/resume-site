import React, { useState, createRef } from "react";
import { FcCloseUpMode } from "react-icons/fc";
import Box from "../styles/articleCss";
import styled from "styled-components";
import imgArr from "../assets";
import { FiArrowDownCircle } from "react-icons/fi";

const S = {
  IntroDiv: styled(Box.DivItem)`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  `,
  IntroWrap: styled.div`
    flex: 0 0 70%;
    max-width: 70%;
    padding: 0 2rem;
    transform: translateY(27.5%);

    &.img {
      flex: 0 0 30%;
      max-width: 30%;
      padding: 0;
      transform: none;
    }

    @media (max-width: 860px) {
      flex: 0 0 100% !important;
      max-width: 100% !important;
      width: 100% !important;
      margin: 1rem 0;
      padding: 0;
      transform: none;
    }
  `,
  H1: styled.h1`
    padding: 10px;
    color: #333;
    font-size: 2.5rem;

    .strong {
      font-weight: 600;
    }
  `,
  P: styled.div`
    padding: 10px;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 500;
    color: #333;
    opacity: 0.8;
  `,
  ImgSpan: styled.span`
    border-radius: 100%;
    overflow: hidden;
    display: block;
    width:100%
    height:100%;
    .img {
      display: block;
      width: 100%;
      heigth:100%;
    }
  `,
  DownBtn: styled.a`
  display:block;
    color: #777878;
    position: absolute;
    bottom: 5%;
    left: 50%;
    font-size: 2.5rem;
    cursor: pointer;
    animation: float 2s ease-in-out infinite;

    @keyframes float {
      0% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-5px);
      }
      100% {
        transform: translateY(0px);
      }
    }

    &:hover {
      animation: none;
    }

    @media (max-width: 860px) {
      display: none;
    }
  `,
};

function Intro({ intro, refProp, author, downScroll }) {
  const [isAni, setIsAni] = useState(true);

  const handleNavigate = (section) => {
    console.log("ARROWSECTION",section);
    if (section) {
      let el = section.ref.current;

      window.scrollTo({
        behavior: "smooth",
        left: 0,
        top: el.offsetTop,
      });
    }
  };

  return (
    <div ref={refProp.ref}>
      <Box.Article
        img={`url(${imgArr.background}) no-repeat bottom left fixed`}
      >
        <Box.Div>
          <S.IntroDiv>
            <S.IntroWrap className="img">
              <S.ImgSpan>
                <img
                  className="img"
                  src={imgArr.EunjiEmoji2}
                  alt="AuthorIcon"
                />
              </S.ImgSpan>
            </S.IntroWrap>
            <S.IntroWrap>
              <S.H1>
                Hi. I'm <span className="strong">{author}</span>
              </S.H1>
              {intro.map((data, idx) => {
                return (
                  <S.P key={idx}>
                    <FcCloseUpMode key={idx} /> {data}
                  </S.P>
                );
              })}
            </S.IntroWrap>
          </S.IntroDiv>
          <S.DownBtn onClick={() => handleNavigate(downScroll)}>
            <FiArrowDownCircle/> 
            </S.DownBtn> 
        </Box.Div>
      </Box.Article>
    </div>
  );
}

export default Intro;
