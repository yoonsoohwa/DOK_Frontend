import { styled } from "styled-components";
import { Profile } from "common/user/ProfileInfo";

export function DogProfile() {
  return (
    <DogProfileContainer>
      <Profile />
      <DogImage src="/temp/리버.png" />
      <DogNameBox>
        <DogIcon src="/svg/card_dog_icon.svg" />
        <p>이뽀삐</p>
      </DogNameBox>
      <ul>
        <li>
          <DogInfoListItem>
            <span>나이:</span>
            <p>2살</p>
          </DogInfoListItem>
        </li>
        <li>
          <DogInfoListItem>
            <span>견종:</span>
            <p>말티즈</p>
          </DogInfoListItem>
        </li>
        <li>
          <DogInfoListItem>
            <span>성별:</span>
            <p>여자</p>
          </DogInfoListItem>
        </li>
        <li>
          <DogInfoListItem>
            <span>성격:</span>
            <p>매우 활발</p>
          </DogInfoListItem>
        </li>
        <li>
          <DogInfoListItem>
            <span>특이사항:</span>
            <p>호기심이 많고, 냄새 맡는 거 좋아합니다. 산책할 때 천천히 냄새 맡을 수 있게 기다려주세요!</p>
          </DogInfoListItem>
        </li>
      </ul>
    </DogProfileContainer>
  );
}

const DogProfileContainer = styled.div`
  width: 100%;
  max-width: 460px;
  min-width: 300px;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.main4};
  box-sizing: border-box;
  border-radius: 8px;
  box-shadow: 1.5px 1.5px 6px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
`;

const DogImage = styled.img`
  width: 100%;
`;

const DogIcon = styled.img`
  width: 2.5em;
`;

const TextAlignLayout = styled.div`
  display: flex;
  align-items: center;

  > span {
    display: block;
    flex-shrink: 0;
    align-self: flex-start;
  }
  > p {
    padding-left: 10px;
  }
`;

const DogNameBox = styled(TextAlignLayout)`
  padding: 5px 0;
  > p {
    font-weight: 600;
    font-size: 24px;
  }
`;

const DogInfoListItem = styled(TextAlignLayout)`
  font-size: 16px;
  padding: 2px 0;

  > span {
    font-weight: 500;
  }
`;
