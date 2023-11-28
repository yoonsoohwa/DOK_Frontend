import { styled } from "styled-components";
import { MatchingBanner } from "../components/matching/Banner";
import { useState, useEffect, Children } from "react";
import { AppDispatch, RootState, addMatchingPosts } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { MatchingCard } from "../components/matching/Card";
import { ScrollToTopButton } from "../components/common/button/ScrollTopButton";
import { ListPageTopBar } from "../components/common/list-page/ListPageTopBar";
import { CardListContainer } from "../styles/CardListContainer";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

export function MatchingListPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { matchingPosts } = useSelector((state: RootState) => state.matching);

  const [scrollRef, inView] = useInView();

  const addMatchingCardList = async () => {
    const res = await fetch('http://kdt-sw-6-team01.elicecoding.com/api/matchingPostLists');
    // const res = await fetch('/src/api/mock/matching-posts.json');
    const data = await res.json();
    dispatch(addMatchingPosts(data));
  };
  useEffect(() => {
    if (inView) {
      addMatchingCardList();
    }
  }, [inView]);

  return (
    <MatchingList>
      <MatchingBanner />
      <Section>
        <ListPageTopBar yellow="132" black="개의 매칭 요청이 있습니다." />
        <CardListContainer>
          {Children.toArray(
            matchingPosts.map((post) => {
              return (
                <Link to={`/matching/${post._id}`}>
                  <MatchingCard post={post} />
                </Link>
              );
            })
          )}
        </CardListContainer>
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
