import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import styled, { ThemeProvider } from "styled-components";
import "./App.css";
import { theme, defaultTheme } from "./assets/themes/theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/Common/Scroll/ScrollToTop";
import { MainPage } from "./pages/MainPage/MainPage";
import { CertificationListPage } from "./pages/Certification/CertificationListPage";
import { MatchingListPage } from "./pages/Matching/MatchingListPage";
import { LoginPage } from "./pages/Login/LoginPage";
import { NonMemberHeader } from "./components/Header/Header";
import { MemberHeader } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

function App() {
  
  // acceptToken 값 받으면 여기서 분기처리 하면 될 것 같습니다.
  const test = true;

  return (
    <div className="App">
      <ThemeProvider theme={defaultTheme}>
        <MuiThemeProvider theme={theme}>
          <BrowserRouter>
            <ScrollToTop />
            <DivForHeaderFooter>
              {/* 이 부분에서 acceptToken 유무로 헤더 조정 */}
            {test ? <NonMemberHeader /> : <MemberHeader />}
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/certification" element={<CertificationListPage />} />
              <Route path="/matching" element={<MatchingListPage />} />
              <Route path="/login" element={<LoginPage />} />
            </Routes>
            <Footer/>
            </DivForHeaderFooter>
          </BrowserRouter>
        </MuiThemeProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;

const DivForHeaderFooter = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`