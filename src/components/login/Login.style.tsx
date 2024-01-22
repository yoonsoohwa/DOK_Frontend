import styled from 'styled-components';

export const MainFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-self: center;
  margin: 10% auto;
  width: 600px;
  height: 460px;
  border: black solid 1px;
  border-radius: 16px;
`;

export const SubFrame = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > p {
    margin-bottom: 5%;
    font-size: 24px;
  }

  & > div {
    width: 70%;
  }

  div:nth-child(4),
  div:nth-child(5) {
    margin-bottom: 2%;
  }
`;