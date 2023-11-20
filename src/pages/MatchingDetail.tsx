import { styled } from "styled-components";
import { DogProfile } from "../components/matching/DogProfile";
import { WalkDetailInfo } from "../components/matching/WalkDetailInfo";

export function MatchingDetailPage() {
  return (
    <MatchingDetailLayout>
      <ContentBox>
        <WalkContainer>
          <DogProfile />
          <WalkDetailInfo />
        </WalkContainer>
      </ContentBox>
    </MatchingDetailLayout>
  );
}

const MatchingDetailLayout = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1024px;
`;

const ContentBox = styled.div`
  width: 100%;
  margin: 50px auto;
  padding: 0 10px;
  box-sizing: border-box;
`;

const WalkContainer = styled.div`
  width: 100%;
  display: flex;
`;
