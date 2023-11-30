import { ButtonMain } from 'common/button/ButtonMain';
import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { AlertSuccess } from 'common/alert/AlertSuccess';
import { AlertLogin } from 'common/alert/AlertLogin';
import { AlertSnackbar } from 'common/alert/AlertSnackbar';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState, setOpenAlertLogin } from 'store/index';
import { matchingPostDetailUrl } from '../../api/apiUrls';

export function HandlerRequestButton() {
  const dispatch = useDispatch<AppDispatch>();
  const { matchingDetailPost, requestHandlers } = useSelector((state: RootState) => state.matching);
  const { user } = useSelector((state: RootState) => state.user);
  const [openSuccessAlert, setOpenSuccessAlert] = useState(false);
  const [openRequestErrorSnackber, setOpenRequestErrorSnackber] = useState(false);
  const [openSuccessRequestSnackbar, setOpenSuccessRequestSnackbar] = useState(false);
  const [isRequestHandler, setIsRequestHandler] = useState(false);
  const isLogined = user._id !== '';

  useEffect(() => {
    const isIncludeHandler = requestHandlers.filter((handler) => handler.user._id === user._id).length !== 0;
    setIsRequestHandler(isIncludeHandler);
  }, [requestHandlers]);

  const onClickHandler = () => {
    if (!isLogined) {
      dispatch(setOpenAlertLogin(true));
    } else {
      isRequestHandler ? setOpenRequestErrorSnackber(true) : setOpenSuccessAlert(true);
    }
  };

  const onClickApplyHandler = () => {
    const sendRequestHandler = async () => {
      try {
        const res = await fetch(`${matchingPostDetailUrl}/handler/${user._id}/${matchingDetailPost?._id}`, {
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
      <AlertLogin isBack={false} />
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
