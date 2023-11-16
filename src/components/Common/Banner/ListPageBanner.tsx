import { styled } from "styled-components";
import petIcon from "/svg/Pets.svg";
import footprintImg from "/image/발자국6개.png";
import dogwalkImg from "/svg/산책하는강아지와사람.svg";
import React from "react";

export function ListPageBanner({ title, desc, children }: { title: string; desc: JSX.Element; children: React.ReactNode }) {
  return (
    <Section>
      <InnerBox>
        <img className="pet-image" src={petIcon} />
        <TitleBox>
          <h1>{title}</h1>
          <div>{desc}</div>
        </TitleBox>
        <img className="footprint" src={footprintImg} />
        <RightBox>{children}</RightBox>
      </InnerBox>
    </Section>
  );
}

const Section = styled.div`
  width: 100%;
  height: 315px;
  box-sizing: border-box;
  padding-bottom: 30px;
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
    padding: 0 20px 5px 2px;
    @media screen and (max-width: 748px) {
      display: none;
    }
  }
`;

const TitleBox = styled.div`
  z-index: 999;
  width: fit-content;
  flex-shrink: 0;
  padding: 0 0 40px 80px;

  h1 {
    font-size: 50px;
    font-weight: 700;
  }

  div {
    font-size: 19px;
    font-weight: 400;
    color: #3e3e3e;
  }
`;

const RightBox = styled.div`
  width: 180px;
  max-height: 200px;
  flex-shrink: 0;
  padding: 50px 60px 30px 0;

  @media screen and (max-width: 748px) {
    display: none;
  }
`;
