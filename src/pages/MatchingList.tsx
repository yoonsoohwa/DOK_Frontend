import { styled } from "styled-components";
import { ScrollToTopButton } from "../components/common/ScrollTopButton";
import { ListPageTopBar } from "../components/common/ListPageTopBar";
import { MatchingBanner } from "../components/matching/Banner";
import { useState, useEffect, Children } from "react";
import { AppDispatch, RootState, addMatchingPosts } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { CardListContainer } from "../components/styles/CardListContainer";
import { MatchingCard } from "../components/matching/Card";

export function MatchingListPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { matchingPosts } = useSelector((state: RootState) => state.matching);

  const addPostList = async () => {
    const res = await fetch("/src/api/mock/matching-posts.json");
    const data = await res.json();
    dispatch(addMatchingPosts(data));
  };
  useEffect(() => {
    addPostList();
  }, []);

  return (
    <MatchingList>
      <MatchingBanner />
      <Section>
        <ListPageTopBar yellow="132" black="개의 매칭 요청이 있습니다." />
        <CardListContainer>{Children.toArray(matchingPosts.map((post) => <MatchingCard post={post} />))}</CardListContainer>
      </Section>
      <ScrollToTopButton />
    </MatchingList>
  );
}

const MatchingList = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const Section = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
`;
