import { styled } from "styled-components";
import { MatchingCardList } from "../../components/Matching/MatchingCardList";
import { NonMemberHeader } from "../../components/Header/Header";
import { ListPageHeader } from "../../components/Common/Header/ListPageHeader"

export function MatchingListPage() {
  return (
    <>
      <NonMemberHeader />
      <ListPageHeader />
      <MatchingCardList />
    </>
  );
}
