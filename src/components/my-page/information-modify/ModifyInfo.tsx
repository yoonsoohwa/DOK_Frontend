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

export function ModifyInfo() {
  const { user, selectedImg } = useSelector((state: RootState) => state.user);
  const [isOpenSearchAddress, setIsOpenSearchAddress] = useState(false);
  const [openSuccessAlert, setOpenSuccessAlert] = useState(false);
  const [userInfo, setUserInfo] = useState({
    id: user.userId,
    name: user.name,
    nickname: user.nickname,
    address: user.address,
    phoneNumber: `010 ${user.phoneNumber}`,
  });

  const sx = {
    width: '100%',
    height: '63.91px',
    '& .MuiInputBase-input.Mui-disabled': { WebkitTextFillColor: '#000000' },
  };

  const handleSelectAddress = (data: any) => {
    setUserInfo({ ...userInfo, address: { text: data.address, code: data.bcode } });
    setIsOpenSearchAddress(false);
  };

  const handleChangeUserInfo = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, type: string) => {
    setUserInfo({ ...userInfo, [type]: e.target.value.trim() });
  };

  const handleCheckIsValid = () => {
    console.log('dd');
  };

  return (
    <ModifyInfoContainer>
      <ChangeProfileImg />
      <TextField label="아이디" value={userInfo.id} sx={sx} size="small" disabled />
      <TextField label="이름" defaultValue={userInfo.name} onChange={(e) => handleChangeUserInfo(e, 'name')} error={!Boolean(userInfo.name)} sx={sx} size="small" />
      <TextField label="닉네임" defaultValue={userInfo.nickname} onChange={(e) => handleChangeUserInfo(e, 'nickname')} sx={sx} size="small" />
      <AddressLayout>
        <TextField label="주소" value={userInfo.address.text} sx={sx} size="small" disabled />
        <Button variant="outlined" sx={{ width: '110px', height: '40px', marginLeft: '10px' }} onClick={() => setIsOpenSearchAddress(true)}>
          지역검색
        </Button>
        <Modal
          isOpen={isOpenSearchAddress}
          ariaHideApp={false}
          style={{
            content: {
              width: '50%',
              height: '50%',
              margin: 'auto',
            },
            overlay: {
              zIndex: 10,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            },
          }}
        >
          <DaumPostcode onComplete={handleSelectAddress} />
        </Modal>
      </AddressLayout>
      <TextField
        label="전화번호"
        defaultValue={userInfo.phoneNumber}
        onChange={(e) => handleChangeUserInfo(e, 'phoneNumber')}
        helperText="* 010 1234 5678과 같이 입력해주세요."
        sx={sx}
        size="small"
      />
      <ButtonContainer>
        <ButtonMain text="수정하기" fill={true} onClick={() => setOpenSuccessAlert(true)} />
      </ButtonContainer>
      <AlertSuccess title={'개인정보를 수정하시겠습니까?'} open={openSuccessAlert} onClick={handleCheckIsValid} onClose={() => setOpenSuccessAlert(false)} />
      {/* <AlertSnackbar title="수정이 완료되었습니다." open={openSuccessSnackbar} onClose={() => setOpenSuccessSnackbar(false)} /> */}
    </ModifyInfoContainer>
  );
}

const ModifyInfoContainer = styled.div`
  width: 100%;
  padding: 40px 50px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;

const AddressLayout = styled.div`
  display: flex;
  width: 100%;
`;

const ButtonContainer = styled.div`
  width: 170px;
  padding-top: 20px;
`;
