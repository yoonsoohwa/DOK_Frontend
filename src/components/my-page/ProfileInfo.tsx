import { Rating } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from 'store/index';
import { Address, Img, Name, TotalFrame, WalkInfo } from './ProfileInfo.style';

// 마이페이지 상단 User의 프로필 정보 입니다.
// User 닉네임, 주소, 회원등급, 산책평점, 산책횟수가 나타납니다.
export const ProfileInfo = () => {
  const { user } = useSelector((state: RootState) => state.user); 
  return (
    <>
      <TotalFrame>
        <Img>
          <img className="userImg" src={user.userImg || '/svg/user_image1.svg'} />
        </Img>
        <div>
          <Name>
            <div>{user.nickname}</div>
          </Name>
          {user.address && (
            <Address>
              {user.address?.text.split(' ')[0]} {user.address?.text.split(' ')[1]}
            </Address>
          )}
          <WalkInfo>
            <div className='member'>
              일반회원
            </div>
            <div className='score'>
              산책평점 <Rating value={4.3} precision={0.5} readOnly sx={{fontSize:"16px"}} />
            </div>
            <div className='number'>
              산책횟수 32회
            </div>
          </WalkInfo>
        </div>
      </TotalFrame>
    </>
  );
};