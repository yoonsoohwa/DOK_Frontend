import { styled } from "styled-components";
import { LocationOn, AccessTime, CalendarToday, MonetizationOn, Chat } from "@mui/icons-material";
import { HandlerRequestButton } from "./HandlerRequestButton";
import { HandlerSelectContainer } from "./HandlerSelectContainer";

export function WalkDetailInfo() {
  return (
    <WalkDetailLayout>
      <WalkInfoBox>
        <WalkInfoItem>
          <TextAlignLayout>
            <CalendarToday />
            <span>산책 날짜</span>
          </TextAlignLayout>
          <p>2023-11-10</p>
        </WalkInfoItem>
        <WalkInfoItem>
          <TextAlignLayout>
            <AccessTime />
            <span>산책 시간</span>
          </TextAlignLayout>
          <p>15:40 ~ 16:10 (30분)</p>
        </WalkInfoItem>
        <WalkInfoItem>
          <TextAlignLayout>
            <LocationOn />
            <span>만남 장소</span>
          </TextAlignLayout>
          <MapLayout>
            <p>시그니엘 1차 입구</p>
            <div></div>
          </MapLayout>
        </WalkInfoItem>
        <WalkInfoItem>
          <TextAlignLayout>
            <MonetizationOn />
            <span>금액</span>
          </TextAlignLayout>
          <p>5000원</p>
        </WalkInfoItem>
        <WalkInfoItem>
          <TextAlignLayout>
            <Chat />
            <span>요구사항</span>
          </TextAlignLayout>
          <p>코스는 시그니엘 1차 -&gt; 서울숲 2바퀴 -&gt; 시그니엘 2차 놀이터 -&gt; 시그니엘 1차로 다시 다녀오시면 됩니다! 뽀삐 칭찬 많이 해주실 분 구합니다^^</p>
        </WalkInfoItem>
      </WalkInfoBox>
      <HandlerSelectContainer />
      {/* <HandlerRequestButton /> */}
    </WalkDetailLayout>
  );
}

const WalkDetailLayout = styled.div`
  width: 100%;
  max-width: 540px;
  padding-left: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const WalkInfoBox = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.main4};
  border-radius: 8px;
  border: 1px dashed #fcd11e;
  display: flex;
  flex-direction: column;
  padding: 30px 19px;
  justify-content: space-between;
`;

const TextAlignLayout = styled.div`
  display: flex;
  align-items: center;
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
  }
  p {
    font-weight: 400;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25);
  }
`;

const MapLayout = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  > p {
    padding-bottom: 5px;
  }

  div {
    background-color: black;
    height: 200px;
  }
`;
