import { styled } from "styled-components";
import React from "react";
import userImage from "/temp/뽀삐.png";

export function Profile({ size }: { size?: "small" }) {
  return (
    <PostUser className={size}>
      <img className="user-img" src={userImage} />
      <UserInfo>
        <div>I am 진이에요wlsdldpdydpdydpdy</div>
        <span>45분 전</span>
      </UserInfo>
    </PostUser>
  );
}

const PostUser = styled.div`
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
      @media screen and (max-width: 768px) {
        font-size: 14px;
      }
    }

    span {
      font-size: 11px;
    }
  }
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 5px;
  font-size: 20px;
  font-weight: 500;
  line-height: 26px;
  width: 100%;

  div {
    width: 70%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  span {
    color: #8e8e8e;
    font-size: 14px;
    font-weight: 400;
  }
`;
