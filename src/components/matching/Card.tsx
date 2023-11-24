import { styled } from "styled-components";
import { AccountCircle, LocationOn, AccessTime } from "@mui/icons-material";
import { CardContainer } from "../certification/PostCard";
import { MatchingPostType } from "../../types";
import { Profile } from "common/user/ProfileInfo";

interface type {
  post: MatchingPostType;
}

export function MatchingCard({ post }: type) {
  const { user, userDog, location, walkingDate, matchingStatus, walkingDuration, createdAt } = post;
  return (
    <CardContainer className="pointer">
      <Profile nickname={user.nickname} time={createdAt.toString()} size="small" />
      <img src={userDog.dogImg} className="main-img" />
      <WalkInfo>
        <div>
          <DogIcon src="/svg/card_dog_icon.svg" />
          <span>{userDog.dogName}</span>
        </div>
        <div>
          <LocationOn sx={{ fontSize: "120%" }} />
          <span>{location.text}</span>
        </div>
        <div>
          <AccessTime sx={{ fontSize: "120%" }} />
          <span>2023-11-12 <span style={{background: "#F8F3C1", borderRadius: "50px", padding: "1px 5px"}}>1h 30m</span></span>
        </div>
      </WalkInfo>
      <MatchingStatus>
        <img src="/svg/matching_completed.svg" />
      </MatchingStatus>
    </CardContainer>
  );
}

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
    width: 7em;
  }
`;

const DogIcon = styled.img`
  width: 8%;
`;

