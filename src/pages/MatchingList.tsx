import { styled } from "styled-components";
import { MatchingCardList } from "../components/Matching/MatchingCardList";
import { ScrollToTopButton } from "../components/Common/ScrollTopButton";
import { ListPageTopBar } from "../components/Common/ListPageTopBar";
import { MatchingBanner } from "../components/Matching/MatchingBanner";

export function MatchingListPage() {
  return (
    <MatchingList>
      <MatchingBanner />
      <Section>
        <ListPageTopBar text={["132", "개의 산책 인증이 있습니다."]} />
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
