import { styled } from "styled-components";
import React from "react";
import { ListPageHeader } from "../../components/Common/Header/ListPageHeader";

export function CertificationPostListPage() {
  return (
    <CertificationList>
      <ListPageHeader />
    </CertificationList>
  );
}

const CertificationList = styled.div`
  width: 100%;
  margin: 0 auto;
`;
