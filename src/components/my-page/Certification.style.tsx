import { Dialog } from "@mui/material";
import styled from "styled-components";

export const MainFrame = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

export const TitleFrame = styled.div`
  display: flex;
  margin: 50px 10px 20px;
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