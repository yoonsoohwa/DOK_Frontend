import { Dialog } from '@mui/material';
import styled from 'styled-components';

export const CertificationList = styled.div`
  width: 100%;
  margin: 0 auto;
  position: relative;

  .scroll-ref {
    height: 1px;
    position: relative;
    bottom: 100px;
  }
`;

export const Section = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
`;

export const MyDialog = styled(Dialog)`
  max-width: none;
  margin: 0 auto;
`;
