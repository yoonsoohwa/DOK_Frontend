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
              <ul>
                <li>
                  <div>
                    <DogIcon src="/svg/card-dog-icon.svg" />
                    <span>이뽀삐</span>
                  </div>
                </li>
                <li>
                  <div>
                    나이:
                    <span> 2살</span>
                  </div>
                </li>
                <li>
                  <div>
                    견종:
                    <span> 말티즈</span>
                  </div>
                </li>
                <li>
                  <div>
                    성별:
                    <span> 여자</span>
                  </div>
                </li>
                <li>
                  <div>
                    성격:
                    <span> 매우 활발</span>
                  </div>
                </li>
                <li>
                  <div>
                    특이사항:
                    <span>호기심이 많고, 냄새 맡는 거 좋아합니다. 산책할 때 천천히 냄새 맡을 수 있게 기다려주세요!</span>
                  </div>
                </li>
              </ul>
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
  max-width: 1024px;
`;

const Section = styled.div`
  width: 100%;
  margin: 50px auto;
  padding: 0 10px;
  box-sizing: border-box;
`;

const WalkContainer = styled.div`
  width: 100%;
  display: flex;
`;

const WalkDetail = styled.div`
  width: 100%;
  max-width: 540px;
  padding-left: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & > Button {
    margin: 20px 0;
    align-self: center;
  }
`;

const DogProfile = styled.div`
  width: 100%;
  max-width: 460px;
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
  height: 100%;
  background-color: ${({ theme }) => theme.main4};
  border-radius: 8px;
  border: 1px dashed #fcd11e;
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
  display: flex;
  flex-direction: column;

  & > ul {
    display: flex;
    flex-direction: column;
  }

  & > ul > li:nth-child(1) {
    font-size: 26px;
  }
`;

const DogIcon = styled.img`
  width: 2.5rem;
`;
