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
import { MainFrame, Section, SubFrame, TitleFrame } from './Matching.style';
import { myMatchingPostsUrl } from 'api/apiUrls';

export const Matching = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [openAlert, setOpenAlert] = useState(false);
  const { matchingPosts, matchingPostsCount } = useSelector((state: RootState) => state.matching);

  // 매칭 리스트 API 연동
  const addMatchingCardList = async () => {
    const res = await fetch(`${myMatchingPostsUrl}`, { credentials: 'include' });
    const data = await res.json();

    dispatch(setMatchingPostCount(Number(data[0])));
    dispatch(addMatchingPosts(data[1]));
  };

  // 오류시 alert
  const handleAlert = () => {
    setOpenAlert(false);
  };

  // 페이지 로드 시 해당 유저의 매칭글 불러오기
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
