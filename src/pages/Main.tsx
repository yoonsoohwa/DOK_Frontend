import { styled } from "styled-components";
import React, { useEffect } from "react";
import { MainInfo } from "../components/main/MainInfo";
import { MainSection1 } from "../components/main/MainSection1";
import { MainSection2 } from "../components/main/MainSection2";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState, setCertificationPosts, setMatchingPosts, setPets } from "src/store";

export function MainPage() {
  const { pets, matchingPosts, certificationPosts } = useSelector((state: RootState) => state.main);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(setPets(["aaa", "asd", "이뽀삐"]));
    dispatch(setMatchingPosts(["asd", "asd", "Qwe"]));
    dispatch(setCertificationPosts(["zzz", "qweqwe", "Zdfkshfka"]));
  }, []);

  return (
    <MainPageComponent>
      <MainInfo />
      <MainSection1 pets={pets} />
      <MainSection2 title="오늘의 매칭 글" contents={matchingPosts} color="main" />
      <MainSection2 title="따뜻한 후기" contents={certificationPosts} isRightTitle={true} color="sub" />
    </MainPageComponent>
  );
}

const MainPageComponent = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  box-sizing: inherit;
`;
