import React from 'react';
import FcBriefcase from 'react-icons/fc';

// import styled from "styled-components";
import Box from "../styles/articleCss";





function Info({careers}){
    console.log(careers)
   
    return (
            <Box.Article>
            <Box.Div>
            <Box.DivItem>
                {
                careers.map((item, idx) => {
                            return (
                                <div className="careers_wrap" key={idx}>
                                    <p><FcBriefcase /> 경력사항</p>
                                    <hr/>
                                    <dl>
                                        <dt> {item.company}</dt>
                                        <dd>
                                            <ul>
                                                <li>{item.start_date} ~ {item.end_date}</li>
                                                <li>{item.position}</li>
                                                <li>{item.summary}</li>
                                            </ul>
                                        </dd>
                                    </dl>
                                </div>
                            );
                        })
                }
            </Box.DivItem>
            </Box.Div>
           </Box.Article>
    )
}

export default Info;