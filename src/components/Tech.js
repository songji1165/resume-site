import React from "react";
import styled from "styled-components";
import Box from "../styles/articleCss";
import imgArr from "../assets";
import useScrollGraph from "../hook/useScrollGraph";
import useScrollFadeIn from "../hook/useScrollFadeIn";

const S = {
  Ul: styled.ul`
    width: 100%;
    margin: 20px auto;
    display: flex;
    flex-direction: row;
    align-items: left;
    flex-wrap: wrap;
    justify-content: space-between;
  `,
  Li: styled.li`
    width: 100%;
    height: 25px;
    margin: 8px 0;
    flex: 0 0 48%;
    background: #ffffffa8;
    position: relative;

    @media (max-width: 860px) {
      flex: 0 0 100%;
    }
  `,
  Score: styled.span`
    position: absolute;
    right: 3px;
    font-size: 0.8rem;
    height: 25px;
    line-height: 25px;
  `,
  Graph: styled.div`
    display: inline-block;
    height: 100%;
    overflow: hidden;
    transition: 1s;
    perspective: 100px;
    background: #eaa2a2;
    box-shadow: 1px -1px #cb817a42, 2px -2px #cb817a42, 3px -3px #cb817a42,
      4px -4px #cb817a42, 5px -5px #cb817a42, 6px -6px #cb817a42,
      7px -7px #cb817a42, 8px -8px #cb817a42;
  `,
  Span: styled.span`
    line-height: 25px;
    height: 25px;
    display: inline-block;
    vertical-align: middle;
    margin: 0 8px;
    font-size: ${(props) => (props.size ? props.size + "rem" : "1rem")};
    float: ${(props) => (props.float ? props.float : "none")};
    color: #fff;
  `,
};

const Tech = ({ tech, refProp }) => {
  const FnMakeGraphTemplate = (score, skill, idx) => {
    return (
      <S.Li key={idx}>
        <S.Graph {...useScrollGraph(score)}>
          <S.Span>
            <img
              src={imgArr[skill]}
              width="25"
              height="25"
              alt={imgArr[skill]}
            />
          </S.Span>
          <S.Span size="0.8" className="skillName">
            {" "}
            {skill}
          </S.Span>
        </S.Graph>
        <S.Score {...useScrollFadeIn("right", 1, 1)}>{score}%</S.Score>
      </S.Li>
    );
  };

  return (
    <div ref={refProp.ref}>
      <Box.Article theme="#f4f4f4">
        <Box.Div>
          <Box.DivItem>
            <Box.Label>TECH</Box.Label>
            <Box.HR />
            <div>
              <S.Ul>
                {tech.map((item, idx) =>
                  FnMakeGraphTemplate(item.score, item.Lang, idx)
                )}
              </S.Ul>
            </div>
          </Box.DivItem>
        </Box.Div>
      </Box.Article>
    </div>
  );
};

export default Tech;
