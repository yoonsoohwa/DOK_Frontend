import { styled } from "styled-components";
import React from "react";
import { Alert, Button } from "@mui/material";
import { Logout } from "@mui/icons-material";

export function MainPage() {
  return (
    <div>
      <h1>한글 잘 나오나?</h1>
      <Button variant="contained">test</Button>
      <Button variant="contained" color="secondary" sx={{ borderRadius: "50px" }}>
        테스트 버튼
      </Button>
      <Logout />
      <Test>zz</Test>
    </div>
  );
}

const Test = styled.h1`
  width: 100px;
  color: ${({ theme }) => theme.red2};
`;
