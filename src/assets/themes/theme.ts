import { createTheme } from "@mui/material";
import { DefaultTheme } from "styled-components";

export const defaultTheme: DefaultTheme = {
  main: "#FCD11E",
  main2: "#F8EBA4",
  main3: "#F8F3C1",

  sub: "#4194CB",
  sub2: "#62AADA",
  sub3: "#96CEF2",

  gray: "#D9D9D9",

  red: "#D32F2F",
  red2: "#FFA9A9",
};

export const theme = createTheme({
  palette: {
    primary: {
      main: "#FCD11E",
      contrastText: "#3E3E3E",
    },
    secondary: {
      main: "#4194CB",
      contrastText: "#3E3E3E",
    },
    mainW: {
      main: "#FCD11E",
      contrastText: "#FFFFFF",
    },
    mainB: {
      main: "#FCD11E",
      contrastText: "#3E3E3E",
    },
    main2W: {
      main: "#F8EBA4",
      contrastText: "#FFFFFF",
    },
    main2B: {
      main: "#F8EBA4",
      contrastText: "#3E3E3E",
    },
    main3W: {
      main: "#F8F3C1",
      contrastText: "#FFFFFF",
    },
    main3B: {
      main: "#F8F3C1",
      contrastText: "#3E3E3E",
    },

    subW: {
      main: "#4194CB",
      contrastText: "#FFFFFF",
    },
    subB: {
      main: "#4194CB",
      contrastText: "#3E3E3E",
    },
    sub2W: {
      main: "#62AADA",
      contrastText: "#FFFFFF",
    },
    sub2B: {
      main: "#62AADA",
      contrastText: "#3E3E3E",
    },
    sub3W: {
      main: "#96CEF2",
      contrastText: "#FFFFFF",
    },
    sub3B: {
      main: "#96CEF2",
      contrastText: "#3E3E3E",
    },

    grayB: {
      main: "#D9D9D9",
      contrastText: "#3E3E3E",
    },

    redB: {
      main: "#D32F2F",
      contrastText: "#3E3E3E",
    },
    redW: {
      main: "#D32F2F",
      contrastText: "#FFFFFF",
    },
    red2B: {
      main: "#FFA9A9",
      contrastText: "#3E3E3E",
    },
    red2W: {
      main: "#FFA9A9",
      contrastText: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: "Noto Sans KR",
  },
});
