import { styled } from 'styled-components';

export function StatusBanner() {
  return (
    <BannerContainer>
      <img src="https://item.kakaocdn.net/do/bdf2b477837e8664559b1385bb9d0b06ce9463e040a07a9462a54df43e1d73f1" />
      <MessageContainer>
        해당 글은 매칭이 종료되었어요.
        <br />
        산책을 기다리고 있는 다른 반려견의 핸들러에 도전해보세요!
      </MessageContainer>
    </BannerContainer>
  );
}

const BannerContainer = styled.div`
  width: 100%;
  padding: 10px 10px;
  display: flex;
  justify-content: center;
  gap: 2rem;
  align-items: center;
  box-sizing: border-box;

  > img {
    width: 8rem;
    height: 8rem;
  }

  @media screen and (max-width: 425px){
    > img {
        display: none;
    }
  }
`;

const MessageContainer = styled.div`
  height: fit-content;
  padding: 0.9rem 5rem;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  border-radius: 10px;
  background-color: #b4e1ff;
`;
