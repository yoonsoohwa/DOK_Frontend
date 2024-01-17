import * as styled from './ProfileInfo.styled';
import { useEffect, useState } from 'react';
import defaultImg from '/svg/user_image1.svg';
import { UserNickname } from './UserNickname';
import timeDiff from '../../../utils/timeDiff';

interface ProfileInfoProps {
  userImg?: string;
  nickname: string;
  time: Date | string;
  size?: 'small';
}

export function ProfileInfo({ userImg, nickname, time, size }: ProfileInfoProps) {
  const [userImage, setUserImage] = useState(userImg);

  useEffect(() => {
    // 이미지 데이터가 정상인지 확인
    const arr = userImg?.split('.');
    const type = arr?.[arr.length - 1];
    if (type !== 'jpg' && type !== 'jpeg' && type !== 'png' && type !== 'svg') {
      // 정상적인 데이터가 아니면 기본 이미지로 변경
      setUserImage(defaultImg);
    }
  }, []);

  return (
    <styled.PostUser className={size}>
      <img className="user-img" src={userImage} />
      <styled.UserInfo>
        <UserNickname nickname={nickname} />
        <span>{timeDiff(time.toString())}</span>
      </styled.UserInfo>
    </styled.PostUser>
  );
}
