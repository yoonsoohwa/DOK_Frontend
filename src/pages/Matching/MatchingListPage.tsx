import { styled } from "styled-components";
import { MatchingCardList } from "../../components/Matching/MatchingCardList";
import { ListPageBanner } from "../../components/Common/Banner/ListPageBanner";
import { ScrollToTopButton } from "../../components/Common/Scroll/ScrollToTopButton";
import { Button } from "@mui/material";
import BannerImage from "/svg/matchingBannerImage.svg";
import { ListPageTopBar } from "../../components/Common/Bar/ListPageTopBar";

export function MatchingListPage() {
  const desc = (
    <>
      이웃 주민들과 가깝고 따뜻한 교류를 경험해보세요
      <br />
      믿을만한 전문가들이 우리 아이를 기다리고 있습니다!
    </>
  );
  const MyButton = (
    <Button variant="contained" sx={{ width: "100%", height: "56px", borderRadius: "50px", fontSize: "20px", fontWeight: "600", backgroundColor: "#FF8A00", color: "white" }}>
      매칭 신청하기
    </Button>
  );

  return (
    <MatchingList>
      <ListPageBanner title={"산책 매칭"} desc={desc}>
        <RightBox>
          <img className="banner-image" src={BannerImage} />
          {MyButton}
        </RightBox>
      </ListPageBanner>
      <Section>
        <ListPageTopBar text={["132", "개의 산책 인증이 있습니다."]} />
        <MatchingCardList posts={["1", "2", "3", "4", "5", "6", "7", "8"]} />
      </Section>
      <ScrollToTopButton />
    </MatchingList>
  );
}

const MatchingList = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const RightBox = styled.div`
  width: 100%;
  padding-bottom: 20px;

  img {
    position: relative;
    display: block;
    margin: 0 auto;
    bottom: -26px;
    z-index: 2;
  }
`;
const Section = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
`;
