import styled from 'styled-components'

const Box = {
  Article: styled.article`
    height: 100vh;
    background: skyblue;
    width: 100%;
    display: table;
    text-algin: center;
    border:1px solid #fff;
  `,
  Div: styled.div`
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    border:3px solid #fff;
    margin: 0 auto;
  `,
  DivItem: styled.div`
    display: inline-block;
    margin: 0 auto;
    text-align: left;
  `
};

export default Box;