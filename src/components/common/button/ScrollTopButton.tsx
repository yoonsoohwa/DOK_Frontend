import { useState, useEffect } from "react";
import { styled } from "styled-components";

export function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleShowButton = () => {
      if (window.scrollY > 80) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleShowButton);
    return () => {
      window.removeEventListener("scroll", handleShowButton);
    };
  }, []);

  return showButton && <TopButton className="pointer" src="/svg/top_button.svg" onClick={scrollToTop} />;
}

const TopButton = styled.img`
  position: fixed;
  bottom: 70px;
  right: 40px;
  width: 48px;

  &.hidden {
    display: none;
  }
`;
