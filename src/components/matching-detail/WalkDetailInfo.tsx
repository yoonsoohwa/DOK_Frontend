import { styled } from "styled-components";
import { LocationOn, AccessTime, CalendarToday, MonetizationOn, Chat } from "@mui/icons-material";
import { HandlerRequestButton } from "./HandlerRequestButton";
import { HandlerSelectContainer } from "./HandlerSelectContainer";
import { useSelector } from "react-redux";
import { RootState } from "/src/store";

export function WalkDetailInfo() {
  const { matchingDetailPost } = useSelector((state: RootState) => state.matching);
  const { location, locationDetail, price, requestText, walkingDate, walkingDuration } = matchingDetailPost;

  return (
    <WalkDetailLayout>
      <WalkInfoBox>
        <WalkInfoItem>
          <TextAlignLayout>
            <CalendarToday />
            <span>산책 날짜</span>
          </TextAlignLayout>
          <p>{walkingDate}</p>
        </WalkInfoItem>
        <WalkInfoItem>
          <TextAlignLayout>
            <AccessTime />
            <span>산책 시간</span>
          </TextAlignLayout>
          <p>15:40 ~ 16:10 ({walkingDuration})</p>
        </WalkInfoItem>
        <WalkInfoItem>
          <TextAlignLayout>
            <LocationOn />
            <span>만남 장소</span>
          </TextAlignLayout>
          <MapLayout>
            <p>{`${location.text} (${locationDetail})`}</p>
            <div></div>
          </MapLayout>
        </WalkInfoItem>
        <WalkInfoItem>
          <TextAlignLayout>
            <MonetizationOn />
            <span>금액</span>
          </TextAlignLayout>
          <p>{price.toLocaleString()}원</p>
        </WalkInfoItem>
        <WalkInfoItem>
          <TextAlignLayout>
            <Chat />
            <span>요구사항</span>
          </TextAlignLayout>
          <p>{requestText}</p>
        </WalkInfoItem>
      </WalkInfoBox>
      <HandlerSelectContainer />
      {/* <HandlerRequestButton /> */}
    </WalkDetailLayout>
  );
}

const FlexLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WalkDetailLayout = styled(FlexLayout)`
  width: 100%;
  max-width: 525px;
  justify-content: space-between;
  box-sizing: border-box;
`;

const WalkInfoBox = styled(FlexLayout)`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.main4};
  border-radius: 8px;
  border: 1px dashed #fcd11e;
  padding: 30px 19px;
  justify-content: space-between;
  align-items: normal;
  box-sizing: border-box;
  gap: 10px;
`;

const TextAlignLayout = styled(FlexLayout)`
  flex-direction: row;
`;

const WalkInfoItem = styled(TextAlignLayout)`
  > div {
    flex-shrink: 0;
    align-self: flex-start;
  }
  > div > span {
    width: 5.5rem;
    display: block;
    padding-left: 5px;
    font-weight: 700;
    font-size: 18px;
    color: #5e5e5e;
  }
  p {
    font-weight: 400;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25);
  }

  @media screen and (max-width: 480px) {
    > div > span {
      font-size: 16px;
    }

    p {
      font-size: 14px;
    }
  }
`;

const MapLayout = styled(FlexLayout)`
  align-items: normal;
  flex: 1;

  > p {
    padding-bottom: 5px;
  }

  div {
    background-color: black;
    height: 200px;
  }
`;
