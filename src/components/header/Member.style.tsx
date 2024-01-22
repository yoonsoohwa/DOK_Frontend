import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const BorderDiv = styled.div`
  position: fixed;
  width: 100%;
  height: 80px;
  z-index: 999;
  box-shadow: 0 1px 6px 0 #00000010;
  background-color: #ffffff;
`;

export const MainDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  flex-shrink: 1;
  padding-right: 6px;
  box-sizing: border-box;

  > img {
    margin-bottom: 3.5%;
  }
`;

export const CatagoryDiv = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  justify-content: flex-start;
  flex: 2;
  margin: 24px 0 0 4vw;
  font-size: 24px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  img {
    visibility: hidden;
  }

  div:nth-child(1):hover {
    > img {
      visibility: visible;
    }
  }

  div:nth-child(2):hover {
    > img {
      visibility: visible;
    }
  }

  div:nth-child(3):hover {
    > img {
      visibility: visible;
    }
  }

  & > div {
    margin: 0 2.5vw;

    & > img {
      position: fixed;
      transform: translateX(-50%);
      top: 15px;
      z-index: -1;
    }
  }
`;

export const SubCatagoryImg = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
  margin: 25px 0 0 0;
  font-size: 18px;

  & > div {
    margin: 0 5% 0 5%;
  }
  & > div:first-child > img {
    width: 40%;
    margin: 0 0 0 45%;
  }
`;

export const StyledLink = styled(Link)`
  color: #333333;

  &:hover {
    > img {
      visibility: visible;
    }
  }

  & > img {
    position: fixed;
    transform: translateX(-50%);
    top: 15px;
    z-index: -1;
  }
`;

export const SubCatagoryDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;

  margin: 32px 0 0 0;
  font-size: 18px;

  & > div {
    margin: 0 0 0 5%;
  }
`;

export const LogOutStyledLink = styled(Link)`
  color: black;
  &:hover {
    > img {
      visibility: visible;
    }
  }
`;
