import React from 'react';
import {FcOpenedFolder} from 'react-icons/fc';
import Box from "../styles/articleCss";



function Project ({projects}){
    console.log("PROHE",projects)
    function fnMakeProjectTamplete(item, idx){
        return (
           <div key={idx}>
               <dl>
                   <dt>{item.name} <span>({item.start_date} ~ {item.end_date})</span></dt>
                   <dd>
                       <ul>
                           <li>{item.organize}</li>
                           <li>{item.summary}</li>
                       </ul>
                   </dd>
               </dl>
              
            </div>
        )
    }

    return (
        <Box.Article>
            <Box.Div>
            <Box.DivItem>
           <p><FcOpenedFolder/> project</p> 
           <hr/>
           {projects.map((item,idx) => {
               return fnMakeProjectTamplete(item, idx);
           })}
            </Box.DivItem>
            </Box.Div>
        </Box.Article>
    )
}

export default Project;