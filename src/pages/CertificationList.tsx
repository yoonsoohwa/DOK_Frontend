import { styled } from "styled-components";
import { ListPageTopBar } from "../components/common/ListPageTopBar";
import { CertifiPostList } from "../components/certification/PostList";
import { CertifiBanner } from "../components/certification/Banner";

export function CertificationListPage() {
  return (
    <CertificationList>
      <CertifiBanner />
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
