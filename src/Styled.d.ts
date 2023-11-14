import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    main: string;
    main2: string;
    main3: string;

    sub: string;
    sub2: string;
    sub3: string;

    gray: string;

    red: string;
    red2: string;
  }
}

declare module "@mui/material/styles" {
  interface Palette {
    mainW: Palette["primary"];
    mainB: Palette["primary"];
    main2W: Palette["primary"];
    main2B: Palette["primary"];
    main3W: Palette["primary"];
    main3B: Palette["primary"];

    subW: Palette["primary"];
    subB: Palette["primary"];
    sub2W: Palette["primary"];
    sub2B: Palette["primary"];
    sub3W: Palette["primary"];
    sub3B: Palette["primary"];

    grayB: Palette["primary"];

    redB: Palette["primary"];
    redW: Palette["primary"];
    red2B: Palette["primary"];
    red2W: Palette["primary"];
  }
  interface PaletteOptions {
    mainW: PaletteOptions["primary"];
    mainB: PaletteOptions["primary"];
    main2W: PaletteOptions["primary"];
    main2B: PaletteOptions["primary"];
    main3W: PaletteOptions["primary"];
    main3B: PaletteOptions["primary"];

    subW: PaletteOptions["primary"];
    subB: PaletteOptions["primary"];
    sub2W: PaletteOptions["primary"];
    sub2B: PaletteOptions["primary"];
    sub3W: PaletteOptions["primary"];
    sub3B: PaletteOptions["primary"];

    grayB: PaletteOptions["primary"];

    redB: PaletteOptions["primary"];
    redW: PaletteOptions["primary"];
    red2B: PaletteOptions["primary"];
    red2W: PaletteOptions["primary"];
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    mainW: true;
    mainB: true;
    main2W: true;
    main2B: true;
    main3W: true;
    main3B: true;

    subW: true;
    subB: true;
    sub2W: true;
    sub2B: true;
    sub3W: true;
    sub3B: true;

    grayB: true;

    redB: true;
    redW: true;
    red2B: true;
    red2W: true;
  }
}
