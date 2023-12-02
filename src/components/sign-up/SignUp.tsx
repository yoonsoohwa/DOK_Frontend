import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { Box, Button, TextField, FormControlLabel, Checkbox, colors } from '@mui/material';
import { PersonInformation, TrilateralAgreement } from './Agreement';
import Modal from 'react-modal';
import DaumPostcode from 'react-daum-postcode';
import { AddressAPI } from './AddressAPI';
import { PhoneCertification } from './PhoneCertification';
import { error } from 'console';
import { Height, WidthFull } from '@mui/icons-material';
import zIndex from '@mui/material/styles/zIndex';
import { useNavigate } from 'react-router-dom';

export function SignUp() {
  // 약관 동의하는 부분의 코드~
  const [checked, setChecked] = React.useState([true, false]);

  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, event.target.checked]);
    setAgreeCheck(!agreeCheck);
  };

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, checked[1]]);
  };

  const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([checked[0], event.target.checked]);
  };

  const children = (
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
      <FormControlLabel label={<PersonInformation />} control={<Checkbox checked={checked[0]} disabled onChange={handleChange2} />} sx={{ marginTop: '2%' }} />
      <FormControlLabel label={<TrilateralAgreement />} control={<Checkbox checked={checked[0]} disabled onChange={handleChange3} />} sx={{ marginTop: '2%' }} />
    </Box>
  );
  // ~약관 동의하는 부분의 코드

  const [idCheck, setIdCheck] = useState<boolean>(false);
  const [pwdCheck, setPwdCheck] = useState<boolean>(false);
  const [pwdConfirmCheck, setPwdConfirmCheck] = useState<boolean>(false);
  const [nameCheck, setNameCheck] = useState<boolean>(false);
  const [addressCheck, setAddressCheck] = useState<boolean>(false);
  const [phoneCheck, setPhoneCheck] = useState<boolean>(false);
  const [nicknameCheck, setNicknameCheck] = useState<boolean>(false);
  const [agreeCheck, setAgreeCheck] = useState<boolean>(false);
  const [formDataCheck, setFormDataCheck] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [idValue, setIdValue] = useState<string>();
  const [pwdValue, setPwdValue] = useState<string>();
  const [pwdConfirmValue, setPwdConfirmValue] = useState<string>();
  const [nameValue, setNameValue] = useState<string>();
  const [addressValue, setAddressValue] = useState<string>();
  const [addressBCode, setAddressBCode] = useState<string>();
  const [phoneValue, setPhoneValue] = useState<string>();
  const [nicknameValue, setNicknameValue] = useState<string>();
  const [agreeValue, setAgreeValue] = useState<boolean>(true);
  const nav = useNavigate();

  useEffect(() => {
    idValue !== undefined && idValue.length >= 1 ? setIdCheck(true) : setIdCheck(false);
    pwdValue !== undefined && pwdValue.length >= 1 ? setPwdCheck(true) : setPwdCheck(false);
    pwdConfirmValue !== undefined && pwdConfirmValue.length >= 1 ? setPwdConfirmCheck(true) : setPwdConfirmCheck(false);
    nameValue !== undefined && nameValue.length >= 1 ? setNameCheck(true) : setNameCheck(false);
    addressValue !== undefined && addressValue.length >= 1 ? setAddressCheck(true) : setAddressCheck(false);
    phoneValue !== undefined && phoneValue.length >= 1 ? setPhoneCheck(true) : setPhoneCheck(false);
    nicknameValue !== undefined && nicknameValue.length >= 1 ? setNicknameCheck(true) : setNicknameCheck(false);

    idCheck && pwdCheck && pwdConfirmCheck && nameCheck && addressCheck && phoneCheck && nicknameCheck && agreeCheck ? setFormDataCheck(false) : setFormDataCheck(true);
  }, [idValue, pwdValue, pwdConfirmValue, nameValue, addressValue, phoneValue, nicknameValue, agreeCheck]);

  // useEffect(() => {

  // },[formDataCheck]);

  const phoneValidation = () => {
    let check = /^010\d{8}$/;
    return check.test(`${phoneValue}`);
  };

  const pwdValidation = () => {
    let check = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).*$/;
    return check.test(`${pwdValue}`);
  };

  // 주소 검색
  const handleAddressSearch = () => {
    setIsOpen(true);
  };
  const handleSelectAddress = (data: any) => {
    setAddressBCode(data.bcode);
    setAddressValue(data.address);
    setIsOpen(false);
  };

  const handleCheckFormData = async () => {
    // 휴대폰 010 지우고 앞 4자리 뒷 4자리 띄워주기 (백에서 이렇게받음)
    const splitPhoneValue = phoneValue?.substring(3);
    const firstPhoneValue = splitPhoneValue?.substring(0, 4);
    const secondPhoneValue = splitPhoneValue?.substring(4);

    console.log(addressValue);

    const signUp = await fetch('/api/users/signUp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: idValue,
        password: pwdValue,
        name: nameValue,
        nickname: nicknameValue,
        address: {
          text: addressValue,
          code: addressBCode,
        },
        // "bcode" : addressBCode,
        phoneNumber: firstPhoneValue + ' ' + secondPhoneValue,
        introduce: '',
        isCertificated: true,
        deletedAt: '',
      }),
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
    nav('/login');
  };

  //   ID 중복확인 fetch
  const handleCheckID = async () => {};

  return (
    <MainDiv>
      <LoginDiv>
        <p>회원가입</p>

        <ButtonDiv>
          <TextField
            error={idValue !== undefined && !idCheck ? true : false}
            id="testTest"
            label="아이디"
            defaultValue={idValue}
            onChange={(event) => setIdValue(event.target.value)}
            placeholder="아이디를 작성해주세요"
            sx={{ width: '60%', margin: '10% 0 5% 0' }}
          />
        </ButtonDiv>

        <TextField
          error={pwdValue !== undefined && !pwdValidation() ? true : false}
          defaultValue={pwdValue}
          onChange={(event) => setPwdValue(event.target.value)}
          id="testTest2"
          label="비밀번호"
          type="password"
          placeholder="비밀번호를 작성해주세요"
          helperText="* 최소 8자 이상이어야 하며, 알파벳, 숫자, 특수 문자를 포함해야 합니다."
          sx={{ width: '60%', margin: '0 0 5% 0' }}
        />

        <TextField
          // phoneValue !== undefined && !phoneValidation() ? true : false
          error={pwdConfirmValue !== undefined && !(pwdConfirmValue === pwdValue) ? true : false}
          defaultValue={pwdConfirmValue}
          onChange={(event) => setPwdConfirmValue(event.target.value)}
          label="비밀번호 확인"
          type="password"
          placeholder="비밀번호를 다시 한 번 작성해주세요"
          helperText={pwdConfirmValue !== undefined && !(pwdConfirmValue === pwdValue) ? '입력하신 비밀번호가 다릅니다.' : ''}
          sx={{ width: '60%', margin: '0 0 5% 0' }}
        />

        <TextField
          error={nameValue !== undefined && !nameCheck ? true : false}
          defaultValue={nameValue}
          onChange={(event) => setNameValue(event.target.value)}
          id="loginID"
          label="이름"
          placeholder="이름을 작성해주세요"
          sx={{ width: '60%', margin: '0 0 5% 0' }}
        />

        <ButtonDiv>
          {/* 주소검색  */}
          {/* {addressCheck ? <AddressAPI addressCheck/> : <AddressAPI />}   */}

          <TextField
            error={addressValue !== undefined && !addressCheck ? true : false}
            label={addressValue}
            onChange={(e) => setAddressValue(e.target.value)}
            disabled
            sx={{ width: '60%', margin: '0 0 5% 0' }}
          />
          <Button variant="contained" color="mainB" sx={{ margin: '0% 0% 5% 2.5%' }} onClick={handleAddressSearch}>
            주소검색
          </Button>

          <Modal
            isOpen={isOpen}
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
        </ButtonDiv>

        <ButtonDiv>
          {/* 휴대폰 본인인증 */}
          <TextField
            type="number"
            error={phoneValue !== undefined && !phoneValidation() ? true : false}
            defaultValue={phoneValue}
            onChange={(event) => setPhoneValue(event.target.value)}
            id="loginID"
            label="전화번호"
            // placeholder="01012341234"
            // helperText="* 하이픈(-)없이 01012341234 형태로 작성해 주세요"
            helperText={phoneValue !== undefined && !phoneValidation() ? '올바른 전화번호를 입력해 주세요.' : ''}
            sx={{ width: '60%', margin: '0% 0 5% 0' }}
          />
        </ButtonDiv>

        <ButtonDiv>
          <TextField
            error={nicknameValue !== undefined && !nicknameCheck ? true : false}
            defaultValue={nicknameValue}
            onChange={(event) => setNicknameValue(event.target.value)}
            id="loginID"
            label="닉네임"
            placeholder="이름 대신 사용할 닉네임을 작성해주세요"
            sx={{ width: '60%', margin: '0% 0 5% 0' }}
          />
        </ButtonDiv>

        <Agreement>
          <FormControlLabel
            label="모두동의"
            control={
              <Checkbox
                // defaultChecked={true}
                checked={checked[0] && checked[1]}
                // indeterminate={checked[0] !== checked[1]}
                onChange={handleChange1}
              />
            }
          />
          {children}
        </Agreement>

        <Button disabled={formDataCheck} variant="contained" color="sub2B" onClick={() => handleCheckFormData()} sx={{ width: '60%', borderRadius: '50px', margin: '5% 0 5% 0' }}>
          회원가입
        </Button>
      </LoginDiv>
    </MainDiv>
  );
}

const MainDiv = styled.div`
  margin: 10% auto;
  width: 700px;
  height: 100%;
  border: black solid 1px;
  border-radius: 16px;
`;

const LoginDiv = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > p {
    margin-top: 11.5%;
    font-size: 24px;
  }
`;

const ButtonDiv = styled.div`
  display: flex;
  width: 100%;
  /* justify-content: center; */
  align-items: center;

  margin: 0 0 0 40%;
`;
const Agreement = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  margin: 0 0 0 40%;
`;
