import { ButtonMain } from 'common/button/ButtonMain';
import { useState } from 'react';
import { styled } from 'styled-components';
import { AlertError } from 'common/alert/AlertError';
import { AlertSuccess } from 'common/alert/AlertSuccess';
import { useNavigate } from 'react-router-dom';

export function HandlerRequestButton() {
  const [isLogined, setIsLogined] = useState(true); //로그인 여부
  const [openErrorAlert, setOpenErrorAlert] = useState(false);
  const [openSuccessAlert, setOpenSuccessAlert] = useState(false);
  const [openRequestError, setRequestError] = useState(false);
  const [isRequestHandler, setIsRequestHandler] = useState(false);
  const navigate = useNavigate();

  const onClickHandler = () => {
    if (!isLogined) {
      setOpenErrorAlert(true);
    } else {
      isRequestHandler ? setRequestError(true) : setOpenSuccessAlert(true);
    }
  };

  return (
    <ButtonContainer>
      <AlertError
        title="핸들러 신청을 위해서는 로그인이 필요합니다."
        desc="로그인 후 이용해 주시기 바랍니다. 계정이 없는 경우, 회원가입을 진행해 주세요."
        open={openErrorAlert}
        onClose={() => setOpenErrorAlert(false)}
        onClick={() => navigate('/login')}
      />
      <AlertError title="이미 신청된 산책글입니다." open={openRequestError} onClose={() => setRequestError(false)} onClick={() => navigate('/login')} />
      <AlertSuccess title="이 산책글의 핸들러를 신청하시겠습니까?" open={openSuccessAlert} onClick={() => setIsRequestHandler(true)} onClose={() => setOpenSuccessAlert(false)} />
      <ButtonMain text="핸들러 신청하기" fill={true} onClick={onClickHandler} />
    </ButtonContainer>
  );
}

const ButtonContainer = styled.div`
  width: 200px;
  margin-top: 30px;
`;
