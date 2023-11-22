import { styled } from "styled-components";
import { MatchingCard } from "../../components/matching/MatchingCard";
import { CardListContainer } from "../certification/PostList";
import { Children } from "react";

export function MatchingCardList({ posts }: { posts: string[] }) {
  return <CardListContainer>{Children.toArray(posts.map((post) => <MatchingCard />))}</CardListContainer>;
}
