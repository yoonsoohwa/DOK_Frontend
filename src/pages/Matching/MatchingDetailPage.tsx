import { styled } from "styled-components";
import { Button } from "@mui/material";
import { AccountCircle, LocationOn, AccessTime } from "@mui/icons-material";

export function MatchingDetailPage() {
  return (
    <MatchingDetail>
      <Section>
        <WalkContainer>
          <DogProfile>
            <PostUser>
              <AccountCircle sx={{ fontSize: "200%" }} />
              <PostInfo>
                I am 진이에요
                <span>45분 전</span>
              </PostInfo>
            </PostUser>
            <img src="/temp/리버.png" />
            <DogInfo>
              <div>
                <DogIcon src="/svg/card-dog-icon.svg" />
                <span>이뽀삐</span>
              </div>
              <div>
                <ul>나이: 2살</ul>
                <ul>견종: 말티즈</ul>
                <ul>성별: 여자</ul>
                <ul>성격: 매우 활발</ul>
                <ul>특이사항: 호기심이 많고, 냄새 맡는 거 좋아합니다.
산책할 때 천천히 냄새 맡을 수 있게 기다려주세요!</ul>
              </div>
            </DogInfo>
          </DogProfile>
          <WalkDetail>
            <WalkInfo></WalkInfo>
            <Button variant="contained" color="mainB" sx={{ width: "200px", borderRadius: "50px", fontWeight: 600 }}>
              핸들러 신청하기
            </Button>
          </WalkDetail>
        </WalkContainer>
      </Section>
    </MatchingDetail>
  );
}

const MatchingDetail = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const Section = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 50px auto;
`;

const WalkContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const WalkDetail = styled.div`
  width: 540px;
`;

const DogProfile = styled.div`
  width: 460px;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.main4};
  box-sizing: border-box;
  border-radius: 8px;
  box-shadow: 1.5px 1.5px 6px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;

  & > img {
    width: 100%;
  }
`;

const WalkInfo = styled.div`
  height: 100px;
  background-color: ${({ theme }) => theme.sub};
`;

const PostUser = styled.div`
  display: flex;
  padding-bottom: 10px;
`;

const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 5px;

  & > span {
    color: #8e8e8e;
    font-size: 10px;
  }

  @media screen and (max-width: 768px) {
    & > span {
      font-size: 9px;
    }
  }
`;

const DogInfo = styled.div`
  & > div > span {
    padding-left: 7px;
    font-size: 24px;
  }
`;
const DogIcon = styled.img`
  width: 2.5rem;
`;
