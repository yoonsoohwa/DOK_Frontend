import { styled } from 'styled-components';
import { ChangeEvent, useState } from 'react';
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

export function ChangePassword() {
  const { user, selectedImg } = useSelector((state: RootState) => state.user);
  const [isOpenSearchAddress, setIsOpenSearchAddress] = useState(false);
  const [openSuccessAlert, setOpenSuccessAlert] = useState(false);
  const [userInfo, setUserInfo] = useState({
    id: user.userId,
    password: user.password,
    confirmPassword: user.nickname,
  });

  const sx = {
    width: '100%',
    height: '63.91px',
    '& .MuiInputBase-input.Mui-disabled': { WebkitTextFillColor: '#000000' },
  };

  const handleCheckIsValid = () => {
    console.log('dd');
  };

  return (
    <ChangePasswordContainer>
      <TextField label="현재 비밀번호" type='password' sx={sx} size="small" />
      <TextField label="새 비밀번호" type='password' helperText="* 영문 대소문자, 숫자, 특수 문자를 조합하여 8자 이상으로 구성해주세요." sx={sx} size="small" />
      <TextField label="새 비밀번호 확인" type='password' sx={sx} size="small" />
      <ButtonContainer>
        <ButtonMain text="변경하기" fill={true} onClick={() => setOpenSuccessAlert(true)} />
      </ButtonContainer>
      <AlertSuccess title={'비밀번호를 변경하시겠습니까?'} open={openSuccessAlert} onClick={handleCheckIsValid} onClose={() => setOpenSuccessAlert(false)} />
      {/* <AlertSnackbar title="변경이 완료되었습니다." open={openSuccessSnackbar} onClose={() => setOpenSuccessSnackbar(false)} /> */}
    </ChangePasswordContainer>
  );
}

const ChangePasswordContainer = styled.div`
  width: 100%;
  padding: 50px 50px 30px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;

const ButtonContainer = styled.div`
  width: 170px;
`;
