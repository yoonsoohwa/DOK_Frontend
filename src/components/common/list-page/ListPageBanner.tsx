import { styled } from "styled-components";
import petIcon from "/svg/pets.svg";
import footprintImg from "/image/six_footprint.png";
import dogwalkImg from "/svg/walking_dog.svg";
import React from "react";

interface ListPageBannerProps {
  title: string;
  desc: string;
  children: React.ReactNode;
  color?: "sub" | "sub2" | "sub3";
}

export function ListPageBanner({ title, desc, children, color }: ListPageBannerProps) {
  return (
    <Section color={color}>
      <InnerBox>
        <img className="pet-image" src={petIcon} />
        <TitleBox>
          <h1>{title}</h1>
          <div className="desc">{desc}</div>
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
  position: relative;
  padding-bottom: 30px;
  background-color: ${({ theme, color }) => (color ? theme[color] : theme.main2)};
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
    @media screen and (max-width: 950px) {
      display: none;
    }
  }
`;

const TitleBox = styled.div`
  z-index: 1;
  width: fit-content;
  flex-shrink: 0;
  padding: 0 0 40px 80px;

  h1 {
    font-size: 50px;
    font-weight: 700;
    padding: 30px 0;
  }

  .desc {
    font-size: 19px;
    font-weight: 400;
    color: #3e3e3e;
    white-space: pre-wrap;
  }

  @media screen and (max-width: 768px) {
    & {
      padding-left: 60px;
    }
  }
`;

const RightBox = styled.div`
  width: 180px;
  max-height: 200px;
  flex-shrink: 0;
  padding: 50px 60px 30px 0;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
