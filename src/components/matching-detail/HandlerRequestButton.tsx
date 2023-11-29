import { ButtonMain } from 'common/button/ButtonMain';
import { useState } from 'react';
import { styled } from 'styled-components';
import { AlertError } from 'common/alert/AlertError';
import { AlertSuccess } from 'common/alert/AlertSuccess';
import { useNavigate, useParams } from 'react-router-dom';
import { AlertSnackbar } from 'common/alert/AlertSnackbar';

export function HandlerRequestButton() {
  const [isLogined, setIsLogined] = useState(true); //로그인 여부
  const [openErrorAlert, setOpenErrorAlert] = useState(false);
  const [openSuccessAlert, setOpenSuccessAlert] = useState(false);
  const [openRequestErrorSnackber, setOpenRequestErrorSnackber] = useState(false);
  const [openSuccessRequestSnackbar, setOpenSuccessRequestSnackbar] = useState(false);
  const [isRequestHandler, setIsRequestHandler] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const userId = '65656a8ce1ac8eee2d3352c3';

  const onClickHandler = () => {
    if (!isLogined) {
      setOpenErrorAlert(true);
    } else {
      isRequestHandler ? setOpenRequestErrorSnackber(true) : setOpenSuccessAlert(true);
    }
  };

  const onClickApplyHandler = () => {
    const sendRequestHandler = async () => {
      try {
        const res = await fetch(`http://kdt-sw-6-team01.elicecoding.com/api/matchingPostDetail/handler/${userId}/${id}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (res.status === 200) {
          setOpenSuccessRequestSnackbar(true);
          setIsRequestHandler(true);
        }
      } catch (err) {
        console.log(err);
      }
    };

    sendRequestHandler();
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
      <AlertSnackbar title="이미 신청한 산책글입니다." open={openRequestErrorSnackber} onClose={() => setOpenRequestErrorSnackber(false)} type="error" duration={1500} />
      <AlertSnackbar title="핸들러 신청이 완료되었습니다." open={openSuccessRequestSnackbar} onClose={() => setOpenSuccessRequestSnackbar(false)} duration={1500} />
      <AlertSuccess title="이 산책글의 핸들러를 신청하시겠습니까?" open={openSuccessAlert} onClick={onClickApplyHandler} onClose={() => setOpenSuccessAlert(false)} />
      <ButtonMain text="핸들러 신청하기" fill={true} onClick={onClickHandler} size="large" />
    </ButtonContainer>
  );
}

const ButtonContainer = styled.div`
  width: 200px;
`;
