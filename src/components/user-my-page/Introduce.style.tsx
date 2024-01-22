import styled from "styled-components";

export const Writing = styled.div`
  display: flex;
  /* 개행문자 인식을 위한 코드 */
  white-space: pre-wrap;
  justify-content: space-between;
  margin: 3% 5% 0 3%;
  
  div:nth-child(1) {
    align-self: center;
    flex-wrap: wrap;
    width: 750px;
  }

  div:nth-child(2) {
    align-self: center;
  }
`;

export const Dog = styled.div`
  p:nth-child(1) {
    font-size: 20px;
    font-weight: bold;
    margin: 50px 10px 20px;
  }
`;

export const Add = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;