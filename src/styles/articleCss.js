import styled from 'styled-components'

const Box = {
  Article: styled.article`
    min-height: 100vh;
    width: 100%;
    display: table;
    text-algin: center;
    border:1px solid #fff;
    overflow: hidden;
  `,
  Div: styled.div`
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    border:3px solid #fff;
    margin: 0 auto;
    position:relative;
    `,
  DivItem: styled.div`
  display: inline-block;
  margin: 0 auto;
  text-align: left;
  width : 80%;
  max-width: 1180px;
  `,
  Label: styled.h2`
  width: 100%;
  text-align : center;
  font-size : 1.1rem;
  font-weight : bold;
  color: #3e3e3e;
  `,
  HR: styled.hr`
    width: 100%;
  `,
};

export default Box;