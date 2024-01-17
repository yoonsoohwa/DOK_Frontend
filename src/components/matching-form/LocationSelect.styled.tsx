import { DialogContent, DialogTitle } from '@mui/material';
import styled from 'styled-components';

export const LocationLayout = styled.div`
  .flex {
    display: flex;
    margin-bottom: 10px;
  }

  .location-text {
    display: flex;
    align-items: center;
  }
`;

export const DialogTitleBox = styled(DialogTitle)`
  /* background-color: ${({ theme }) => theme.sub}; */
  color: #5e5e5e;
`;

export const DialogContentBox = styled(DialogContent)`
  .location-text {
    display: flex;
    align-items: center;
    height: 40px;
    font-size: 28px;
    font-weight: 500;
    margin: 10px 0 30px;

    .icon {
      width: inherit;
      height: inherit;
    }
  }
`;
