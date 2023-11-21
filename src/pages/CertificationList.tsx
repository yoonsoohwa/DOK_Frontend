import { styled } from "styled-components";
import { ListPageTopBar } from "../components/common/ListPageTopBar";
import { CertifiPostList } from "../components/certification/PostList";
import { CertifiBanner } from "../components/certification/Banner";
import { AlertError } from "common/AlertError";
import { AlertSuccess } from "common/AlertSuccess";
import { useState } from "react";

export function CertificationListPage() {
  return (
    <CertificationList>
      <CertifiBanner />
      <AlertError title={"등록된 강아지가 없습니다."} desc={"프로필에서 강아지를 등록한 후 이용해주세요."} handleClick={() => {}} />
      <AlertSuccess desc={"인증 글 작성이\n완료되었습니다."} handleClick={() => {}} />
      <Section>
        <ListPageTopBar yellow="132" black="개의 산책 인증이 있습니다." />
        <CertifiPostList />
      </Section>
    </CertificationList>
  );
}

const CertificationList = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const Section = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
`;
