import React from "react";
import { FcSettings } from "react-icons/fc";
import styled from "styled-components";
import Box from "../styles/articleCss";
import imgArr from "../assets";

const Ul = styled.ul`
  width: 100%;
  margin: 20px auto;
  display: flex;
  flex-direction: row;
  align-items: left;
  flex-wrap :wrap;
  justify-content: space-between;
`;

const Li = styled.li`
  width: 100%;
 height: 25px;
 margin: 8px 0;
  flex : 0 0 48%;
  background: #f9f9f9;
  position: relative;

  @media (max-width: 860px) {
    flex : 0 0 100%;
}

`;

const Score = styled.span`
    position : absolute;
    right : 3px;
    font-size : 0.8rem;
    height: 25px;
    line-height:25px;
`;

const Graph = styled.div`
  width: ${(props) => (props.score ? props.score + "%" : 0)};
  display: inline-block;
 height: 100%;
  perspective: 100px;
  background: #f49842;
  box-shadow: 1px -1px #d88a41, 
	2px -2px #d88a41, 
    3px -3px #d88a41,   
    4px -4px #d88a41, 
    5px -5px #d88a41, 
    6px -6px #d88a41, 
    7px -7px   #d88a41, 
    8px -8px #d88a41, 
    9px -9px #d88a41, 
    10px -10px #d88a41;
`;

const Span = styled.span`
  line-height: 25px;
  height: 25px;
  display: inline-block;
  vertical-align: middle;
  margin:0 8px;
  font-size: ${(props) => (props.size ? props.size + "rem" : "1rem")};
  float: ${(props) => (props.float ? props.float : "none")};
`;

function Tech({ tech }) {
  console.log("TEXJ",tech);

  /**
     * 
     * var maxIndex = $("li.graph-bar").length;

for(var i=0; i<maxIndex; i++){
  var val = $("li.graph-bar").eq(i).attr('graph-val');

  $("li.graph-bar").eq(i).css({
    "top": (i+1)*60+"px"
  }).animate({
    "width":val+"%"
  },800);
}
     */
  return (
    <Box.Article>
      <Box.Div>
        <Box.DivItem>
          <Box.Label>
            <FcSettings /> 기술능력
          </Box.Label>
          <Box.HR />
          <div>
            <Ul>
              {tech.map((item, idx) => {
                console.log("?????", imgArr);

                return (
                  <Li
                    className="graph-bar bar{idx+1}"
                    key={idx}
                    index={idx}
                    score={item.score}
                    img={item.Lang}
                  >
                      <Graph  index={idx}
                    score={item.score}
                    img={item.Lang}>
                        <Span>
                        <img src={imgArr[item.Lang]} width="25" height="25" />
                        </Span>
                        <Span size="0.8"> {item.Lang}</Span>
                      </Graph>
                        <Score > {item.score}%</Score>
                  </Li>
                );
              })}
            </Ul>
          </div>
        </Box.DivItem>
      </Box.Div>
    </Box.Article>
  );
}

export default Tech;
