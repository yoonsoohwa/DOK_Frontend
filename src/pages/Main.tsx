import { styled } from "styled-components";
import React from "react";
import { MainInfo } from "../components/main/MainInfo";
import { MainSection1 } from "../components/main/MainSection1";
import { MainSection2 } from "../components/main/MainSection2";

export function MainPage() {
  return (
    <MainPageComponent>
      <MainInfo />
      <MainSection1 pets={["1", "2", "3", "4", "5", "6"]} />
      <MainSection2 title="오늘의 매칭 글" contents={["ㅋㅋ", "ㅋㅋㅋ", "aaa"]} color="main" />
      <MainSection2 title="따뜻한 후기" contents={["ㅋㅋ", "ㅋㅋㅋ", "aaa"]} isRightTitle={true} color="sub" />
    </MainPageComponent>
  );
}

const MainPageComponent = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  box-sizing: inherit;
`;
