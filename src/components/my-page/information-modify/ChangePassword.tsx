import { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'store/index';
import DaumPostcode from 'react-daum-postcode';
import { ChangeProfileImg } from './ChangeProfileImg';
import { ButtonMain } from 'common/button/ButtonMain';
import { AlertSuccess } from 'common/alert/AlertSuccess';
import { AlertSnackbar } from 'common/alert/AlertSnackbar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Modal from 'react-modal';
import { ButtonContainer, ChangePasswordContainer } from './ChangePassword.style';
import { myPasswordUrl } from '../../../api/apiUrls';

export function ChangePassword() {
  const { user } = useSelector((state: RootState) => state.user);
  const [isOpenSearchAddress, setIsOpenSearchAddress] = useState(false);
  const [openSuccessAlert, setOpenSuccessAlert] = useState(false);
  const [password, setPassword] = useState({
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });
  const [isValid, setIsValid] = useState({
    currentPassword: true,
    newPassword: true,
    confirmNewPassword: true,
  });

  const sx = {
    width: '100%',
    height: '63.91px',
    '& .MuiInputBase-input.Mui-disabled': { WebkitTextFillColor: '#000000' },
  };

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, type: string) => {
    setPassword({ ...password, [type]: e.target.value.trim() });

    if (type === 'currentPassword') {
      isCurrentPasswordValid();
    }

    if (type === 'newPassword' || type === 'confirmNewPassword') {
      isNewPasswordValid();
    }
  };

  const handleCheckIsValid = () => {
    isCurrentPasswordValid();
    isNewPasswordValid();

    if (Object.values(isValid).every((value) => value)) {
      changeUserPassword();
    } else {
    }
  };

  const isCurrentPasswordValid = () => {
    setIsValid((prev) => ({ ...prev, currentPassword: password.currentPassword !== '' }));
  };

  const isNewPasswordValid = () => {
    let check = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[a-zA-Z\d!@#$%^&*()_+]{8,}$/;
    setIsValid((prev) => ({ ...prev, newPassword: password.newPassword !== '' && check.test(password.newPassword) }));
    setIsValid((prev) => ({ ...prev, confirmNewPassword: password.newPassword === password.confirmNewPassword }));
  };

  const changeUserPassword = async () => {
    try {
      const res = await fetch(`${myPasswordUrl}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          currentPassword: password.currentPassword,
          newPassword: password.newPassword,
          confirmNewPassword: password.confirmNewPassword,
        }),
        credentials: 'include',
      });

      if (res.ok) {
        // setOpenSuccessSnackbar(true);
        window.location.reload();
      }
    } catch (err) {
      console.log('fetch error: ' + err);
    }
  };
  return (
    <ChangePasswordContainer>
      <TextField label="현재 비밀번호" onChange={(e) => handleChangePassword(e, 'currentPassword')} error={!isValid.currentPassword} type="password" sx={sx} size="small" />
      <TextField
        label="새 비밀번호"
        onChange={(e) => handleChangePassword(e, 'newPassword')}
        error={!isValid.newPassword}
        type="password"
        helperText="* 영문 대소문자, 숫자, 특수 문자를 조합하여 8자 이상으로 구성해주세요."
        sx={sx}
        size="small"
      />
      <TextField
        label="새 비밀번호 확인"
        onChange={(e) => handleChangePassword(e, 'confirmNewPassword')}
        error={!isValid.confirmNewPassword}
        type="password"
        sx={sx}
        size="small"
      />
      <ButtonContainer>
        <ButtonMain text="변경하기" fill={true} onClick={() => setOpenSuccessAlert(true)} />
      </ButtonContainer>
      <AlertSuccess title={'비밀번호를 변경하시겠습니까?'} open={openSuccessAlert} onClick={handleCheckIsValid} onClose={() => setOpenSuccessAlert(false)} />
      {/* <AlertSnackbar title="변경이 완료되었습니다." open={openSuccessSnackbar} onClose={() => setOpenSuccessSnackbar(false)} /> */}
    </ChangePasswordContainer>
  );
}