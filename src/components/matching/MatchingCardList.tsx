import { styled } from "styled-components";
import { MatchingCard } from "../../components/matching/MatchingCard";
import { CardListContainer } from "../certification/PostList";
import { Children } from "react";

export function MatchingCardList({ posts }: { posts: string[] }) {
  return <CardListContainer>{Children.toArray(posts.map((post) => <MatchingCard />))}</CardListContainer>;
}

// const CardListContainer = styled.div`
//   width: 1024px;
//   height: fit-content;
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-between;
//   margin: 0 auto;
//   padding: 1rem;
//   gap: 40px 0;
// `;
