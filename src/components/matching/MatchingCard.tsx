import { styled } from "styled-components";
import { AccountCircle, LocationOn, AccessTime } from "@mui/icons-material";
import { CardContainer } from "../certification/PostCard";
import { Profile } from "common/ProfileInfo";

export function MatchingCard() {
  return (
    <CardContainer>
      <Profile size="small" />
      <img src="/temp/리버.png" />

      <WalkInfo>
        <div>
          <DogIcon src="/svg/card_dog_icon.svg" />
          <span>라떼</span>
        </div>
        <div>
          <LocationOn sx={{ fontSize: "120%" }} />
          <span>서울특별시 종로구 효자동</span>
        </div>
        <div>
          <AccessTime sx={{ fontSize: "120%" }} />
          <span>2023-11-10 (30m)</span>
        </div>
      </WalkInfo>
      <MatchingStatus>
        <img src="/svg/matching_completed.svg" />
      </MatchingStatus>
    </CardContainer>
  );
}

// const CardContainer = styled.div`
//   width: 220px;
//   height: fit-content;
//   display: flex;
//   flex-direction: column;
//   background-color: ${({ theme }) => theme.main4};
//   padding: 10px;
//   border-radius: 8px;
//   box-shadow: 1.5px 1.5px 6px rgba(0, 0, 0, 0.25);
//   position: relative;
//   box-sizing: border-box;

//   @media screen and (max-width: 768px) {
//     width: 170px;
//     font-size: 13px;
//   }
// `;

const PostUser = styled.div`
  display: flex;
  padding-bottom: 10px;
`;

const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 5px;

  > span {
    color: #8e8e8e;
    font-size: 10px;
  }

  @media screen and (max-width: 768px) {
    & > span {
      font-size: 9px;
    }
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

  @media screen and (max-width: 768px) {
    font-size: 10px;

    & > div {
      padding: 1px 0;
    }
  }
`;

const MatchingStatus = styled.div`
  position: absolute;
  top: -1px;
  right: -4px;

  > img {
    width: 105px;
  }

  @media screen and (max-width: 768px) {
    > img {
      width: 90px;
    }
  }
`;

const DogIcon = styled.img`
  width: 8%;
`;
