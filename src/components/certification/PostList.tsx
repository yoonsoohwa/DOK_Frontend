import React, { Children, useState } from "react";
import { styled } from "styled-components";
import { CertifiPostCard } from "./PostCard";
import { ListPageTopBar } from "common/ListPageTopBar";
import { CertificationPostDetail } from "./PostDetail";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";

export function CertifiPostList() {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <GridContainer>
      {Children.toArray(new Array(30).fill(0).map((tmp) => <CertifiPostCard onclick={() => setOpen(true)} />))}
      <MyDialog onClose={handleClose} open={open} maxWidth={false} scroll="body">
        <CertificationPostDetail handleClose={handleClose} />
      </MyDialog>
    </GridContainer>
  );
}

export const CardListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 40px 0;
  padding: 2rem 0;
  box-sizing: border-box;
`;

const GridContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-flow: dense;
  justify-items: center;
  position: relative;
  row-gap: 40px;

  padding: 2rem 0;
  box-sizing: border-box;

  .certifiDetail {
    grid-column: 1 / 5;
  }

  @media screen and (max-width: 1040px) {
    grid-template-columns: repeat(3, 1fr);

    .certifiDetail {
      grid-column: 1 / 4;
    }
  }

  @media screen and (max-width: 784px) {
    grid-template-columns: repeat(2, 1fr);

    .certifiDetail {
      grid-column: 1 / 3;
    }
  }
`;

const MyDialog = styled(Dialog)`
  max-width: none;
  margin: 0 auto;
`;
