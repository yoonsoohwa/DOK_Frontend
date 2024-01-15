import { styled } from 'styled-components';
import { MatchingBanner } from '../components/matching/Banner';
import { useState, useEffect, Children } from 'react';
import { AppDispatch, RootState, addMatchingPosts, resetMatchingPosts, setFilter, setMatchingPostCount, setMatchingPostEditId } from '../store';
import { useDispatch, useSelector } from 'react-redux';
import { MatchingCard } from '../components/matching/Card';
import { ScrollToTopButton } from '../components/common/button/ScrollTopButton';
import { ListPageTopBar } from '../components/common/list-page/ListPageTopBar';
import { CardListContainer } from '../styles/CardListContainer';
import { useInView } from 'react-intersection-observer';
import dayjs from 'dayjs';
import { Loading } from 'common/state/Loading';
import { EmptyData } from 'common/state/EmptyData';
import { matchingPostListUrl } from 'api/apiUrls';

export function MatchingListPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { matchingPosts, matchingPostsCount } = useSelector((state: RootState) => state.matching);
  const { filter } = useSelector((state: RootState) => state.filter);

  const [scrollRef, inView] = useInView();
  const [page, setPage] = useState<number>(1);

  // 매칭 글 데이터 불러오기
  const addMatchingCardList = async () => {
    // 모든 데이터를 다 불러왔을 경우 리턴
    if (matchingPostsCount && matchingPostsCount <= matchingPosts.length) {
      return;
    }

    const _page = matchingPosts.length ? page : 1;
    let url = `${matchingPostListUrl}?page=${_page}&perPage=12`;

    if (filter.locationCode) {
      url += `&locationCode=${filter.locationCode}`;
    }

    if (filter.walkingTime) {
      url += `&walkingTime=${dayjs(filter.walkingTime).format('YYYY-MM-DD')}`;
    }

    const res = await fetch(url);
    const data = await res.json();

    dispatch(setMatchingPostCount(Number(data[0])));
    dispatch(addMatchingPosts(data[1]));
    setPage(_page + 1);
  };

  // 무한 스크롤 감지
  useEffect(() => {
    if (inView) {
      addMatchingCardList();
    }
  }, [filter, inView]);

  useEffect(() => {
    dispatch(resetMatchingPosts());
    dispatch(setMatchingPostEditId(''));
    dispatch(setFilter({ locationCode: '', walkingTime: '' }));
  }, []);

  return (
    <MatchingList>
      <MatchingBanner />
      <Section>
        <ListPageTopBar yellow={matchingPostsCount?.toString() || '0'} black="개의 매칭 요청이 있습니다." />
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
                return <MatchingCard post={post} />;
              }),
            )}
          </CardListContainer>
        )}
      </Section>
      <div className="scroll-ref" ref={scrollRef}></div>
      <ScrollToTopButton />
    </MatchingList>
  );
}

const MatchingList = styled.div`
  width: 100%;
  margin: 0 auto;

  .scroll-ref {
    height: 1px;
    position: relative;
    bottom: 200px;
  }
`;

const Section = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
`;
