import { styled } from "styled-components";
import petIcon from "../../../../public/svg/Pets.svg";
import footprintImg from "../../../../public/image/발자국6개.png";
import dogwalkImg from "../../../../public/svg/산책하는강아지와사람.svg";
import React from "react";

export function ListPageHeader() {
  return (
    <Section>
      <InnerBox>
        <img className="pet-image" src={petIcon} />
        <TitleBox>
          <h1>산책 인증</h1>
          <div>
            이웃 주민들과 가깝고 따뜻한 교류를 경험해보세요.
            <br />
            우리 아이의 산책이 어땠는지 직접 확인해 보세요!
          </div>
        </TitleBox>
        <img className="footprint" src={footprintImg} />
        <RightBox>
          <img className="dogwalk" src={dogwalkImg} />
        </RightBox>
      </InnerBox>
    </Section>
  );
}

const Section = styled.div`
  width: 100%;
  height: 253px;
  background-color: ${({ theme }) => theme.main2};
`;

const InnerBox = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1140px;
  margin: 0 auto;
  box-sizing: border-box;
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: end;

  .pet-image {
    display: block;
    position: absolute;
    top: -80px;
    left: -30px;
  }

  .footprint {
    width: 50%;
    min-width: 0px;
  }
`;

const TitleBox = styled.div`
  z-index: 999;
  width: 430px;
  flex-shrink: 0;
  padding: 0 0 50px 80px;
`;

const RightBox = styled.div`
  width: 290px;
`;
