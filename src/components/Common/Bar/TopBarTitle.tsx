import React from "react";
import { styled } from "styled-components";

export function TopBarTitle({ text }: { text: [string, string] }) {
  return (
    <Section>
      <span className="point">{text[0]}</span>
      <span className="text">{text[1]}</span>
    </Section>
  );
}

const Section = styled.div`
  width: fit-content;
  font-size: 20px;
  font-weight: 700;

  .point {
    color: ${({ theme }) => theme.main};
  }
`;
