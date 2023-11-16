import { styled } from "styled-components";
import { MatchingCard } from "../../components/Matching/MatchingCard";

export function MatchingCardList() {
  return (
    <CardListContainer>
      <MatchingCard />
      <MatchingCard />
      <MatchingCard />
      <MatchingCard />
      <MatchingCard />
      <MatchingCard />
      <MatchingCard />
      <MatchingCard />
      <MatchingCard />
      <MatchingCard />
      <MatchingCard />
      <MatchingCard />
    </CardListContainer>
  );
}

const CardListContainer = styled.div`
  width: 1024px;
  height: fit-content;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
  padding: 1rem;
  gap: 40px 0;
  box-sizing: border-box;

  @media screen and (max-width: 768px) {
    width: 768px;
  }

  @media screen and (max-width: 425px) {
    width: 425px;
  }
`;
