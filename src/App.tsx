import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import { ThemeProvider } from "styled-components";
import "./App.css";
import { theme, defaultTheme } from "./assets/themes/theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/Common/ScrollToTop";
import { MainPage } from "./pages/MainPage/MainPage";
import { CertificationListPage } from "./pages/Certification/CertificationListPage";
import { MatchingListPage } from "./pages/Matching/MatchingListPage";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={defaultTheme}>
        <MuiThemeProvider theme={theme}>
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/certification" element={<CertificationListPage />} />
              <Route path="/matching" element={<MatchingListPage />} />
            </Routes>
          </BrowserRouter>
        </MuiThemeProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
