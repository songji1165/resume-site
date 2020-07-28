import React from 'react';
import { FcSettings } from 'react-icons/fc';
import styled from 'styled-components';
import Box from "../styles/articleCss";


const Ul = styled.ul`
    width:500px; 
    height: 300px; 
    border-bottom: 1px solid #ccc;
    border-left: 1px solid #ccc;
    margin: 20px auto;
    position:relative;
`;

const Li = styled.li`
    top : ${props => props.index ? props.index*30+"px" : 0 };
    width : ${props => props.score ? props.score+"%" : 0 };
    display: inline-block;
    position: absolute;
    height: 20px;
    left:0;
    perspective:100px;
    background: #f49842;
`

function Tech ({tech}) {
    console.log(tech)

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
            <p><FcSettings /> 기술능력</p>
            <hr/>
            <Ul>
                {tech.map((item, idx) => {
                    console.log(item.score)
                   
                    return (
                        <Li className="graph-bar bar{idx+1}" key={idx} index={idx} score={item.score}>
                            <div>{item.Lang}</div>
                            <div>{item.summary}</div>
                        </Li>
                    )
                })}
           </Ul>
            </Box.DivItem>
            </Box.Div>
        </Box.Article>
    )
}

export default Tech;