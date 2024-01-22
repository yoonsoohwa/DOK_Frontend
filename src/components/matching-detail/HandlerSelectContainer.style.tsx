import styled from "styled-components";

export const HandlerSelectLayout = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  gap: 10px;
`;

export const ButtonContainer = styled.div`
  flex-shrink: 0;
`;

export const SelectorLayout = styled.div`
  position: relative;
  width: 100%;
  height: 50px;

  > div {
    border: solid 1.5px ${({ theme }) => theme.sub3};
  }
`;

export const SelectButtonContainer = styled.button`
  width: 100%;
  height: 100%;
  padding: 0;
  background-color: #fff;
  border: 1px dashed ${({ theme }) => theme.sub2};
`;

export const HandlerListContainer = styled.div`
  max-height: 170px;
  position: absolute;
  right: 0;
  left: 0;
  z-index: 1;
  border: 1.5px solid ${({ theme }) => theme.sub3};

  &.scroll {
    overflow: scroll;
    overflow-x: hidden;
  }
`;
