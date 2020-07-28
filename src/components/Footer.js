import React from 'react';
import Box from "../styles/articleCss";


function Footer (){
    return (
        <Box.Article>
            <Box.Div>
            <Box.DivItem>
            <form>
                <input type="text"/>
                <textarea>

                </textarea>
                <button>보내기</button>
            </form>
            </Box.DivItem>
            </Box.Div>
        </Box.Article>
    )
}

export default Footer;