import { styled } from "styled-components";
import { MatchingCardList } from "../../components/Matching/MatchingCardList";
import { ScrollToTopButton } from "../../components/Common/Scroll/ScrollToTopButton";
import { ListPageTopBar } from "../../components/Common/Bar/ListPageTopBar";
import { MatchingBanner } from "../../components/Matching/MatchingBanner";

export function MatchingListPage() {
  return (
    <MatchingList>
      <MatchingBanner />
      <Section>
        <ListPageTopBar text={["132", "개의 산책 인증이 있습니다."]} />
        <MatchingCardList posts={[]} />
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
