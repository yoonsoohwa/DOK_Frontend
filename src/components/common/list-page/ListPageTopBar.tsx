import * as styled from './ListPageTopBar.styled';
import { TopBarTitle } from './TopBarTitle';
import { TopBarFilter } from './TopBarFilter';

interface ListPageTopBarProps {
  yellow?: string;
  black?: string;
}

export function ListPageTopBar({ yellow, black }: ListPageTopBarProps) {
  return (
    <styled.Section>
      <TopBarTitle yellow={yellow} black={black} />
      <TopBarFilter />
    </styled.Section>
  );
}
