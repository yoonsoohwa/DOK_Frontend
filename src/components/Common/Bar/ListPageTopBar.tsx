import React from "react";
import { styled } from "styled-components";
import { TopBarTitle } from "./TopBarTitle";
import { TopBarFilter } from "./TopBarFilter";

export function ListPageTopBar({ text }: { text: [string, string] }) {
  return (
    <Section>
      <TopBarTitle text={text} />
      <TopBarFilter />
    </Section>
  );
}

const Section = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 6px;
`;
