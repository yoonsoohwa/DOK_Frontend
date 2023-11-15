import { styled } from "styled-components";
import React from "react";
import { Alert, Button } from "@mui/material";
import { Logout } from "@mui/icons-material";
import { MemberHeader } from "../../components/Header/Header";
import { NonMemberHeader } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";

export function MainPage() {
  return (
    <div>
      <MemberHeader />
      <NonMemberHeader />
      <h1>한글 잘 나오나?</h1>
      <Button variant="outlined">test</Button>
      <Button variant="contained" color="red2B" sx={{ borderRadius: "50px" }}>
        테스트 버튼
      </Button>
      <MyLogout />
      <Test>zz</Test>
      <Footer/>
    </div>
  );
}

const Test = styled.h1`
  width: 100px;
  color: ${({ theme }) => theme.red2};
`;

const MyLogout = styled(Logout)`
  margin: 0 20px;
  color: ${({ theme }) => theme.sub2};
  &:hover {
    color: ${({ theme }) => theme.gray};
  }
`;
