import { Search } from "@mui/icons-material";
import { Button } from "@mui/material";
import styled from "styled-components";

interface type {
  onClick: (e: React.MouseEvent) => void;
}

export function SearchButton({ onClick }: type) {
  return (
    <MyButton color="grayB" variant="contained" onClick={onClick}>
      <Search />
    </MyButton>
  );
}

const MyButton = styled(Button)`
  &.MuiButtonBase-root {
    box-shadow: none;
    flex-shrink: 0;
    margin-left: 4px;
    min-width: 20px;
    padding: 6px 9px;
  }
  &.MuiButtonBase-root:hover {
    box-shadow: none;
    background-color: #cdcdcd;
  }
`;
