import { Button } from "@mui/material";
import styled from "styled-components";

interface textType {
  text: string;
}

export function MainButton({ text }: textType) {
  return (
    <Button color="mainB" variant="contained" sx={{ borderRadius: "50px" }}>
      {text}
    </Button>
  );
}
