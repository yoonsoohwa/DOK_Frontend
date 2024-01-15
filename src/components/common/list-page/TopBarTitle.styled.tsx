import styled from 'styled-components';

export const Section = styled.div`
  width: fit-content;
  font-size: 20px;
  font-weight: 700;
  flex-shrink: 0;

  .point {
    color: ${({ theme }) => theme.main};
  }
`;
