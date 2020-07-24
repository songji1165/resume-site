import React from 'react';

function Header({navi}) {
    console.log("HEADER", navi)
    return(
        <div>
            <div>
                송은지
            </div>

            <div>
                <ul>
                    <li>GitBlog</li>
                    <li>Notion</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;