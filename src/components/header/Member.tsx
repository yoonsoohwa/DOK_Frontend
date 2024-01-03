import React, { useEffect, useState } from 'react';
import header_logo from '/svg/header_logo.svg';
import { styled } from 'styled-components';
import { Bookmark } from './Bookmark';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, setUser } from 'store/index';
import { initUserType } from '../../types';
import { CertificationCreateIcon } from './CertificationCreate';

export const MemberHeader = () => {
  // 유저가 로그인 됐는지 확인하는 로직
  const { user } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const headerHover = '/svg/header_hover.svg';
  const { pathname } = useLocation();

  // 그냥 Link로 작성 시 nav바(매칭,인증,마이페이지 카테고리)에서 작업한 css가 깨짐에 따라
  // header 로고에만 Link고 나머지는 StyledLink로 작성

  const logOut = async () => {
    await fetch('/api/users/signOut', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });
    dispatch(setUser(initUserType));
    window.location.reload();
  };

  return (
    <>
      <BorderDiv className="MuiAppBar-root MuiAppBar-colorPrimary MuiAppBar-positionFixed">
        <MainDiv>
          <Link to={'/'}>
            <img src={header_logo} />
          </Link>
          <CatagoryDiv>
            {/* 240102 */}
            <div>
              <StyledLink to={'/userinfo'}>
                유저마이페이지
                {pathname === '/userinfo' ? <img src={headerHover} style={{ visibility: 'visible' }} /> : <img src={headerHover} />}
              </StyledLink>
            </div>
            {/* 240102 */}
            <div>
              <StyledLink to={'/matching'}>
                매칭
                {pathname === '/matching' ? <img src={headerHover} style={{ visibility: 'visible' }} /> : <img src={headerHover} />}
              </StyledLink>
            </div>
            <div>
              <StyledLink to={'/certification'}>
                인증
                {pathname === '/certification' ? <img src={headerHover} style={{ visibility: 'visible' }} /> : <img src={headerHover} />}
              </StyledLink>
            </div>
            {user._id && (
              <div>
                <StyledLink to={'/mypage'}>                
                  마이페이지
                  {pathname === '/mypage' ? <img src={headerHover} style={{ visibility: 'visible' }} /> : <img src={headerHover} />}
                </StyledLink>
              </div>
            )}
          </CatagoryDiv>
          {user._id ? (
            <SubCatagoryImg>
              <div>{/* <Bookmark /> */}</div>
              <CertificationCreateIcon />
              <StyledLink to={'/'}>
                <div onClick={logOut}>로그아웃</div>
              </StyledLink>
            </SubCatagoryImg>
          ) : (
            <SubCatagoryDiv>
              <LogOutStyledLink to={'/login'}>
                <div className="login">로그인</div>
              </LogOutStyledLink>
              <LogOutStyledLink to={'/signup'}>
                <div className="logOut">회원가입</div>
              </LogOutStyledLink>
            </SubCatagoryDiv>
          )}
        </MainDiv>
      </BorderDiv>
    </>
  );
};

const BorderDiv = styled.div`
  position: fixed;
  width: 100%;
  /* padding-bottom: 10px; */
  height: 80px;
  z-index: 999;
  /* 그림자의 수평 수직 흐림 //불투명도      그림자 투명도 */
  box-shadow: 0 1px 6px 0 #00000010;
  background-color: #ffffff;
  padding-right: 19px;
  overflow: hidden;
`;

const MainDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  flex-shrink: 1;
  padding-right: 6px;
  box-sizing: border-box;

  > img {
    margin-bottom: 3.5%;
  }
`;

const CatagoryDiv = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  justify-content: flex-start;
  flex: 2;
  margin: 24px 0 0 4vw;
  font-size: 24px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  img {
    visibility: hidden;
  }

  div:nth-child(1):hover {
    > img {
      visibility: visible;
    }
  }

  div:nth-child(2):hover {
    > img {
      visibility: visible;
    }
  }

  div:nth-child(3):hover {
    > img {
      visibility: visible;
    }
  }

  & > div {
    margin: 0 2.5vw;

    & > img {
      position: fixed;
      transform: translateX(-50%);
      top: 15px;
      z-index: -1;
    }
  }
`;

const SubCatagoryImg = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
  margin: 25px 0 0 0;
  font-size: 18px;

  & > div {
    margin: 0 5% 0 5%;
  }
  & > div:first-child > img {
    width: 40%;
    margin: 0 0 0 45%;
  }
`;

const StyledLink = styled(Link)`
  color: #333333;

  &:hover {
    > img {
      visibility: visible;
    }
  }

  & > img {
    position: fixed;
    transform: translateX(-50%);
    top: 15px;
    z-index: -1;
  }
`;

const SubCatagoryDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;

  margin: 32px 0 0 0;
  font-size: 18px;

  & > div {
    margin: 0 0 0 5%;
  }
`;

const LogOutStyledLink = styled(Link)`
  color: black;
  &:hover {
    > img {
      visibility: visible;
    }
  }
`;
