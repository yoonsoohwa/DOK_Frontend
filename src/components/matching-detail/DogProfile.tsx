import { styled } from "styled-components";
import { ProfileInfo } from "common/user/ProfileInfo";
import { useSelector } from "react-redux";
import { RootState } from "store/store";
import calculateAge from "../../utils/calculateAge";

export function DogProfile() {
  const { matchingDetailPost } = useSelector((state: RootState) => state.matching);
  if(!matchingDetailPost) return <></>;
  const { _id: id, user, userDog, createdAt } = matchingDetailPost;
  const { birth: dogBirth, dogImg, dogName, dogType, gender: dogGender, note: dogNote, personality: dogPersonality } = userDog;

  return (
    <DogProfileContainer>
      <ProfileInfo userImg={user.userImg} nickname={user.nickname} time={createdAt.toString()} />
      <DogImage src={dogImg} />
      <DogNameBox>
        <DogIcon src="/svg/card_dog_icon.svg" />
        <p>{dogName}</p>
      </DogNameBox>
      <ul>
        <li>
          <DogInfoListItem>
            <span>나이:</span>
            <p>{calculateAge(dogBirth.toString())}</p>
          </DogInfoListItem>
        </li>
        <li>
          <DogInfoListItem>
            <span>견종:</span>
            <p>{dogType}</p>
          </DogInfoListItem>
        </li>
        <li>
          <DogInfoListItem>
            <span>성별:</span>
            <p>{dogGender === 'Male' ? '남자' : '여자'}</p>
          </DogInfoListItem>
        </li>
        <li>
          <DogInfoListItem>
            <span>성격:</span>
            <p>{dogPersonality}</p>
          </DogInfoListItem>
        </li>
        <li>
          <DogInfoListItem>
            <span>특이사항:</span>
            <p>{dogNote || '없음'}</p>
          </DogInfoListItem>
        </li>
      </ul>
    </DogProfileContainer>
  );
}

const DogProfileContainer = styled.div`
  width: 100%;
  max-width: 460px;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.main4};
  box-sizing: border-box;
  border-radius: 8px;
  box-shadow: 1.5px 1.5px 6px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 480px) and (max-width: 1023px) {
    max-width: 525px;
  }
`;

const DogImage = styled.img`
  width: 100%;
  max-width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
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
  padding: 5px 0;

  > span {
    font-weight: 500;
  }
`;
