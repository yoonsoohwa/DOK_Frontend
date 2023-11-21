import styled from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NonMemberHeader } from "./components/header/Header";
import { MemberHeader } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";

import { CertificationCreatePage, CertificationListPage, LoginPage, MainPage, MatchingCreatePage, MatchingDetailPage, MatchingListPage, MyPage, SignUpPage } from "./pages";
import { useScrollTop } from "./hooks/useScrollTop";

export function AppRoutes() {
  // acceptToken 값 받으면 여기서 분기처리 하면 될 것 같습니다.
  const test = true;
  useScrollTop();

  return (
    <DivForHeaderFooter>
      {/* 이 부분에서 acceptToken 유무로 헤더 조정 */}
      {test ? <NonMemberHeader /> : <MemberHeader />}
      <DivForFixedHeader>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/certification" element={<CertificationListPage />} />
          <Route path="/certification/write" element={<CertificationCreatePage />} />

          <Route path="/matching" element={<MatchingListPage />} />
          <Route path="/matching/detail" element={<MatchingDetailPage />} />
          <Route path="/matching/write" element={<MatchingCreatePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </DivForFixedHeader>
      <Footer />
    </DivForHeaderFooter>
  );
}

const DivForHeaderFooter = styled.div`
  min-height: 100vh;
  margin: 0 auto;
`;

const DivForFixedHeader = styled.div`
  padding-top: 70px;
`;
