import styled from 'styled-components';

export const PostUser = styled.div`
  width: 100%;
  display: flex;
  padding-bottom: 10px;
  align-items: center;

  &.small {
    .user-img {
      width: 36px;
      height: 36px;
    }

    div {
      font-size: 16px;
      line-height: 18px;
      font-weight: 400;
    }

    > span {
      font-size: 11px;
    }
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 5px;
  font-size: 20px;
  font-weight: 500;
  line-height: 26px;
  width: 100%;
  overflow: hidden;

  > span {
    color: #8e8e8e;
    font-size: 14px;
    font-weight: 400;
  }
`;
