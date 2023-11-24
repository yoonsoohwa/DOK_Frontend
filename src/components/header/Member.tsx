import React, { useEffect, useState } from "react";
import header_logo from "/svg/header_logo.svg";
import { styled } from "styled-components";
import { Bookmark } from "./Bookmark";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

export const MemberHeader = () => {
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
            <SubCatagoryImg>
              <div>
                <Bookmark />
              </div>
              <div>로그아웃</div>
            </SubCatagoryImg>
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
 
  @media (max-width: 768px) {
    font-size: 20px;
  }

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

const SubCatagoryImg = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 2;
  margin: 32px 0 0 0;
  font-size: 18px;

  & > div {
    margin: 0 0 0 5%;
  }
  & > div:first-child > img {
    width: 40%;
    margin: 0 0 0 45%;
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
  
`;
