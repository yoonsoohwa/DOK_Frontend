import { styled } from "styled-components";
import { MatchingCardList } from "../../components/Matching/MatchingCardList";
import { NonMemberHeader } from "../../components/Header/Header";
import { ListPageBanner } from "../../components/Common/Banner/ListPageBanner";
import { ScrollToTopButton } from "../../components/Common/Scroll/ScrollToTopButton";

export function MatchingListPage() {
  return (
    <>
      <NonMemberHeader />
      <ListPageBanner title="sd" desc={<></>} children={<></>} />
      <MatchingCardList />
      <ScrollToTopButton />
    </>
  );
}
