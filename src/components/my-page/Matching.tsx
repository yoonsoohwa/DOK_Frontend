import { styled } from "styled-components";
import { MatchingCard } from "../matching/Card";
import { TopBarTitle } from "common/list-page/TopBarTitle";


export const Matching = () => {
  const matchingData = 8;

  return (
    <MainFrame>
      <TitleFrame>
        <TopBarTitle yellow="7" black="개의 매칭 요청을 했습니다." />
      </TitleFrame>
      <CardFrame>
        {/* <MatchingCard />
        <MatchingCard />
        <MatchingCard />
        <MatchingCard /> */}
      </CardFrame>
    </MainFrame>
  );
};

const MainFrame = styled.div`
  display: flex;
  flex-direction: column;
`;
const TitleFrame = styled.div`
  display: flex;
  margin: 5% 0 7% 0;
`;
const CardFrame = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  & > div {
    /* border: 5px solid red; */
    width: 22%;
    margin: 0 3% 5% 0;
  }
`;
