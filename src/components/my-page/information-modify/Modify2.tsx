import { styled } from 'styled-components';
import Button from '@mui/material/Button';
import { ChangeTextfiled } from './ChangeTextfiled';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'store/index';
import { useEffect, useRef, useState } from 'react';
import { ButtonMain } from 'common/button/ButtonMain';
import Modal from 'react-modal';
import DaumPostcode from 'react-daum-postcode';
import userImage from '/svg/user_image1.svg';
import ModeIcon from '@mui/icons-material/Mode';
import { AlertSuccess } from 'common/alert/AlertSuccess';
import { AlertSnackbar } from 'common/alert/AlertSnackbar';
import { ChangeProfileImg } from './ChangeProfileImg';

export const Modify = () => {
  const { user, selectedImg } = useSelector((state: RootState) => state.user);

  const isFirstRender = useRef(true);
  const isFirstRenderPassword = useRef(true);
  const isFirstRenderPwdConfirm = useRef(true);
  const [password, setPassword] = useState('');
  const [pwdConfirm, setPwdConfirm] = useState('');
  const [name, setName] = useState(user.name);
  const [nickname, setNickname] = useState(user.nickname);
  const [address, setAddress] = useState(user.address);
  const [phoneNumber, setPhoneNumber] = useState(`010 ${user.phoneNumber}`);
  const [isOpenSearchAddress, setIsOpenSearchAddress] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [openSuccessAlert, setOpenSuccessAlert] = useState(false);
  const [openSuccessSnackbar, setOpenSuccessSnackbar] = useState(false);
  const [isValid, setIsValid] = useState({
    nickname: false,
    password: false,
    passwordConfirm: false,
    name: false,
    address: false,
    phoneNum: false,
  });

  const handleSaveBtn = async () => {
    setButtonClicked(true);
    if (Object.values(isValid).includes(true)) {
      return;
    }

    const res = await fetch(`/api/users/myInfo`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        phoneNumber: phoneNumber.slice(4),
        password: password,
        confirmPassword: pwdConfirm,
        address: address,
        nickname: nickname,
        userImg: selectedImg,
      }),
      credentials: 'include',
    });

    setOpenSuccessSnackbar(true);
    window.location.reload();
  };

  const handleAddressSearch = () => {
    setIsOpenSearchAddress(true);
  };
  const handleSelectAddress = (data: any) => {
    setAddress({ text: data.address, code: data.bcode });
    setIsOpenSearchAddress(false);
  };

  const pwdValidation = () => {
    let check = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).*$/;
    return check.test(`${password}`);
  };

  const phoneValidation = () => {
    let check = /^010\d{8}$/;
    return check.test(`${phoneNumber.replaceAll(' ', '')}`);
  };

  useEffect(() => {
    if (!isFirstRender.current) {
      setIsValid((prevIsValid) => ({
        ...prevIsValid,
        nickname: !nickname,
        name: !name,
        phoneNum: !phoneNumber || !phoneValidation(),
        address: !address,
      }));
    } else {
      isFirstRender.current = false;
    }
    setButtonClicked(false);
  }, [buttonClicked, nickname, name, phoneNumber, address]);

  useEffect(() => {
    if (!isFirstRenderPassword.current) {
      setIsValid((prevIsValid) => ({
        ...prevIsValid,
        password: !pwdValidation() || !password,
      }));
    } else {
      isFirstRenderPassword.current = false;
    }
    setButtonClicked(false);
  }, [buttonClicked, password]);

  useEffect(() => {
    if (!isFirstRenderPwdConfirm.current) {
      setIsValid((prevIsValid) => ({
        ...prevIsValid,
        passwordConfirm: password !== pwdConfirm || !pwdConfirm,
      }));
    } else {
      isFirstRenderPwdConfirm.current = false;
    }
    setButtonClicked(false);
  }, [buttonClicked, pwdConfirm]);

  return (
    <MainFrame>
      <ChangeProfileImg />
      <ChangeTextfiled label="닉네임" onChange={(e) => setNickname(e.target.value.trim())} defaultValue={nickname} error={isValid.nickname} />
      <ChangeTextfiled
        label="새로운 비밀번호"
        type="password"
        onChange={(e) => setPassword(e.target.value.trim())}
        error={isValid.password}
        helperText="* 영문 대소문자, 숫자, 특수 문자를 조합하여 8자 이상으로 구성해주세요."
      />
      <ChangeTextfiled label="새로운 비밀번호 확인" type="password" onChange={(e) => setPwdConfirm(e.target.value.trim())} error={isValid.passwordConfirm} />
      <ChangeTextfiled label="이름" onChange={(e) => setName(e.target.value.trim())} defaultValue={name} error={!Boolean(name)} />
      <AddressLayout>
        <ChangeTextfiled label="주소" value={address.text} onChange={(e) => console.log(e.target.value.trim())} type="address" error={isValid.address} />
        <Button variant="outlined" sx={{ width: '110px', height: '40px', marginLeft: '10px' }} onClick={handleAddressSearch}>
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
              zIndex: 1,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            },
          }}
        >
          <DaumPostcode onComplete={handleSelectAddress} />
        </Modal>
      </AddressLayout>
      <ChangeTextfiled
        label="전화번호"
        onChange={(e) => setPhoneNumber(e.target.value)}
        defaultValue={phoneNumber}
        error={isValid.phoneNum}
        helperText="* 010 1234 5678과 같이 입력해주세요."
      />
      <ButtonContainer>
        <ButtonMain text="저장하기" fill={true} onClick={() => setOpenSuccessAlert(true)} />
      </ButtonContainer>
      <AlertSuccess title={'정보를 수정하시겠습니까?'} open={openSuccessAlert} onClick={handleSaveBtn} onClose={() => setOpenSuccessAlert(false)} />
      <AlertSnackbar title="수정이 완료되었습니다." open={openSuccessSnackbar} onClose={() => setOpenSuccessSnackbar(false)} />
    </MainFrame>
  );
};

const MainFrame = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  border: #fcd11e dashed 3px;
  border-radius: 10px;
  width: 540px;
  height: 100%;
  margin: 3% auto;
  padding: 30px 70px;
  box-sizing: border-box;
  gap: 13px;

  @media screen and (max-width: 600px){
    width: 440px;
    gap: 20px;
    padding: 30px 55px;
  }
`;

const AddressLayout = styled.div`
  display: flex;
  width: 100%;
`;

const ButtonContainer = styled.div`
  width: 150px;
  padding-top: 30px;
`;
