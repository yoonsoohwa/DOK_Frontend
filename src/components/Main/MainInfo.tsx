import { styled } from "styled-components";
import React from "react";
import mainTopImage from "../../../public/main-header-image.svg";
import logoImage from "../../../public/DOK LOGO.png";
import { Pets } from "@mui/icons-material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import MouseOutlinedIcon from "@mui/icons-material/MouseOutlined";

export function MainInfo() {
  return (
    <Section>
      <MainTopImage>
        <img src={mainTopImage} />
      </MainTopImage>
      <Contents>
        <LeftBox>
          <div>
            강아지 산책 핸들러 매칭 전문 사이트, <span className="color-sub">도크</span>
          </div>
          <div>
            지금 내 반려동물과 산책할 파트너를 만나보세요
            <br />
            믿을만한 전문가와 내 이웃이 기다리고 있습니다
          </div>
          <div>
            <div className="color-sub">120</div>
            <div>현재 매칭 신청 수</div>
          </div>
          <div>
            <button className="pointer">
              <Pets className="pet" />
              <span>핸들러 구하러 가기</span>
              <KeyboardArrowRightIcon />
            </button>
            <button className="pointer">
              <Pets className="pet" />
              <span>산책 인증 보러 가기</span>
              <KeyboardArrowRightIcon />
            </button>
          </div>
        </LeftBox>
        <img src={logoImage} />
      </Contents>
      <Scroll>
        <MouseOutlinedIcon className="mouse" />
        scroll
      </Scroll>
    </Section>
  );
}

const Section = styled.div`
  margin: 0 auto;
  .color-main {
    color: ${({ theme }) => theme.main};
  }
  .color-sub {
    color: ${({ theme }) => theme.sub};
  }
`;

const MainTopImage = styled.div`
  width: 100%;
  height: 100%;

  margin: 0 auto;
  position: absolute;
  z-index: -1;

  img {
    width: 100%;
    max-width: 1440px;
    margin: auto;
    display: block;
  }
`;

const Contents = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap-reverse;
  padding: 80px 0;

  img {
    align-self: center;
  }
`;

const LeftBox = styled.div`
  width: 100%;
  max-width: 700px;

  > div:nth-child(1) {
    color: #8e8e8e;
    font-weight: 700;
    font-size: 20px;

    margin-top: 50px;
  }

  > div:nth-child(2) {
    font-weight: 800;
    font-size: 32px;
    letter-spacing: 0.02em;

    margin-top: 10px;
  }

  > div:nth-child(3) {
    display: flex;
    align-items: end;
    font-family: "Gaegu";

    margin-top: 60px;

    > div:nth-child(1) {
      height: 120px;
      font-weight: 700;
      font-size: 128px;
      letter-spacing: -0.1em;
      margin-right: 10px;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    > div:nth-child(2) {
      width: 130px;
      background: linear-gradient(to top, ${({ theme }) => theme.main3} 50%, transparent 50%);
      font-weight: 700;
      font-size: 17px;
      letter-spacing: 0px;

      box-sizing: border-box;
      padding: 0 5px;
    }
  }

  > div:nth-child(4) {
    display: flex;

    margin-top: 30px;

    button {
      width: 335px;
      height: 74px;
      margin: 0 10px;

      background: #fffefa;
      box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.1);
      border: none;
      border-radius: 20px;

      font-family: "Gaegu";
      font-weight: 700;
      font-size: 24px;
      letter-spacing: -0.02em;

      color: #3e3e3e;

      .pet {
        color: #8e8e8e;
        margin: 0 8px 4px 0;
      }

      display: flex;
      align-items: center;
      justify-content: center;
    }

    button:nth-child(1):hover {
      * {
        color: ${({ theme }) => theme.main};
      }
    }

    button:nth-child(2) {
      background-color: #fafcff;
    }

    button:nth-child(2):hover {
      * {
        color: ${({ theme }) => theme.sub3};
      }
    }
  }
`;

const Scroll = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: ${({ theme }) => theme.gray};
  margin: 50px 0 30px;
  font-size: 12px;
`;
