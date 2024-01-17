import styled from "styled-components";

export const TotalFrame = styled.div`
  display: flex;
  justify-content: flex-start;
  max-width: 1100px;
  margin: 5% auto 40px auto;
`;

export const Img = styled.div`
  align-self: center;
  margin: 0 3% 0 1%;
  width: 140px;
  height: 140px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Name = styled.div`
  display: flex;
  font-size: 42px;
  font-weight: 600;
  color: #2a2a2a;

  div {
    align-self: center;
  }

  div:nth-child(2) img {
    object-fit: contain;
    width: 35%;
  }
`;

export const Address = styled.div`
  font-size: 20px;
  padding: 4px 0 0 4px;
  color: gray;
`;

export const WalkInfo = styled.div`

  display: flex;

  .member {
    display: flex;
    padding: 4px 6px;
    margin: 8px 0 0 4px;
    width: fit-content;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.sub2};
    color: #fff;
    font-weight: 500;
    font-size: 14px;

    :nth-child(1) {
      margin-right: 5%;
    }
  }

  .score{
    margin: 4px ;
    font-size: 18px;
    padding: 4px 0 0 4px;
    color: gray;
  }
    
  .number{
    margin: 4px ;
    font-size: 18px;
    padding: 4px 0 0 0;
    color: gray;
  }

`;
