import * as styled from './TopBarTitle.styled';

interface TopBarTitleProps {
  yellow?: string;
  black?: string;
}

export function TopBarTitle({ yellow, black }: TopBarTitleProps) {
  return (
    <styled.Section>
      <span className="point">{yellow}</span>
      <span className="text">{black}</span>
    </styled.Section>
  );
}
