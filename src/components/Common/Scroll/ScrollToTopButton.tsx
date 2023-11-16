import { styled } from "styled-components";

export function ScrollToTopButton() {
  return <TopButton onClick={() => window.scrollTo(0, 0)} src="/svg/top-button.svg" />;
}

const TopButton = styled.img`
  position: fixed;
  bottom: 30px;
  right: 30px;
`;
