import { css, createGlobalStyle } from "styled-components";

import NotoSansKRRegular from "./fonts/NotoSansKR/NotoSansKR-Regular.otf";
import NotoSansKRRegularwoff from "./fonts/NotoSansKR/NotoSansKR-Regular.woff";
import NotoSansKRRegularwoff2 from "./fonts/NotoSansKR/NotoSansKR-Regular.woff2";

import NotoSansKRLight from "./fonts/NotoSansKR/NotoSansKR-Light.otf";
import NotoSansKRLightwoff from "./fonts/NotoSansKR/NotoSansKR-Light.woff";
import NotoSansKRLightwoff2 from "./fonts/NotoSansKR/NotoSansKR-Light.woff2";

import NotoSansKRMedium from "./fonts/NotoSansKR/NotoSansKR-Medium.otf";
import NotoSansKRMediumwoff from "./fonts/NotoSansKR/NotoSansKR-Medium.woff";
import NotoSansKRMediumwoff2 from "./fonts/NotoSansKR/NotoSansKR-Medium.woff2";

import NotoSansKRBold from "./fonts/NotoSansKR/NotoSansKR-Bold.otf";
import NotoSansKRBoldwoff from "./fonts/NotoSansKR/NotoSansKR-Bold.woff";
import NotoSansKRBoldwoff2 from "./fonts/NotoSansKR/NotoSansKR-Bold.woff2";

import Lora from "./fonts/Lora/static/Lora-Regular.ttf";
import LoraVari from "./fonts/Lora/Lora-VariableFont_wght.ttf";

// prettier-ignore
export const reset = css`
@font-face { 
  font-family: 'SansKR'; 
  src:url(${NotoSansKRRegular});
  src: url(${NotoSansKRRegularwoff}) format(‘woff’), 
    url(${NotoSansKRRegularwoff2}) format(‘woff’);
  font-weight: normal;  
  font-style: normal;
  font-size: 10px;
}
@font-face { 
  font-family: 'SansKR'; 
  src:url(${NotoSansKRLight});
  src: url(${NotoSansKRLightwoff}) format(‘woff’), 
    url(${NotoSansKRLightwoff2}) format(‘woff’);
  font-weight: 300;  
  font-style: normal;
  font-size: 10px;
}
@font-face { 
  font-family: 'SansKR'; 
  src:url(${NotoSansKRMedium});
  src: url(${NotoSansKRMediumwoff}) format(‘woff’), 
    url(${NotoSansKRMediumwoff2}) format(‘woff’);
  font-weight: 500; 
  font-style: normal;  
}
@font-face { 
  font-family: 'SansKR'; 
  src:url(${NotoSansKRBold});
  src: url(${NotoSansKRBoldwoff}) format(‘woff’), 
    url(${NotoSansKRBoldwoff2}) format(‘woff’);
  font-weight: bold;   
  font-style: normal;
}
@font-face { 
  font-family: 'Lora', serif; 
  src:url(${Lora})  format('truetype');
  src:url(${LoraVari})  format('truetype');
  font-weight: normal;  
  font-style: normal;
  font-size: 10px;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video, input, textarea {
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  box-sizing: border-box;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
  font-family: 'SansKR'; 
  font-size : 14px;
  background : #fefefe;
  color: #333;

  @media (max-width: 860px) {
    font-size : 13px;
  }
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  text-decoration: none; 
  outline: none;
  color: #1b1b1b;
}
a:hover, a:active {text-decoration: none;}
button {
  border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    background: transparent;
    color: inherit;
    font: inherit;
    
    line-height: normal;
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;
    -webkit-appearance: none;
}
`

export default createGlobalStyle`${reset}`;
