import React from "react";
import emailjs from "emailjs-com";
import Box from "../styles/articleCss";
import imgArr from "../assets";
import styled from "styled-components";
import useScrollFadeIn from "../hook/useScrollFadeIn";

const S = {
  contactDiv: styled.div`
    width: 100%;
    text-align: center;
    position: relative;
    margin: 0 auto;
    padding: 20px;

    &:before {
      position: absolute;
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: url(${imgArr.EunjiEmoji1}) no-repeat center left;
      background-size: contain;
      opacity: 0.3;
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
  Parameter: styled.div`
    width: 80%;
    margin-bottom: 15px;
    background: ${(props) => (props.isScroll ? "skyblue" : "none")};
    transition: 1s;

    @media (max-width: 860px) {
      width: 100%;
    }
  `,
  Label: styled.label`
    margin-top: 10px;
    margin-bottom: 8px;
    display: inline-block;
    font-size: 13px;
    color: rgba(0, 0, 0, 0.7);
    line-height: 1em;
    font-weight: 700;
    width: 35%;
    padding-right: 1em;
    text-align: right;

    @media (max-width: 860px) {
      width: 100%;
      margin: 5px 0;
      text-align: center;
    }
  `,
  Input: styled.input`
    padding: 10px;
    vertical-align: top;
    width: 60%;

    @media (max-width: 860px) {
      width: 100%;
      background: red;
    }
  `,
  Textarea: styled.textarea`
    padding: 10px;
    vertical-align: top;
    width: 60%;
  `,
};

function Footer() {
  function sendEmail(e) {
    e.preventDefault();

    //emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
    emailjs
      .sendForm(
        "songji1165",
        "template_3CVEa769",
        e.target,
        "user_qXqA2Wly9lGHUIxL9Dv8h"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert(
            "메일이 전송되었습니다. 빠른 시일내로 회신드리겠습니다. 감사합니다. ^^*"
          );
        },
        (error) => {
          console.err(error.text);
          alert("메일이 전송에 실패하였습니다. 다시 시도해주세요.");
        }
      );
  }

  function handleKeyDown(e) {
    console.log("++TextArea HandleKeyDown", e.target.scrollHeight);
  }

  return (
    <Box.Article>
      <Box.Div>
        <Box.DivItem>
          <S.contactDiv>
            <S.H2> Contact </S.H2>
            <Box.HR />
            <S.H2 className="address">저에게 메일을 보낼 수 있습니다.</S.H2>
            <S.H2 className="address">songji1165@gmail.com</S.H2>
            <form onSubmit={sendEmail}>
              <S.Parameter {...useScrollFadeIn("up", 1, 0)}>
                <S.Label>Name</S.Label>
                <S.Input
                  type="text"
                  name="name"
                  placeholder="성함을 입력해주세요."
                  id="inputbox"
                />
              </S.Parameter>
              <S.Parameter {...useScrollFadeIn("up", 1, 0.2)}>
                <S.Label>Email</S.Label>
                <S.Input
                  type="text"
                  name="email"
                  placeholder="보내시는 분의 이메일 주소를 입력해주세요."
                />
              </S.Parameter>
              <S.Parameter {...useScrollFadeIn("up", 1, 0.3)}>
                <S.Label>Phone</S.Label>
                <S.Input
                  type="text"
                  name="phone"
                  placeholder="보내시는 분의 연락처를 입력해주세요."
                />
              </S.Parameter>
              <S.Parameter {...useScrollFadeIn("up", 1, 0.4)}>
                <S.Label>Message</S.Label>
                <S.Textarea
                  name="message"
                  placeholder="내용을 입력해주세요."
                  onKeyDown={handleKeyDown}
                ></S.Textarea>
              </S.Parameter>

              <button type="submit" value="Send">
                보내기
              </button>
            </form>
          </S.contactDiv>
        </Box.DivItem>
      </Box.Div>
    </Box.Article>
  );
}

export default Footer;
