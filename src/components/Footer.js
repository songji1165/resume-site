import React from "react";
import Box from "../styles/articleCss";
import imgArr from "../assets";
import styled from "styled-components";

const S = {
  contactDiv: styled.div`
    width: 100%;
    height: 250px;
    text-align: center;
    position: relative;
    display: table-cell;
    vertical-align: middle;
    margin: 0 auto;

    &:before {
      position: absolute;
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: url(${imgArr.EunjiEmoji1}) no-repeat center center;
      background-size: contain;
      opacity: 0.5;
      z-index: -1;
    }
  `,
  H2: styled.div`
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 20px;

    &.address {
      font-size: 1.2rem;
      font-weight: 500;
    }
  `,
};

function Footer() {
  return (
    <Box.Article>
      <Box.Div>
        <Box.DivItem>
          <S.contactDiv>
            <S.H2> Contact </S.H2>
            <S.H2 className="address">songji1165@gmail.com</S.H2>
            <form>
                <input type="text" />
                <textarea></textarea>
                <button>보내기</button>
            </form>
          </S.contactDiv>
        </Box.DivItem>
      </Box.Div>
    </Box.Article>
  );
}

export default Footer;
