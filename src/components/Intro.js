import React from "react";
import { FcCloseUpMode } from "react-icons/fc";
import Box from "../styles/articleCss";
import styled from "styled-components";

const S = {
  P: styled.div`
    padding: 10px;
    font-size: 1.1rem;
    line-height: 1.5rem;
  `,
};

function Intro({ intro }) {
  console.log("INTRO", intro);
  return (
    <Box.Article>
      <Box.Div>
        <Box.DivItem>
          <S.P>안녕하세요.</S.P>
          {intro.map((data, idx) => {
            return (
              <S.P key={idx}>
                <FcCloseUpMode key={idx} /> {data}
              </S.P>
            );
          })}
        </Box.DivItem>
      </Box.Div>
    </Box.Article>
  );
}

export default Intro;
