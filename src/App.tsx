import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import styled, { ThemeProvider } from "styled-components";
import "./App.css";
import { theme, defaultTheme } from "./components/styles/theme";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={defaultTheme}>
        <MuiThemeProvider theme={theme}>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </MuiThemeProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
