import * as styled from './States.styled';
import { CircularProgress } from '@mui/material';

export function Loading() {
  return (
    <styled.Loading>
      <CircularProgress />
    </styled.Loading>
  );
}
