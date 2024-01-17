import { styled } from 'styled-components';
import { MatchingCard } from '../matching/Card';
import { TopBarTitle } from 'common/list-page/TopBarTitle';
import { CardListContainer } from '../../styles/CardListContainer.styled';
import { Children, useEffect, useState } from 'react';
import { AlertError } from 'common/alert/AlertError';
import { ScrollToTopButton } from 'common/button/ScrollTopButton';
import { addMatchingPosts, resetMatchingPosts, setMatchingPostCount } from 'store/matchingSlice';

import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'store/index';
import { EmptyData } from 'common/state/EmptyData';
import { Loading } from 'common/state/Loading';

export const Matching = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { matchingPosts, matchingPostsCount } = useSelector((state: RootState) => state.matching);

  const [openAlert, setOpenAlert] = useState(false);

  const addMatchingCardList = async () => {
    let url = `/api/mypage/myMatchingPosts`;

    const res = await fetch(url, { credentials: 'include' });
    const data = await res.json();

    dispatch(setMatchingPostCount(Number(data[0])));
    dispatch(addMatchingPosts(data[1]));
  };

  const handleAlert = () => {
    setOpenAlert(false);
  };

  useEffect(() => {
    dispatch(resetMatchingPosts());
    addMatchingCardList();
  }, []);

  return (
    <>
      <MainFrame>
        <TitleFrame>
          <TopBarTitle yellow={matchingPostsCount?.toString() || '0'} black="개의 매칭 요청을 했습니다." />
        </TitleFrame>
        <SubFrame>
          <Section>
            {!matchingPostsCount ? (
              matchingPostsCount === undefined ? (
                <Loading />
              ) : (
                <EmptyData />
              )
            ) : (
              <CardListContainer>
                {Children.toArray(
                  matchingPosts.map((post) => {
                    return <MatchingCard post={post} setOpenAlert={setOpenAlert} />;
                  }),
                )}
              </CardListContainer>
            )}
          </Section>
          <AlertError open={openAlert} onClick={handleAlert} desc={'핸들러 지원 요청이 있는 글은 수정/삭제가 불가능 합니다.'} />
          <ScrollToTopButton />
        </SubFrame>{' '}
      </MainFrame>
    </>
  );
};

const MainFrame = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

const SubFrame = styled.div`
  /* border: 5px solid black; */
  display: flex;
  width: 100%;
`;

const TitleFrame = styled.div`
  display: flex;
  margin: 50px 10px 20px;
`;

const Section = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
`;
