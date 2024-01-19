import styled from "styled-components";

export const FlexLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WalkDetailLayout = styled(FlexLayout)`
  width: 100%;
  max-width: 525px;
  justify-content: space-between;
  box-sizing: border-box;
`;

export const WalkInfoBox = styled(FlexLayout)`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.main4};
  border-radius: 8px;
  border: 1px dashed #fcd11e;
  padding: 35px 20px;
  justify-content: space-between;
  align-items: normal;
  box-sizing: border-box;
  gap: 10px;
`;

export const TextAlignLayout = styled(FlexLayout)`
  flex-direction: row;

  p > p {
    font-size: 14px;
    display: inline;
  }
`;

export const WalkInfoItem = styled(TextAlignLayout)`
  > div {
    flex-shrink: 0;
    align-self: flex-start;
  }
  span {
    width: 5.5rem;
    display: block;
    padding-left: 5px;
    font-weight: 700;
    font-size: 18px;
    color: #5e5e5e;
  }
  p {
    font-weight: 400;
  }

  @media screen and (max-width: 480px) {
    > div > span {
      font-size: 16px;
    }

    p {
      font-size: 14px;
    }
  }
`;

export const MapLayout = styled(FlexLayout)`
  align-items: normal;
  flex: 1;
  gap: 7px;
`;

export const HandlerContainer = styled.div`
  width: 100%;
  padding-top: 23px;
  display: flex;
  justify-content: center;
`;
