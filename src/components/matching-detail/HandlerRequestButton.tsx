import { ButtonMain } from "common/button/ButtonMain";
import { styled } from "styled-components";

export function HandlerRequestButton() {
  return (
    <ButtonContainer>
      <ButtonMain text="핸들러 신청하기" fill={true} />
    </ButtonContainer>
  );
}

const ButtonContainer = styled.div`
  width: 200px;
  margin-top: 30px;
`;
