import React from "react";
import { styled } from "styled-components";
import { AccessTime } from "@mui/icons-material";
import { Profile } from "../common/ProfileInfo";
import { Rating, Tooltip } from "@mui/material";

export function CertifiPostCard({ onclick }: { onclick: (e: any) => void }) {
  const review = true;
  return (
    <CardContainer className="certifiCard">
      <Profile size="small" />
      <Tooltip title="리버" placement="top" followCursor arrow>
        <img className="dog-img" src="/temp/리버.png" onClick={onclick} />
      </Tooltip>

      <Contents onClick={onclick} className="pointer">
        <div>
          <AccessTime sx={{ fontSize: "20px" }} />
          <span>
            2023-11-10 <span className="time">13:00~14:00</span>
          </span>
        </div>
        <div className={`detail ${review && "review"}`}>
          뽀삐가 너무 귀여워서 산책하는 내내 행복했습니다. 20분에 한 번씩 휴식했고, 10분 정도는 친구들하고 뛰어 놀았습니다! 물은 여섯번 나눠서 먹였어요 20분에 한 번씩 휴식했고,
          10분 정도는 친구들하고 뛰어 놀았습니다!
          <Review>
            견주의 후기: <Rating value={3.5} precision={0.5} readOnly></Rating>
          </Review>
        </div>
      </Contents>
    </CardContainer>
  );
}

export const CardContainer = styled.div`
  width: 100%;
  max-width: 250px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.main4};
  margin: 0 6px 4px 0;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 1.5px 1.5px 6px rgba(0, 0, 0, 0.25);
  position: relative;
  box-sizing: border-box;

  @media screen and (max-width: 784px) {
    max-width: 43vw;
    font-size: 14px;
  }
  &.hidden {
    display: none;
  }
  .dog-img:hover {
  }
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  padding-top: 10px;

  > div {
    display: flex;
    align-items: flex-start;
    padding: 3px 0;

    > span {
      padding-left: 7px;
    }
  }

  .detail {
    box-sizing: border-box;
    width: 100%;
    height: 66px;
    padding: 4px 0;
    white-space: normal;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;

    &.review {
      display: block;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  @media screen and (max-width: 768px) {
  }
`;

const Review = styled.div`
  width: 100%;
  border-top: #d9d9d9 solid 3px;
  margin-top: 8px;
  display: flex;
  align-items: center;
  padding: 6px 0;
`;
