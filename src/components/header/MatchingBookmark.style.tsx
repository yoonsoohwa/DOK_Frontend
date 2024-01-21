import styled from 'styled-components';

export const Certification = styled.div`
  position: relative;

  .icon {
    cursor: pointer;
    color: ${({ theme }) => theme.red};
    font-size: 30px;
    width: 22px;
    margin-top: 5px;
  }

  .hidden {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

export const TableContainer = styled.div`
  background-color: white;
  position: absolute;
  top: 60px;
  right: -70px;

  border-radius: 4px;
  box-shadow: 1px 1px 4px 1px #0000001e;

  a:hover {
    color: ${({ theme }) => theme.sub};
  }
`;
