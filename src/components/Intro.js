import React, {useState, useEffect} from "react";
import { FcCloseUpMode } from "react-icons/fc";
import Box from "../styles/articleCss";
import styled from "styled-components";
import imgArr from "../assets";


const S = {
    IntroDiv: styled(Box.DivItem)`
        
        &:before {
            position: absolute;
            content: "";
            display: block;
            width: 100%;
            height: 100%;
            top: 0;
            right: 0;
            transform : ${(props)=> props.offset > 0 ? `translateY(${props.offset}px)` : "0"};
            background: url(${imgArr.EunjiEmoji2}) no-repeat center right;
            background-size: 40% auto;
            opacity: 0.3;
            z-index: -1;


            @media (max-width: 860px) {
                background-size: contain;
                opacity: 0.2;
                }
            }
    `,
  P: styled.div`
    padding: 10px;
    font-size: 1.1rem;
    line-height: 1.5rem;
    font-weight: 600;
    color : #333;
  `,
};

function Intro({ intro }) {
//   console.log("INTRO", intro);

/*
const [offset, setOffset] = useState(0);

useEffect(() => {
  const handleScroll = ()=>{
  
    setOffset(window.pageYOffset)
  }
 
  window.addEventListener("scroll", handleScroll)
  return () => {
    window.removeEventListener("scroll", handleScroll)
  }
}, [])
*/
  return (
    <Box.Article>
      <Box.Div>
        <Box.DivItem>
            <S.IntroDiv>
          <S.P>안녕하세요.</S.P>
          {intro.map((data, idx) => {
            return (
              <S.P key={idx}>
                <FcCloseUpMode key={idx} /> {data}
              </S.P>
            );
          })}
          </S.IntroDiv>
        </Box.DivItem>
      </Box.Div>
    </Box.Article>
  );
}

export default Intro;
