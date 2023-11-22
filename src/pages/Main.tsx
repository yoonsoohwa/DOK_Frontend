import { styled } from "styled-components";
import React, { useEffect } from "react";
import { MainInfo } from "../components/main/MainInfo";
import { MainSection1 } from "../components/main/MainSection1";
import { MainSection2 } from "../components/main/MainSection2";
import { MainSection3 } from "../components/main/MainSection3";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState, setMainCertificationPosts, setMainMatchingPosts, setMainDogs } from "../store";

export function MainPage() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    (async () => {
      const res = await fetch("src/api/mock/main.json");
      const data = await res.json();

      dispatch(setMainDogs(data.dogs));
      dispatch(setMainMatchingPosts(data.matchingPosts));
      dispatch(setMainCertificationPosts(data.certificationPosts));
    })();
  }, []);

  return (
    <MainPageComponent>
      <MainInfo />
      <MainSection1 />
      <MainSection2 title="오늘의 매칭 글" color="main" />
      <MainSection3 title="따뜻한 후기" color="sub" />
    </MainPageComponent>
  );
}

const MainPageComponent = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  box-sizing: inherit;
`;
