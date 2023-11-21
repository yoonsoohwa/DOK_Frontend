import React, { Children } from "react";
import { styled } from "styled-components";

interface type {
  title: string;
  contents: string[];
  isRightTitle?: boolean;
  color: string;
}

export function MainSection2({ title, contents, isRightTitle, color }: type) {
  return (
    <Section>
      <InnerBox $isRightTitle={isRightTitle ? true : false}>
        <Title color={color}>
          <h2>{title}</h2>
          <div className="send-text">자세히 보러가기</div>
        </Title>
        <Contents>{Children.toArray(contents.map((data) => <div className="content">{data}</div>))}</Contents>
      </InnerBox>
      <BackgroundBox color={color}></BackgroundBox>
    </Section>
  );
}

const top = 300;
const bottom = 280;

const Section = styled.div`
  position: relative; // sticky 가 relative를 만나야 끝남. 건드리지 말 것

  width: 100%;
  height: ${top + bottom}px;
  display: flex;
  justify-content: center;
  align-items: end;
`;

const InnerBox = styled.div<{ $isRightTitle: boolean }>`
  height: fit-content;
  display: flex;
  flex-direction: ${({ $isRightTitle }) => ($isRightTitle ? "row-reverse" : "row")};
  justify-content: center;
  align-items: end;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding: 80px 0 50px;
`;

const Title = styled.div<{ color: string }>`
  width: 300px;
  text-align: center;
  align-self: flex-start;
  margin: 0 20px;

  h2 {
    font-size: 40px;
    margin: 0;
    padding-top: 70px;
    color: ${({ theme, color }) => (color ? theme[color] : theme.main)};
  }

  .send-text {
    font-size: 20px;
    font-weight: 500;
    padding: 14px 0;
    color: #fff;
  }
`;

const Contents = styled.div`
  width: 60%;
  min-width: 800px;
  display: flex;
  justify-content: space-around;

  .content {
    width: 250px;
    height: 365px;
    text-align: center;
    line-height: 326px;
    background-color: #f0f0f0;
    border: 1px solid #000;
  }
`;

const BackgroundBox = styled.div<{ color: string }>`
  width: 100%;
  height: ${bottom}px;
  background-color: ${({ theme, color }) => (color ? theme[color] : theme.main)};
  position: absolute;
  top: ${top}px;
  z-index: -1;
`;
