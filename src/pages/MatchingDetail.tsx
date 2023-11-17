import { styled } from "styled-components";
import { Button } from "@mui/material";
import { DogProfile } from "../components/Matching/DogProfile";

export function MatchingDetailPage() {
  return (
    <MatchingDetailLayout>
      <ContentBox>
        <WalkContainer>
          <DogProfile />
          <WalkDetailBox>
            <WalkInfo></WalkInfo>
            <Button variant="contained" color="mainB" sx={{ width: "200px", borderRadius: "50px", fontWeight: 600 }}>
              핸들러 신청하기
            </Button>
          </WalkDetailBox>
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

const WalkDetailBox = styled.div`
  width: 100%;
  max-width: 540px;
  padding-left: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > Button {
    margin: 20px 0;
    align-self: center;
  }
`;

const WalkInfo = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.main4};
  border-radius: 8px;
  border: 1px dashed #fcd11e;
`;

const DogInfo = styled.div`
  display: flex;
  flex-direction: column;

  > ul {
    display: flex;
    flex-direction: column;
  }

  > ul > li:nth-child(1) {
    font-size: 26px;
  }
`;
