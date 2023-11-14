import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import { ThemeProvider } from "styled-components";
import "./App.css";
import { theme, defaultTheme } from "./assets/themes/theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";
import { MainPage } from "./pages/MainPage/MainPage";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={defaultTheme}>
        <MuiThemeProvider theme={theme}>
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/test" element={<MainPage />} />
            </Routes>
          </BrowserRouter>
        </MuiThemeProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
