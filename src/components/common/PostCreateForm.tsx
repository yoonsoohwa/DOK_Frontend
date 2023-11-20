import { Button } from "@mui/material";
import React from "react";
import { styled } from "styled-components";

export function PostCreateFormLayout({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <FormLayout>
      <h2>{title}</h2>
      <div className="contents">{children}</div>
      <Buttons>
        <Button variant="contained" color="mainB" sx={{ borderRadius: "50px" }}>
          작성하기
        </Button>
        <Button variant="contained" color="grayB" sx={{ borderRadius: "50px" }}>
          취소
        </Button>
      </Buttons>
    </FormLayout>
  );
}

const FormLayout = styled.div`
  width: 100%;
  box-sizing: border-box;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 40px;
    font-weight: 00;
    margin: 60px 0 40px;
  }

  .contents {
    background: white;
    border: 5px solid ${({ theme }) => theme.main2};
    width: 100%;
    box-sizing: border-box;
    border-radius: 10px;
    padding: 40px 60px;
  }
`;

const Buttons = styled.div`
  display: flex;
  width: 180px;
  margin: 20px 0;
  justify-content: space-around;
`;
