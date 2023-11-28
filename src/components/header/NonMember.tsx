import React, { useState } from "react";
import header_logo from "/svg/header_logo.svg";
import { styled } from "styled-components";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

export const NonMemberHeader = () => {
  const headerHover = "/svg/header_hover.svg";
  const { pathname } = useLocation();
  // 그냥 Link로 작성 시 nav바(매칭,인증,마이페이지 카테고리)에서 작업한 css가 깨짐에 따라
  // header 로고에만 Link고 나머지는 StyledLink로 작성
  
  return (
    <>
      <BorderDiv>
        <MainDiv>
          <Link to={"/"}>
            <img src={header_logo} />
          </Link>
          <CatagoryDiv>
          <div>
            <StyledLink to={"/matching"}>
              매칭
              {pathname === "/matching" ? <img src={headerHover} style={{visibility:"visible"}}/>: <img src={headerHover} />}
              </StyledLink>
            </div>
            <div>
            <StyledLink to={"/certification"}>
              인증
              {pathname === "/certification" ? <img src={headerHover} style={{visibility:"visible"}}/>: <img src={headerHover} />}
              </StyledLink>
            </div>
            <div>
            <StyledLink to={"/mypage"}>
              마이페이지
              {pathname === "/mypage" ? <img src={headerHover} style={{visibility:"visible"}}/>: <img src={headerHover} />}
              </StyledLink>
            </div>
          </CatagoryDiv>
          <SubCatagoryDiv>
            <StyledLink to={"/login"}>
              <div className="login">로그인</div>
            </StyledLink>
            <StyledLink to={"/"}>
              <div className="logOut">로그아웃</div>
            </StyledLink>
          </SubCatagoryDiv>
        </MainDiv>
      </BorderDiv>
    </>
  );
};

const BorderDiv = styled.div`
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  height: 80px;
  z-index: 999;
  box-shadow: 0 1px 6px 0 #d3d3d3;
  background-color: #ffffff;
`;

const MainDiv = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1024px;
  margin: 0 auto;

  > img {    
    margin-bottom: 3.5%;
  }
`;
const CatagoryDiv = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  flex: 2;
  margin: 27px 0 0 50px;
  font-size: 24px;
  font-weight: 700;

  img {
    visibility: hidden;
  }

  div:nth-child(1):hover{
    > img {
        visibility: visible;
    }
  }

  div:nth-child(2):hover{
    > img {
        visibility: visible;
    }
  }

  div:nth-child(3):hover{
    > img {
        visibility: visible;
    }
  }

  & > div {
    margin: 0 5% 0 5%;

    & > img {
      position: fixed;
      transform: translateX(-50%);
      top: 15px;
      z-index: -1;
    }
  }
`;
const SubCatagoryDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
  
  margin: 32px 0 0 0;
  font-size: 18px;

    & > div{
      margin: 0 0 0 5%;
    }
  
`;

const StyledLink = styled(Link)`
  color: black;
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

    & > div.login{
      margin-right: 30px;
    }
`;