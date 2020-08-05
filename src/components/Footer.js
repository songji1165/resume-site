import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import Box from "../styles/articleCss";
import imgArr from "../assets";
import styled from "styled-components";
import useScrollFadeIn from "../hook/useScrollFadeIn";
import Button from "../styles/buttonCss";
import { AiOutlineMail, AiOutlineIdcard } from "react-icons/ai";
import { FaBlogger, FaGithub } from "react-icons/fa";

const S = {
  contactDiv: styled.div`
    width: 100%;
    text-align: center;
    position: relative;
    margin: 0 auto;
    padding: 20px;
    color : #fff;
/*
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
    */
  `,
  Title: styled(Box.Label)`
    text-align: left;
    margin-bottom: 20px;

    &.address {
      font-size: 1.2rem;
      font-weight: 500;
    }
  `,
  H2: styled.div`
    font-size: 1.1rem;
    font-weight: 300;
    margin-bottom: 20px;
    text-align: left;
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
    border: ${(props) => (props.isVali ? "2px solid red" : "1px solid #333")};
    @media (max-width: 860px) {
      width: 100%;
    }
  `,
  Textarea: styled.textarea`
    padding: 10px;
    vertical-align: top;
    width: 60%;
    @media (max-width: 860px) {
      width: 100%;
    }
  `,
  LinkWrapper: styled.div`
    text-align: center;
    margin: 3% 0;
  `,
  LinkItem: styled.a`
    margin: 0 1rem;
    padding: 0 1rem;
    cursor: pointer;
    color: #fff;

    &:hover {
      opacity: 0.5;
    }
  `,
};

function Footer({ contact, refProp }) {
  const [inputName, setInputName] = useState({"name":"","mail":"","text":""});
  const [inputMail, setInputMail] = useState("");
  const [inputText, setInputText] = useState("");
  const [isValiName, setIsValiName] = useState(true);
  const [isValiMail, setIsValiMail] = useState(true);
  const [isValiText, setIsValiText] = useState(true);

  console.log("CONTACT", contact);
  function sendEmail(e) {
    e.preventDefault();
    console.log("SEND", e);
    const valiInput = fnValidateForm();
    console.log(valiInput);
    if (!valiInput) {
      console.log("name", isValiName);
      console.log("mail", isValiMail);
      console.log("text", isValiText);
    } else {
      alert("send");
      return;
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
  }

  useEffect(()=> {

  })

  function fnValidateForm() {
    let isValiForm = true;
    if (inputName.length === 0) {
      alert("이름없어");
      setIsValiName(false);
      isValiForm = false;
    }
    if (inputMail.length === 0) {
      setIsValiMail(false);
      isValiForm = false;
    }
    if (inputText.length === 0) {
      setIsValiText(false);
      isValiForm = false;
    }

    return isValiForm;
  }
  useEffect(() => {}, []);

  function fnMakeLinkTemplate(item, idx) {
    let icon;
    if (item.icon === "Github") {
      icon = (
        <FaGithub
          size="26"
          title={item.alt ? item.alt : item.title}
          className="icon"
        />
      );
    } else if (item.icon === "Blog") {
      icon = (
        <FaBlogger
          size="26"
          title={item.alt ? item.alt : item.title}
          className="icon"
        />
      );
    } else if (item.icon === "Notion") {
      icon = (
        <AiOutlineIdcard
          size="26"
          title={item.alt ? item.alt : item.title}
          className="icon"
        />
      );
    } else if (item.icon == "Email") {
      icon = (
        <AiOutlineMail size="26" title={item.alt ? item.alt : item.title} />
      );
    } else {
      icon = item.title;
    }
    return (
      <S.LinkItem
        key={idx}
        href={item.link}
        alt={item.alt ? item.alt : item.title}
        target="_blank"
      >
        {icon}
      </S.LinkItem>
    );
  }

  const handleInput = (e) => {
    console.log("name", e.target.value);
    setInputName({[e.target.name] : e.target.value});
    if (inputName.length > 0) {
      // setIsValiName(true);
    }
  };

  const handleInputMail = (e) => {
    console.log("mail", e.target.value);
    setInputMail(e.target.value);
    if (inputName.length > 0) {
      setIsValiMail(true);
    }
  };

  const handleInputText = (e) => {
    console.log("text", e.target.value);
    setInputText(e.target.value);
    if (inputName.length > 0) {
      setIsValiText(true);
    }
  };

  return (
    <div ref={refProp.ref}>
      <Box.Article theme="#414042">
        <Box.Div>
          <Box.DivItem>
            <S.contactDiv>
              <S.Title color="#fff"> CONTACT </S.Title>
              <hr />
              <S.H2>Contact Me</S.H2>
              <form onSubmit={sendEmail}>
                <S.Parameter {...useScrollFadeIn("up", 1, 0)}>
                  <S.Label>*Name</S.Label>
                  <S.Input
                    type="text"
                    name="name"
                    placeholder="성함을 입력해주세요."
                    id="inputbox"
                    value={inputName.name}
                    onChange={handleInput}
                    isVali={isValiName}
                  />
                </S.Parameter>
                <S.Parameter {...useScrollFadeIn("up", 1, 0.2)}>
                  <S.Label>*Email</S.Label>
                  <S.Input
                    type="text"
                    name="email"
                    placeholder="보내시는 분의 이메일 주소를 입력해주세요."
                    value={inputName.mail}
                    isVali={isValiMail}
                    onChange={handleInput}
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
                  <S.Label>*Message</S.Label>
                  <S.Textarea
                    name="message"
                    placeholder="내용을 입력해주세요."
                    value={inputText}
                    isVali={isValiText}
                    onChange={handleInputText}
                  ></S.Textarea>
                </S.Parameter>

                <Button
                  type="submit"
                  value="Send"
                  pointer="true"
                  color="#fff"
                  button="none"
                  {...useScrollFadeIn("up", 1, 0.5)}
                >
                  <AiOutlineMail
                    style={{ fontSize: "1.5rem", verticalAlign: "top" }}
                  />
                  <span> SEND</span>
                </Button>
              </form>
            </S.contactDiv>
            <hr />
            <S.LinkWrapper>
              {contact.map((item, idx) => {
                if (item.link) {
                  return fnMakeLinkTemplate(item, idx);
                } else {
                  return "";
                }
              })}
            </S.LinkWrapper>
          </Box.DivItem>
        </Box.Div>
      </Box.Article>
    </div>
  );
}

export default Footer;
