import { styled } from "styled-components";
import { HandlerSelector } from "./HandlerSelector";
import { ButtonMain } from "common/ButtonMain";

export function HandlerSelectContainer() {
  return (
    <HandlerSelectLayout>
      <HandlerSelector />
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
