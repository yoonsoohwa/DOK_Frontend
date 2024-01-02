import { styled } from 'styled-components';

interface TopBarTitleProps {
  yellow?: string;
  black?: string;
}

export function TopBarTitle({ yellow, black }: TopBarTitleProps) {
  return (
    <Section>
      <span className="point">{yellow}</span>
      <span className="text">{black}</span>
    </Section>
  );
}

const Section = styled.div`
  width: fit-content;
  font-size: 20px;
  font-weight: 700;
  flex-shrink: 0;

  .point {
    color: ${({ theme }) => theme.main};
  }
`;
