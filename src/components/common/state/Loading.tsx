import * as styled from './state.styled';
import { CircularProgress } from '@mui/material';

export function Loading() {
  return (
    <styled.Loading>
      <CircularProgress />
    </styled.Loading>
  );
}
