import { styled } from "styled-components";
import { MatchingCard } from "../matching/Card";
import { TopBarTitle } from "common/list-page/TopBarTitle";
import { ListPageTopBar } from "common/list-page/ListPageTopBar";
import { CardListContainer } from "../../styles/CardListContainer";
import { Children, useEffect, useState } from "react";
import { AlertError } from "common/alert/AlertError";
import { ScrollToTopButton } from "common/button/ScrollTopButton";
import { addMatchingPosts, resetMatchingPosts, setMatchingPostCount } from "store/matchingSlice";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "store/index";
import { EmptyData } from "common/state/EmptyData";
import { Loading } from "common/state/Loading";

export const Matching = () => {
  const dispatch = useDispatch<AppDispatch>();
  
  const { matchingPosts, matchingPostsCount } = useSelector((state: RootState) => state.matching);  
  const { user } = useSelector((state: RootState) => state.user);

  const [scrollRef, inView] = useInView();
  const [page, setPage] = useState(1);
  const [openAlert, setOpenAlert] = useState(false);

  const addMatchingCardList = async () => {
    // if(matchingPosts) 전체 길이보다 작거나 같으면 그만 요청
    console.log(matchingPostsCount, matchingPosts);
    if (matchingPostsCount && matchingPostsCount <= matchingPosts.length) {
      return;
    }

    const _page = matchingPosts.length ? page : 1;
    // let url = `/api/mypage/myMatchingPosts/${user._id}`;
    let url = `/api/mypage/myMatchingPosts/`;
    
    // const res = await fetch(url,{credentials:"include"});
    const res = await fetch(url);
    const data = await res.json();
    console.log(url, data);
    
    dispatch(setMatchingPostCount(Number(data[0])));
    dispatch(addMatchingPosts(data[1]));
    setPage(_page + 1);
  };


  const handleAlert = () => {
    setOpenAlert(false);
  };

  useEffect(() => {
    dispatch(resetMatchingPosts());
    addMatchingCardList();
  }, []);

  useEffect(() => {
    if (inView) {
      addMatchingCardList();
    }
  }, [inView]);
  
  return (
    <>
    <MainFrame>
      <TitleFrame>
        <TopBarTitle yellow={matchingPostsCount?.toString() || '0'} black="개의 매칭 요청을 했습니다." />
      </TitleFrame>
      {/* <CardFrame> */}
        {/* 여기부터 ~ */}
        {/* ~ 여기까지 */}
      {/* </CardFrame> */}
    </MainFrame>
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
              return (
                <MatchingCard post={post} openAlert={openAlert} setOpenAlert={setOpenAlert} />
              );
            }),
          )}
        </CardListContainer>
          )}
      </Section>
      <div className="scroll-ref" ref={scrollRef}></div>
      <AlertError open={openAlert} onClick={handleAlert} desc={'핸들러 지원 요청이 있는 글은 수정/삭제가 불가능 합니다.'} />
      <ScrollToTopButton />
      </SubFrame>
    </>
  );
};

const MainFrame = styled.div`
  display: flex;
  flex-direction: column;
`;

const SubFrame = styled.div`
  /* border: 5px solid black; */
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-left: -10%;
  
`
const TitleFrame = styled.div`
  display: flex;
  margin: 5% 0 7% 0;
`;
const CardFrame = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  & > div {
    /* border: 5px solid red; */
    width: 22%;
    margin: 0 3% 5% 0;
  }
`;


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