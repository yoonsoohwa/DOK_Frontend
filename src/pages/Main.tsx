import { styled } from 'styled-components';
import React, { useEffect } from 'react';
import { MainInfo } from '../components/main/MainInfo';
import { MainSection1 } from '../components/main/MainSection1';
import { MainSection2 } from '../components/main/MainSection2';
import { MainSection3 } from '../components/main/MainSection3';
import { useDispatch } from 'react-redux';
import { AppDispatch, setMainCertificationPosts, setMainMatchingPosts, setMainDogs, setMainMatchingPostCount } from '../store';

export function MainPage() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    (async () => {
      const res = await fetch(`http://kdt-sw-6-team01.elicecoding.com/api/main`);
      const data = await res.json();
      console.log(data);

      const [mathingPostCount, dogs, matchingPosts, certificationPosts] = data;

      dispatch(setMainMatchingPostCount(mathingPostCount));
      dispatch(setMainDogs(dogs.slice(0, 6)));
      dispatch(setMainMatchingPosts(matchingPosts.slice(0, 3)));
      dispatch(setMainCertificationPosts(certificationPosts.slice(0, 3)));
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
