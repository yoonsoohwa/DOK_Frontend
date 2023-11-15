import { styled } from "styled-components";
import { AccountCircle, LocationOn, AccessTime, Height } from "@mui/icons-material";

export function MatchingCard() {
  return (
    <CardContainer>
      <PostUser>
        <AccountCircle sx={{ width: "38px", height: "38px" }} />
        <PostInfo>
          I am 진이에요
          <span>45분 전</span>
        </PostInfo>
      </PostUser>
      <img src="../../../public/temp/리버.png" />
      <WalkInfo>
        <div>
          <img src="../../../public/svg/card-dog-icon.svg" />
          <span>라떼</span>
        </div>
        <div>
          <LocationOn />
          <span>서울특별시 종로구 효자동</span>
        </div>
        <div>
          <AccessTime />
          <span>2023-11-10 (30m)</span>
        </div>
      </WalkInfo>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  width: 220px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.main4};
  padding: 15px;
  border-radius: 8px;
  box-shadow: 1.5px 1.5px 6px rgba(0, 0, 0, 0.25);
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
`;

const WalkInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 13px;
  padding-top: 10px;

  & > div {
    display: flex;
    align-items: center;
    padding: 3px 0;

    & > span {
      padding-left: 7px;
    }
  }
`;
