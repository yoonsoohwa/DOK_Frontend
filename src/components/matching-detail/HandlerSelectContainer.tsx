import { styled } from 'styled-components';
import { Children, useEffect, useState } from 'react';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import { HandlerListItem } from './HandlerLIstItem';
import { ButtonMain } from 'common/button/ButtonMain';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState, updateMatchingStatus } from 'store/index';
import { matchingPostDetailUrl } from '../../api/apiUrls';
import { AlertSnackbar } from 'common/alert/AlertSnackbar';
import { AlertSuccess } from 'common/alert/AlertSuccess';

export function HandlerSelectContainer() {
  const dispatch = useDispatch<AppDispatch>();
  const { requestHandlers, selectedHandler } = useSelector((state: RootState) => state.matching);
  const [open, setOpen] = useState(false);
  const [openErrorAlert, setOpenErrorAlert] = useState(false);
  const [openSuccessSnackbar, setOpenSuccessSnackbar] = useState(false);
  const [openSuccessAlert, setOpenSuccessAlert] = useState(false);
  const [openIsSelectedSnackber, setOpenIsSelectedSnackber] = useState(false);
  const [isSendedMatching, setIsSendedMatching] = useState(false);

  const handleClickHandler = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const handlerSendMatchingClick = () => {
    //선택한 핸들러가 없을 경우
    if (!selectedHandler) {
      setOpenErrorAlert(true);
      return;
    }

    //이미 핸들러 매칭 완료가 되었을 경우
    if (isSendedMatching) {
      setOpenIsSelectedSnackber(true);
      return;
    }
    setOpenSuccessAlert(true);
  };

  const onSubmitHandler = () => {
    const sendSelectedHandler = async () => {
      if (!selectedHandler) return;
      const { matchingPostId, user } = selectedHandler;
      try {
        const res = await fetch(`${matchingPostDetailUrl}/handler/${selectedHandler?.matchingPostId}/${user._id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (res.status === 200) {
          setOpenSuccessSnackbar(true);
          setIsSendedMatching(true);
          dispatch(updateMatchingStatus(matchingPostId));
        }
      } catch (err) {
        console.log(err);
      }
    };

    sendSelectedHandler();
  };

  useEffect(() => {
    setOpen(false);
  }, [selectedHandler]);

  return (
    <HandlerSelectLayout>
      <ClickAwayListener onClickAway={handleClickAway}>
        <SelectorLayout>
          {selectedHandler ? (
            <div onClick={handleClickHandler}>
              <HandlerListItem handler={selectedHandler} />
            </div>
          ) : (
            <SelectButtonContainer onClick={handleClickHandler} disabled={requestHandlers.length === 0}>
              {requestHandlers.length === 0 ? '매칭을 요청한 핸들러가 없습니다' : '핸들러를 선택해주세요.'}
            </SelectButtonContainer>
          )}
          {open ? (
            <HandlerListContainer className={`custom-scrollbar ${requestHandlers.length > 3 ? 'scroll' : null}`}>
              {Children.toArray(
                requestHandlers.map((handler) => {
                  return <HandlerListItem handler={handler} />;
                }),
              )}
            </HandlerListContainer>
          ) : null}
        </SelectorLayout>
      </ClickAwayListener>
      {requestHandlers.length !== 0 ? (
        <ButtonContainer>
          <ButtonMain text="매칭하기" onClick={handlerSendMatchingClick} />
        </ButtonContainer>
      ) : null}
      <AlertSnackbar title="핸들러를 선택해주세요." open={openErrorAlert} onClose={() => setOpenErrorAlert(false)} type="error" />
      <AlertSuccess
        title={`${selectedHandler?.user.nickname}님과 매칭하시겠습니까?`}
        open={openSuccessAlert}
        onClick={onSubmitHandler}
        onClose={() => setOpenSuccessAlert(false)}
      />
      <AlertSnackbar title="매칭이 완료된 글입니다." open={openIsSelectedSnackber} onClose={() => setOpenIsSelectedSnackber(false)} type="error" duration={1500} />
      <AlertSnackbar title="선택한 핸들러와 매칭이 완료되었습니다." open={openSuccessSnackbar} onClose={() => setOpenSuccessSnackbar(false)} />
    </HandlerSelectLayout>
  );
}

const HandlerSelectLayout = styled.div`
  display: flex;
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
  height: 50px;

  > div {
    border: solid 1.5px ${({ theme }) => theme.sub3};
  }
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

  &.scroll {
    overflow: scroll;
    overflow-x: hidden;
  }
`;
