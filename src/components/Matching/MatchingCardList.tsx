import { styled } from "styled-components";
import { MatchingCard } from "../../components/Matching/MatchingCard";

export function MatchingCardList({posts}: {posts: string[]}) {
  return (
    <CardListContainer>
      {posts.map((post) => <MatchingCard />)}
    </CardListContainer>
  );
}

const CardListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px 6px;
  gap: 25px 0;
  box-sizing: border-box;

  @media screen and (max-width: 768px){
    justify-content: space-evenly;
  }
`;