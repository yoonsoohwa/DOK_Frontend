import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import { ThemeProvider } from "styled-components";
import "./App.css";
import { theme, defaultTheme } from "./assets/themes/theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/Common/ScrollToTop";
import { MainPage } from "./pages/MainPage/MainPage";
import { CertificationListPage } from "./pages/Certification/CertificationListPage";

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
            </Routes>
          </BrowserRouter>
        </MuiThemeProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
