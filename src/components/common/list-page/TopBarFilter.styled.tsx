import styled from 'styled-components';

export const Section = styled.div`
  width: 100%;
  max-width: 500px;
  font-size: 20px;
  font-weight: 800;
  display: flex;
  align-items: end;

  > div {
    margin-left: 6px;
  }

  .district .MuiInputBase-input {
    cursor: pointer;
  }
`;

export const DateSection = styled.div`
  position: relative;
  .date-clear {
    position: absolute;
    top: 8px;
    right: 28px;
  }
`;
