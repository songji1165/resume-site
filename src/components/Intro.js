import React from "react";
import { FcCloseUpMode } from "react-icons/fc";
import Box from "../styles/articleCss";
import styled from "styled-components";
import imgArr from "../assets";

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
};

function Intro({ intro, refProp, author }) {
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
        </Box.Div>
      </Box.Article>
    </div>
  );
}

export default Intro;
