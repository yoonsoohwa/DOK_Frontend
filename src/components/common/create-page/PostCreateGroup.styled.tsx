import styled from 'styled-components';

export const Group = styled.div`
  margin-bottom: 40px;

  > .flex {
    display: flex;
    justify-content: space-between;
  }
`;

export const TitleLayout = styled.div`
  margin: 20px 0;

  .title {
    font-size: 22px;
    font-weight: 500;
    flex-shrink: 0;
    margin-left: 4px;
    height: 42px;
  }

  hr {
    margin: 4px 0;
  }
`;
