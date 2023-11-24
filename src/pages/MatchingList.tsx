import { styled } from "styled-components";
import { MatchingCardList } from "../components/matching/MatchingCardList";
import { ScrollToTopButton } from "../components/common/ScrollTopButton";
import { ListPageTopBar } from "../components/common/ListPageTopBar";
import { MatchingBanner } from "../components/matching/MatchingBanner";
import { useState, useEffect } from "react";

export function MatchingListPage() {
  //   const addPostList = async () => {
  //     const res = await fetch("/src/api/mock/matching-posts.json");
  //     const data = await res.json();
  //     console.log(data);
  //   };
  //   useEffect(() => {
  //     addPostList();
  //   }, []);

  return (
    <MatchingList>
      <MatchingBanner />
      <Section>
        <ListPageTopBar yellow="132" black="개의 매칭 요청이 있습니다." />
        <MatchingCardList posts={new Array(16).fill(0)} />
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
