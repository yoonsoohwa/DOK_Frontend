import styled from 'styled-components';

export const ReviewBox = styled.div`
  width: 100%;
  border-top: 2px #8e8e8e solid;
  margin-top: 80px;
  padding: 30px 26px;
  box-sizing: border-box;

  .label {
    position: absolute;
    top: -43px;
    background-color: #fff;
    padding: 0 4px;
    color: #8e8e8e;
    font-weight: 500;
  }

  .top {
    display: flex;
    justify-content: space-between;
    position: relative;
    margin-bottom: 14px;

    .left {
      display: flex;
      align-items: center;
      font-size: 20px;
      font-weight: 500;

      > * {
        margin-right: 8px;
      }
    }

    .right {
      font-size: 14px;
      color: #8e8e8e;
      padding: 2px 0;
    }

    .user-img {
      width: 35px;
      height: 35px;
    }
  }
`;
