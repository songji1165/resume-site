import React from "react";
import Box from "../styles/articleCss";
import styled from "styled-components";
import useScrollFadeIn from "../hook/useScrollFadeIn";
import imgArr from "../assets";

const S = {
  ProjectWrap: styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-around;
    @media (max-width: 860px) {
      justify-content: center;
    }
  `,
  Project: styled.div`
    margin: 5px 2px;
    max-width: 40%;
    height: 300px;
    border-radius: 5px;
    transition: 1s;
    flex: 0 0 48%;
    cursor: pointer;

    @media (max-width: 860px) {
      max-width: 100%;
      margin: 15px 0;
      height: 250px;
      flex: 0 0 85%;
    }

    &:hover .moreWrap:after {
      position: absolute;
      content: "More About";
      display: block;
      width: 100%;
      top: 50%;
      transform: translateY(-50%);
      left: 0;
      z-index: 110;
      transition: 0.2s;
      color: #fff;
      font-size: 1.5rem;
      font-weight: 500;
      text-align: center;
    }

    &:hover .moreWrap:before {
      position: absolute;
      content: "";
      display: block;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #333;
      opacity: 0.3;
      z-index: 100;
      transition: 0.2s;
    }
  `,
  ImgDiv: styled.div`
    height: 70%;
    width: 100%;
    text-align: center;
    position: relative;
  `,
  SummaryDiv: styled.div`
    width: 100%;
    padding: 3%;
  `,
  IMG: styled.img`
    height: 100%;
    width: 100%;
  `,
  Title: styled.div`
    font-weight: 600;
    font-size: 0.9rem;
    line-height: 1rem;
    margin-bottom: 5px;
  `,
  ExplanDiv: styled.div`
    font-size: 0.8rem;
    padding: 2%;
    font-weight: 300;
    line-height: 0.9rem;
  `,
};

function Project({ projects, refProp }) {
  const FnMakeProjectTamplete = (item, idx) => {
    const delaySec = idx * 0.1;
    const scrollFade = useScrollFadeIn("left", 1, delaySec);

    return (
      <S.Project key={idx} {...scrollFade}>
        <a href={item.link} target="_blank"  rel="noopener noreferrer">
          <S.ImgDiv className="moreWrap">
            <S.IMG src={imgArr[item.img]} />
          </S.ImgDiv>
          <S.SummaryDiv>
            <S.Title>
              {item.Icon} {item.name}
            </S.Title>
            <S.ExplanDiv> {item.summary}</S.ExplanDiv>
          </S.SummaryDiv>
        </a>
      </S.Project>
    );
  };

  return (
    <div ref={refProp.ref}>
      <Box.Article theme="#f4f4f4">
        <Box.Div>
          <Box.DivItem>
            <Box.Label>PROJECT</Box.Label>
            <Box.HR />
            <S.ProjectWrap>
              {projects.map((item, idx) => {
                return FnMakeProjectTamplete(item, idx);
              })}
            </S.ProjectWrap>
          </Box.DivItem>
        </Box.Div>
      </Box.Article>
    </div>
  );
}

export default Project;
