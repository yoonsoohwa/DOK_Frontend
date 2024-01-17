import { IconButton } from '@mui/material';
import styled from 'styled-components';

export const DetailBox = styled.div`
  width: 80vw;
  max-width: 180vh;
  height: calc(100vh - 100px);
  display: flex;
  position: relative;

  &.hidden {
    display: none;
  }

  .close {
    position: absolute;
    right: 10px;
    top: 10px;
    z-index: 10;
  }

  @media screen and (max-width: 1000px) {
    flex-direction: column;

    > div {
      width: 100%;
    }
  }
`;

export const Left = styled.div`
  width: 45%;
  height: 100%;
  position: relative;
  overflow: hidden;
  background-color: #f4f4f4;
  display: flex;
  align-items: end;

  .image-box {
    width: 100%;
    height: 100%;
    position: absolute;
  }

  .image {
    float: left;
    height: 100%;
    transition: all 0.4s ease-in-out;
  }

  .MuiMobileStepper {
    &-dots {
      align-self: end;
      z-index: 999;
    }
    &-dot {
      width: 0.6em;
      height: 0.6em;
      margin: 0 4px;
    }
    &-dotActive {
      background-color: ${({ theme }) => theme.main};
    }
  }
`;

export const SlideIconButton = styled(IconButton)`
  svg {
    width: 1.5em;
    height: 1.5em;
    background-color: ${({ theme }) => theme.main};
    opacity: 70%;
    border-radius: 50%;
  }
  &.Mui-disabled svg {
    background-color: ${({ theme }) => theme.main2};
    opacity: 60%;
  }
`;

export const Right = styled.div`
  width: 55%;
  height: 100%;
  overflow-y: auto;
  position: relative;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Top = styled.div`
  margin: 30px 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: calc(100% - 40px);
`;

export const Contents = styled.div`
  font-size: 16px;
  margin: 0 30px 40px;
  line-height: 26px;
  font-weight: 500;
  box-sizing: border-box;

  > div {
    display: flex;
    flex-wrap: wrap;
    margin: 20px 0;
    box-sizing: border-box;

    .icon {
      width: 28px;
      height: 28px;
      margin-right: 6px;
      color: #3e3e3e;
    }

    .title {
      width: 80px;
      margin-right: 24px;
      color: #6b6b6b;
    }
  }

  .detail {
    width: 100%;
    margin: 6px 0 0;
    padding: 30px 26px;
    box-sizing: border-box;
    line-height: 170%;

    font-weight: 400;
    font-family: sans-serif;

    position: relative;
    background: linear-gradient(-135deg, transparent 1.3em, #eff5f8 0);

    border-radius: 0.5em;
  }

  .detail::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;

    width: 0;
    height: 0;
    border-bottom: 30px solid #d5e5f0;
    border-right: 30px solid transparent;
    box-shadow: -0.2em 0.2em 0.3em -0.1em rgba(0, 0, 0, 0.15);
  }
`;
