import React from "react";
import { FcOpenedFolder } from "react-icons/fc";
import Box from "../styles/articleCss";
import styled from "styled-components";

const S = {
  ProjectWrap: styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    @media (max-width: 860px) {
      justify-content: center;
    }
  `,
  Project: styled.div`
    margin: 15px;
    width: 40%;
    height: 200px;
    border: 1px solid;

    @media (max-width: 860px) {
      width: 100%;
      margin: 15px 0;
      height: 250px;
    }
  `,
  ImgDiv: styled.div`
    height: 70%;
    width: 100%;
    text-align: center;
    position: relative;

    &:after {
      position: absolute;
      content: "";
      display: block;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #d9d9d9;
      opacity: 0.5;
      z-index: 100;
      transition: 0.2s;
    }

    &:hover:after {
      opacity: 0;
    }
  `,
  SummaryDiv: styled.div`
    width: 100%;
    border-top: 1px solid #d9d9d9;
    padding: 2px 5px;
  `,
  IMG: styled.img`
    height: 100%;
  `,
  Title: styled.div`
    font-weight: 600;
    font-size: 0.9rem;
    line-height: 1rem;
    margin-bottom: 5px;
  `,
  ExplanDiv: styled.div`
    font-size: 0.8rem;
    padding-left: 10px;
  `,
};

function Project({ projects }) {
  console.log("PROHE", projects);
  function fnMakeProjectTamplete(item, idx) {
    return (
      //    <div key={idx}>
      //        <dl>
      //            <dt>{item.name} <span>({item.start_date} ~ {item.end_date})</span></dt>
      //            <dd>
      //                <ul>
      //                    <li>{item.organize}</li>
      //                    <li>{item.summary}</li>
      //                </ul>
      //            </dd>
      //        </dl>

      //     </div>
      <S.Project key={idx}>
        <S.ImgDiv>
          <S.IMG src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/22374b9f-ebd1-4ac7-8d9d-cefedb81f970/WW.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20200728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20200728T110444Z&X-Amz-Expires=86400&X-Amz-Signature=7ce78599ca2d20968abe58cebd9f8a275c293ec50cc07753a60c919e023d2a78&X-Amz-SignedHeaders=host" />
        </S.ImgDiv>
        <S.SummaryDiv>
          <S.Title>
            {item.Icon} {item.name}
          </S.Title>
          <S.ExplanDiv> {item.summary}</S.ExplanDiv>
        </S.SummaryDiv>
      </S.Project>
    );
  }

  return (
    <Box.Article>
      <Box.Div>
        <Box.DivItem>
          <Box.Label>
            <FcOpenedFolder /> project
          </Box.Label>
          <Box.HR />
          <S.ProjectWrap>
            {projects.map((item, idx) => {
              return fnMakeProjectTamplete(item, idx);
            })}
          </S.ProjectWrap>
        </Box.DivItem>
      </Box.Div>
    </Box.Article>
  );
}

export default Project;
