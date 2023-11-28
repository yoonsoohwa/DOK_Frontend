import styled from 'styled-components';

export const CardListContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-flow: dense;
  justify-items: center;
  position: relative;
  row-gap: 40px;

  padding: 2rem 0;
  box-sizing: border-box;

  @media screen and (max-width: 1058px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 796px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
