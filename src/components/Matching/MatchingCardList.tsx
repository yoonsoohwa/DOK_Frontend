import { styled } from "styled-components";
import { MatchingCard } from "../../components/Matching/MatchingCard";
import { CardListContainer } from "../Certification/CertifiPostList";

export function MatchingCardList({ posts }: { posts: string[] }) {
  return (
    <CardListContainer>
      {posts.map((post) => (
        <MatchingCard />
      ))}
    </CardListContainer>
  );
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
