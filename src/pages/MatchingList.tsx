import { styled } from 'styled-components';
import { MatchingBanner } from '../components/matching/Banner';
import { useState, useEffect, Children } from 'react';
import { AppDispatch, RootState, addMatchingPosts, resetMatchingPosts } from '../store';
import { useDispatch, useSelector } from 'react-redux';
import { MatchingCard } from '../components/matching/Card';
import { ScrollToTopButton } from '../components/common/button/ScrollTopButton';
import { ListPageTopBar } from '../components/common/list-page/ListPageTopBar';
import { CardListContainer } from '../styles/CardListContainer';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { AlertError } from 'common/alert/AlertError';

export function MatchingListPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { matchingPosts, filter } = useSelector((state: RootState) => state.matching);

  const [scrollRef, inView] = useInView();
  const [page, setPage] = useState(1);
  const [openAlert, setOpenAlert] = useState(false);

  const addMatchingCardList = async () => {
    // if(matchingPosts) //전체 길이보다 작거나 같으면 그만 요청
    console.log('add list ');

    const _page = matchingPosts.length ? page : 1;
    let url = `http://kdt-sw-6-team01.elicecoding.com/api/matchingPostLists?page=${_page}&perPage=12`;

    if (filter.locationCode) {
      url += `&locationCode=${filter.locationCode}`;
    }
    if (filter.walkingDate) {
      url += `&walkingDate=${filter.walkingDate}`;
    }

    const res = await fetch(url);
    const data = await res.json();
    console.log(url, data);

    dispatch(addMatchingPosts(data));
    setPage(_page + 1);
  };

  const handleAlert = () => {
    setOpenAlert(false);
  };

  useEffect(() => {
    if (inView) {
      addMatchingCardList();
      console.log('in view');
    }
  }, [filter, inView]);

  return (
    <MatchingList>
      <MatchingBanner />
      <Section>
        <ListPageTopBar yellow="132" black="개의 매칭 요청이 있습니다." />
        <CardListContainer>
          {Children.toArray(
            matchingPosts.map((post) => {
              return (
                // <Link to={`/matching/${post._id}`}>
                <MatchingCard post={post} openAlert={openAlert} setOpenAlert={setOpenAlert} />
                // </Link>
              );
            }),
          )}
        </CardListContainer>
      </Section>
      <div className="scroll-ref" ref={scrollRef}></div>
      <AlertError open={openAlert} onClick={handleAlert} desc={'핸들러 지원 요청이 있는 글은 수정/삭제가 불가능 합니다.'} />
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
