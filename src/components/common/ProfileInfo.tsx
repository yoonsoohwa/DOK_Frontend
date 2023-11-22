import { styled } from "styled-components";
import userImage from "/temp/뽀삐.png";
import { UserNickname } from "./UserNickname";
import timeDiff from "../../utils/timeDiff";

interface type {
  image?: string;
  nickname: string;
  time: string;
  size?: "small";
}

export function Profile({ image, nickname, time, size }: type) {
  return (
    <PostUser className={size}>
      <img className="user-img" src={image || userImage} />
      <UserInfo>
        <UserNickname nickname={nickname} />
        <span>{timeDiff(time)}</span>
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

    > span {
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
  overflow: hidden;

  > span {
    color: #8e8e8e;
    font-size: 14px;
    font-weight: 400;
  }
`;
