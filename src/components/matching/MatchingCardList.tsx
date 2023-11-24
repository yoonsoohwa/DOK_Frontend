import { styled } from "styled-components";
import { MatchingCard } from "../../components/matching/MatchingCard";
import { Children } from "react";
import { CardListContainer } from "../../styles/CardListContainer";

export function MatchingCardList({ posts }: { posts: string[] }) {
  return <CardListContainer>{Children.toArray(posts.map((post) => <MatchingCard />))}</CardListContainer>;
}
