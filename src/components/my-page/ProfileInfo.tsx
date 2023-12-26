import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/index';
import { styled } from 'styled-components';

// 프로필정보 페이지에 프로필 인포가 아니라 그냥 다른 인포(강아지인포,알바생(핸들러)인포)가 올 수도 있는데
// "프로필"인포기 때문에 프로필인포로 지음
export const ProfileInfo = () => {
  const { user } = useSelector((state: RootState) => state.user);
 
  return (
    <>
      <TotalFrame>
        <Img>
          <img className="user-img" src={user.userImg || '/svg/user_image1.svg'} />
        </Img>
        <div>
          <Name>
            <div>{user.nickname}</div>
            {/* <div><img src="/svg/profile_badge.svg"/></div> */}
          </Name>
          {user.address && (
            <Adress>
              {user.address?.text.split(' ')[0]} {user.address?.text.split(' ')[1]}
            </Adress>
          )}
          <WalkInfo>
            {/* <div>{user.nickname}</div> */}
            {/* <div>산책횟수 : 32</div> */}
            일반회원
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

const Adress = styled.div`
  /* 최종확인할 때 해당 style component에 추가되는 사항 없으면 삭제 */
  font-size: 20px;
  padding: 4px 0 0 4px;
  color: gray;
`;

const WalkInfo = styled.div`
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
`;
