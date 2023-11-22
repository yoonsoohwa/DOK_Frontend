import { useState } from "react";
import { styled } from "styled-components";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";
import { HandlerListItem } from "./HandlerLIstItem";

export function HandlerSelector() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <SelectorLayout>
        <SelectButtonContainer onClick={handleClick}>핸들러를 선택해주세요.</SelectButtonContainer>
        {open ? (
          <HandlerListContainer className="custom-scrollbar">
            <HandlerListItem />
            <HandlerListItem />
            <HandlerListItem />
            <HandlerListItem />
            <HandlerListItem />
          </HandlerListContainer>
        ) : null}
      </SelectorLayout>
    </ClickAwayListener>
  );
}

const SelectorLayout = styled.div`
  position: relative;
  width: 80%;
  height: 3rem;
`;

const SelectButtonContainer = styled.button`
  width: 100%;
  height: 100%;
  padding: 0;
  background-color: #fff;
  border: 1px dashed ${({ theme }) => theme.sub2};
`;

const HandlerListContainer = styled.div`
  max-height: 170px;
  position: absolute;
  right: 0;
  left: 0;
  z-index: 1;
  border: 1.5px solid ${({ theme }) => theme.sub3};
  overflow: scroll;
  overflow-x: hidden;
`;
