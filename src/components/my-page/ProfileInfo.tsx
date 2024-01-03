import { Rating } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from 'store/index';
import { styled } from 'styled-components';

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

const TotalFrame = styled.div`
  display: flex;
  justify-content: flex-start;
  max-width: 1100px;
  margin: 5% auto 40px auto;
`;

const Img = styled.div`
  align-self: center;
  margin: 0 3% 0 1%;
  width: 140px;
  height: 140px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const Name = styled.div`
  display: flex;
  font-size: 42px;
  font-weight: 600;
  color: #2a2a2a;

  div {
    align-self: center;
  }

  div:nth-child(2) img {
    object-fit: contain;
    width: 35%;
  }
`;

const Address = styled.div`
  font-size: 20px;
  padding: 4px 0 0 4px;
  color: gray;
`;

const WalkInfo = styled.div`

  display: flex;

  .member {
    display: flex;
    padding: 4px 6px;
    margin: 8px 0 0 4px;
    width: fit-content;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.sub2};
    color: #fff;
    font-weight: 500;
    font-size: 14px;

    :nth-child(1) {
      margin-right: 5%;
    }
  }

  .score{
    margin: 4px ;
    font-size: 18px;
    padding: 4px 0 0 4px;
    color: gray;
  }
    
  .number{
    margin: 4px ;
    font-size: 18px;
    padding: 4px 0 0 0;
    color: gray;
  }

`;
