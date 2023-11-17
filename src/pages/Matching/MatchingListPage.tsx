import { styled } from "styled-components";
import { MatchingCardList } from "../../components/Matching/MatchingCardList";
import { ScrollToTopButton } from "../../components/Common/Scroll/ScrollToTopButton";
import { Section } from "../Certification/CertificationListPage";
import { ListPageTopBar } from "../../components/Common/Bar/ListPageTopBar";
import { MatchingBanner } from "../../components/Matching/MatchingBanner";

export function MatchingListPage() {
  return (
    <>
      <MatchingBanner />
      <Section>
        <ListPageTopBar text={["132", "개의 산책 인증이 있습니다."]} />
        <MatchingCardList />
      </Section>
      <ScrollToTopButton />
    </>
  );
}
