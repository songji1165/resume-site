import React, { useState } from "react";
import emailjs from "emailjs-com";
import Box from "../styles/articleCss";
import styled from "styled-components";
import useScrollFadeIn from "../hook/useScrollFadeIn";
import Button from "../styles/buttonCss";
import { AiOutlineMail, AiOutlineIdcard } from "react-icons/ai";
import { FaBlogger, FaGithub } from "react-icons/fa";
import { GiConsoleController } from "react-icons/gi";

const S = {
  contactDiv: styled.div`
    width: 100%;
    text-align: center;
    position: relative;
    margin: 0 auto;
    padding: 20px;
    color: #fff;
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

    & .strong {
      font-weight: 500;
      color: #00bfff;
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
    border: ${(props) => (!props.isVali ? "2px solid red" : "1px solid #333")};
    @media (max-width: 860px) {
      width: 100%;
    }
  `,
  Textarea: styled.textarea`
    padding: 10px;
    vertical-align: top;
    width: 60%;
    height: 5rem;
    border: ${(props) => (!props.isVali ? "2px solid red" : "1px solid #333")};
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
    cursor: pointer;
    color: #fff;

    &:hover {
      opacity: 0.5;
    }
  `,
  Noti: styled.p`
    color: #eaa2a2;
    display: ${(props) => (!props.isNotiShow ? "block" : "none")};
  `,
};

function Footer({ contact, author, refProp }) {
  const [inputSend, setInputSend] = useState({
    name: "",
    mail: "",
    text: "",
    phone: "",
  });
  const [isValiName, setIsValiName] = useState(true);
  const [isValiMail, setIsValiMail] = useState(true);
  const [isValiText, setIsValiText] = useState(true);
  const [isNotiShow, setIsNotiShow] = useState(true);

  console.log(process.env);

  const sendEmail = (e) => {
    e.preventDefault();
    const valiInput = fnValidateForm();

    const EMAILJS = process.env;
    console.log(EMAILJS.REACT_APP_SERVICE_ID, EMAILJS.REACT_APP_TEMPLATE_NO);
    // console.log(process.env.REACT_APP_TEMPLATE_NO);
    if (valiInput) {
      const template_params = {
        email: inputSend.mail,
        name: inputSend.name,
        phone: inputSend.phone,
        message: inputSend.text,
      };

      emailjs
        .sendForm(
          EMAILJS.REACT_APP_SERVICE_ID,
          EMAILJS.REACT_APP_TEMPLATE_NO,
          e.target,
          EMAILJS.REACT_APP_USER_ID
        )
        .then(
          (result) => {
            console.log(result.text);
            alert(
              "메일이 전송되었습니다. 빠른 시일내로 회신드리겠습니다. 감사합니다. ^^*"
            );
          },
          (error) => {
            alert("메일이 전송에 실패하였습니다. songji1165@gmail.com으로 전송바랍니다.");
            console.log(error.text);
          }
        );
    }
  };

  const fnValidateForm = () => {
    let isValiForm = true;
    if (inputSend.name.length === 0) {
      setIsValiName(false);
      isValiForm = false;
    }
    if (inputSend.mail.length === 0) {
      setIsValiMail(false);
      isValiForm = false;
    }
    if (inputSend.text.length === 0) {
      setIsValiText(false);
      isValiForm = false;
    }

    if (isValiForm) {
      setIsNotiShow(true);
    } else {
      setIsNotiShow(false);
    }

    return isValiForm;
  };

  const fnMakeLinkTemplate = (item, idx) => {
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
    } else if (item.icon === "Email") {
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
  };

  const handleInput = (e) => {
    const target = e.target.name;

    setInputSend({ ...inputSend, [target]: e.target.value });

    if (e.target.value.length > 0) {
      switch (target) {
        case "name":
          setIsValiName(true);
          break;
        case "mail":
          setIsValiMail(true);
          break;
        case "text":
          setIsValiText(true);
          break;
        default:
          break;
      }
    }

    if (isValiName && isValiMail && isValiText) {
      setIsNotiShow(true);
    } else {
      setIsNotiShow(false);
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
              <S.H2>
                Contact '<span className="strong">{author}</span>'
              </S.H2>
              <form onSubmit={sendEmail}>
                <S.Parameter {...useScrollFadeIn("up", 1, 0)}>
                  <S.Label>*Name</S.Label>
                  <S.Input
                    type="text"
                    name="name"
                    placeholder="성함을 입력해주세요."
                    id="inputbox"
                    value={inputSend.name}
                    onChange={handleInput}
                    isVali={isValiName}
                  />
                </S.Parameter>
                <S.Parameter {...useScrollFadeIn("up", 1, 0.2)}>
                  <S.Label>*Email</S.Label>
                  <S.Input
                    type="text"
                    name="mail"
                    placeholder="보내시는 분의 이메일 주소를 입력해주세요."
                    value={inputSend.mail}
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
                    isVali={true}
                    value={inputSend.phone}
                    onChange={handleInput}
                  />
                </S.Parameter>
                <S.Parameter {...useScrollFadeIn("up", 1, 0.4)}>
                  <S.Label>*Message</S.Label>
                  <S.Textarea
                    name="text"
                    placeholder="내용을 입력해주세요."
                    value={inputSend.text}
                    isVali={isValiText}
                    onChange={handleInput}
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
                <S.Noti isNotiShow={isNotiShow}>
                  <span role="img" aria-label="sad">
                    😥
                  </span>{" "}
                  Name, Email, Message는 필수로 작성해주시기 바랍니다.
                </S.Noti>
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
