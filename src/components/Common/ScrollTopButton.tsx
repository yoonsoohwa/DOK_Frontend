import { styled } from "styled-components";

export function ScrollToTopButton() {
  return <TopButton className="pointer" src="/svg/top-button.svg" onClick={() => window.scrollTo(0, 0)} />;
}

const TopButton = styled.img`
  position: fixed;
  bottom: 70px;
  right: 30px;
`;
