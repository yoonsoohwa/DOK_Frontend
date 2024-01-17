import styled from "styled-components";

export const MainDiv = styled.div`
  margin: 10% auto;
  width: 700px;
  height: 100%;
  border: black solid 1px;
  border-radius: 16px;
`;

export const LoginDiv = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > p {
    margin-top: 11.5%;
    font-size: 24px;
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  width: 100%;
  align-items: center;

  margin: 0 0 0 40%;
  position: relative;

  .emailButton {
    position: absolute;
    left: 310px;
    top: 79px;
  }

  .addressButton {
    position: absolute;
    left: 310px;
  }
`;

export const Agreement = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  margin: 0 0 0 40%;
`;