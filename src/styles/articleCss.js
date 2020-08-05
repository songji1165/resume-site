import styled from 'styled-components'

const Box = {
  Article: styled.article`
    min-height: 100vh;
    width: 100%;
    display: table;
    text-algin: center;
    overflow: hidden;
    background: ${(props) => (props.theme ? props.theme : "none")};
    padding:0;
    position:relative;

    &:before {
      content: '';
      display: block;
      position:absolute;
      top:0;
      left:0;
      width: 100%;
      height: 50%;
      background: ${(props) => (props.img ? props.img : "none")};
      background-size : cover;
      opacity: ${(props) => (props.img ? "0.5" : "1")};

      @media (max-width: 860px) {
        background : none;
      }
    }
  `,
  Div: styled.div`
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    margin: 0 auto;
    position:relative;
    `,
  DivItem: styled.div`
  display: inline-block;
  margin: 0 auto;
  text-align: left;
  width : 80%;
  max-width: 1180px;
  @media (max-width: 860px) {
    width : 90%;
  }
  `,
  Label: styled.h2`
  width: 100%;
  font-size : 2rem;
  font-weight : 300;
  color: ${(props) => (props.color ? props.color : "#3e3e3e")};
  padding-top:3%;
  `,
  HR: styled.hr`
    width: 100%;
    box-shadow: 1px 2px 10px #d9d9d9
  `,
};

export default Box;