import { BannerContainer, MessageContainer } from './StatusBanner.style';

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

