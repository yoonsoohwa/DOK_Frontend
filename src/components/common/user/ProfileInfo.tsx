import { styled } from 'styled-components';
import defaultImg from '/svg/user_image1.svg';
import { UserNickname } from './UserNickname';
import timeDiff from '../../../utils/timeDiff';
import { useEffect, useState } from 'react';

interface ProfileInfoProps {
  userImg?: string;
  nickname: string;
  time: Date | string;
  size?: 'small';
}

export function ProfileInfo({ userImg, nickname, time, size }: ProfileInfoProps) {
  const [userImage, setUserImage] = useState(userImg);

  useEffect(() => {
    const arr = userImg?.split('.');
    const type = arr?.[arr.length - 1];
    if (type !== 'jpg' && type !== 'jpeg' && type !== 'png' && type !== 'svg') {
      setUserImage(defaultImg);
    }
  }, []);

  return (
    <PostUser className={size}>
      <img className="user-img" src={userImage} />
      <UserInfo>
        <UserNickname nickname={nickname} />
        <span>{timeDiff(time.toString())}</span>
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
