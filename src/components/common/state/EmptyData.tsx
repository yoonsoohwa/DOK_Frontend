import * as styled from './state.styled';

export function EmptyData() {
  return (
    <styled.EmptyData>
      <img src="https://item.kakaocdn.net/do/99086bcd02b630d31aa3f95d5b20ae586fb33a4b4cf43b6605fc7a1e262f0845" />
      <div className="title">데이터가 없습니다</div>
    </styled.EmptyData>
  );
}
