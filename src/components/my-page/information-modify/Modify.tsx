import { useState } from 'react';
import tabLeft from '/svg/modify_tab_left.svg';
import tabRight from '/svg/modify_tab_right.svg';
import { ModifyInfo } from './ModifyInfo';
import { ChangePassword } from './ChangePassword';
import { MainContainer, ModifyContainer, ModifyTab, TabContainer, TabImg } from './Modify.style';
import { setOpenErrorModifyInfoAlert, setOpenModifyInfoAlert, setOpenSuccessModifyInfoSnackbar } from 'store/alertSlice';
import { setCheckModifyInfoIsValid } from 'store/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'store/index';
import { AlertSnackbar } from 'common/alert/AlertSnackbar';
import { AlertSuccess } from 'common/alert/AlertSuccess';
import { AlertError } from 'common/alert/AlertError';

export const Modify = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [selected, setSelected] = useState<'info' | 'password'>('info');
  const { openErrorModifyInfoAlert, openModifyInfoAlert, openSuccessModifyInfoSnackbar } = useSelector((state: RootState) => state.alert);

  return (
    <MainContainer>
      <TabContainer>
        <ModifyTab className={selected === 'info' ? 'selected' : ''} onClick={() => setSelected('info')}>
          <span>개인정보 수정</span>
          {selected === 'info' && <TabImg $align="left" src={tabLeft} />}
        </ModifyTab>
        <ModifyTab className={selected === 'password' ? 'selected' : ''} onClick={() => setSelected('password')}>
          <span>비밀번호 변경</span>
          {selected === 'password' && <TabImg $align="right" src={tabRight} />}
        </ModifyTab>
      </TabContainer>
      <ModifyContainer>{selected === 'info' ? <ModifyInfo /> : <ChangePassword />}</ModifyContainer>
      <AlertSuccess
        title={'개인정보를 수정하시겠습니까?'}
        open={openModifyInfoAlert}
        onClick={() => dispatch(setCheckModifyInfoIsValid(true))}
        onClose={() => dispatch(setOpenModifyInfoAlert(false))}
      />
      <AlertSnackbar title="수정이 완료되었습니다." open={openSuccessModifyInfoSnackbar} onClose={() => dispatch(setOpenSuccessModifyInfoSnackbar(false))} />
      <AlertError
        title="개인정보 수정에 실패했습니다. 입력한 정보를 다시 확인해주세요."
        open={openErrorModifyInfoAlert}
        onClick={() => dispatch(setOpenErrorModifyInfoAlert(false))}
      />
    </MainContainer>
  );
};
