import { CircularProgress } from "@mui/material";
import styled from "styled-components";

export function Loading() {
  return (
    <Layout>
      <CircularProgress />
    </Layout>
  );
}

const Layout = styled.div`
  padding: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
