import React from 'react';
import { styled } from 'styled-components';
import { TopBarTitle } from './TopBarTitle';
import { TopBarFilter } from './TopBarFilter';

interface ListPageTopBarProps {
  yellow?: string;
  black?: string;
}

export function ListPageTopBar({ yellow, black }: ListPageTopBarProps) {
  return (
    <Section>
      <TopBarTitle yellow={yellow} black={black} />
      <TopBarFilter />
    </Section>
  );
}

const Section = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 20px;
  margin-top: 40px;
  width: 100%;
  box-sizing: border-box;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    > :nth-child(2) {
      margin-bottom: 60px;
      max-width: 90%;
    }
  }
`;
