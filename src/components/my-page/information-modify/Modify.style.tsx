import styled from 'styled-components';

export const MainContainer = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  width: 600px;
  padding: 30px 0;

  @media screen and (max-width: 600px) {
    width: 425px;
  }
`;

export const TabContainer = styled.nav`
  width: 100%;
  display: flex;
`;

export const ModifyTab = styled.div`
  height: 70px;
  width: 100%;
  text-align: center;
  border: #fcd11e dashed 3px;
  position: relative;
  z-index: 1;

  &:first-of-type {
    border-top-left-radius: 10px;
  }

  &:last-of-type {
    border-top-right-radius: 10px;
  }

  > span {
    display: block;
    padding-top: 14px;
    font-size: 20px;
    font-weight: 500;
  }

  &.selected {
    border-style: solid;
    z-index: 5;
    background-color: #fff;
    border-bottom: 0px;
  }
`;

export const TabImg = styled.img<{ $align: 'left' | 'right' }>`
  position: absolute;
  top: -3px;
  ${(props) => props.$align} : 280px;
  z-index: 5;

  @media screen and (max-width: 600px) {
    ${(props) => props.$align} : 190px;
  }
`;

export const ModifyContainer = styled.div`
  border: #fcd11e solid 3px;
  border-radius: 10px;
  margin-top: -15px;
  position: relative;
  z-index: 3;
  background: #fff;
`;
