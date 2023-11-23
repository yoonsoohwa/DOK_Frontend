import { styled } from "styled-components";
import { ButtonMain } from "common/ButtonMain";import { useState } from "react";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";
import { HandlerListItem } from "./HandlerLIstItem";


export function HandlerSelectContainer() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <HandlerSelectLayout>
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
      <ButtonContainer>
        <ButtonMain text="매칭하기" />
      </ButtonContainer>
    </HandlerSelectLayout>
  );
}

const HandlerSelectLayout = styled.div`
  display: flex;
  margin-top: 15px;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  gap: 10px;
`;

const ButtonContainer = styled.div`
  flex-shrink: 0;
`;

const SelectorLayout = styled.div`
  position: relative;
  width: 100%;
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