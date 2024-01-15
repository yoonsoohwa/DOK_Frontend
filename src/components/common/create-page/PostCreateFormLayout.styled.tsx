import styled from 'styled-components';

export const FormLayout = styled.div`
  width: 100%;
  box-sizing: border-box;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;

  > h2 {
    font-size: 40px;
    font-weight: 00;
    margin: 60px 0 40px;
  }

  .contents {
    background: white;
    border: 3px solid ${({ theme }) => theme.main2};
    width: 100%;
    box-sizing: border-box;
    border-radius: 10px;
    padding: 50px 80px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  width: 180px;
  margin: 20px 0;
  justify-content: space-around;
`;
