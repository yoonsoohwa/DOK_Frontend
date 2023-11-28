import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import {Box, Button, TextField, FormControlLabel, Checkbox, colors} from '@mui/material';
import { PersonInformation, TrilateralAgreement } from "./Agreement";
import { AddressAPI } from "./AddressAPI";
import { PhoneCertification } from "./PhoneCertification";
import { error } from "console";

export function SignUp() {
    
    // 약관 동의하는 부분의 코드~
    const [checked, setChecked] = React.useState([true, false]);    
    
    const handleChange1 = (event : React.ChangeEvent<HTMLInputElement>) => {
        setChecked([event.target.checked, event.target.checked]);
    };

    const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked([event.target.checked, checked[1]]);
    };

    const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked([checked[0], event.target.checked]);
    };

    const children = (
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3}}>
        <FormControlLabel        
            label={<PersonInformation />}        
            control={<Checkbox checked={checked[1]} onChange={handleChange2} />}
            sx={{marginTop:"2%"}}
        />
        <FormControlLabel
            label={<TrilateralAgreement />}
            control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
            sx={{marginTop:"2%"}}
        />
        </Box>
    );
    // ~약관 동의하는 부분의 코드


    const [idCheck , setIdCheck] = useState<boolean>(false);
    const [pwdCheck , setPwdCheck] = useState<boolean>(false);
    const [pwdConfirmCheck , setPwdConfirmCheck] = useState<boolean>(false);
    const [nameCheck , setNameCheck] = useState<boolean>(false);
    const [addressCheck , setAddressCheck] = useState<boolean>(false);
    const [phoneCheck , setPhoneCheck] = useState<boolean>(false);
    const [nicknameCheck , setNicknameCheck] = useState<boolean>(false);
    const [agreeCheck , setAgreeCheck] = useState<boolean>(false);
    const [formDataCheck, setFormDataCheck] = useState<boolean>(true);

    const [idValue , setIdValue] = useState<string>();
    const [pwdValue , setPwdValue] = useState<string>();
    const [pwdConfirmValue , setPwdConfirmValue] = useState<string>();
    const [nameValue , setNameValue] = useState<string>();
    const [addressValue , setAddressValue] = useState<boolean>(true);
    const [phoneValue , setPhoneValue] = useState<string>();
    const [nicknameValue , setNicknameValue] = useState<string>();
    const [agreeValue , setAgreeValue] = useState<boolean>(true);

    useEffect(() => {
        (idCheck && pwdCheck && pwdConfirmCheck && nameCheck && addressCheck && phoneCheck && nicknameCheck && agreeCheck) ? setFormDataCheck(true) : setFormDataCheck(false);
    },[idValue, pwdValue, pwdConfirmValue, nameValue, addressValue, phoneValue, nicknameValue, agreeValue])

    const validation =()=>{
        let check = /^.{11}$/;
        return !check.test(`${phoneValue}`);
    }

  const handleCheckFormData = async () => {    
    // idValue ? alert("true") : alert("false");
    // const test = await fetch("http://localhost:3000/api/users/signUp", {
    //     method: "POST", // 또는 'PUT'
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //         "userId" : {idValue},
    //         "password" : {pwdValue},
    //         "name": {nameValue},
    //         "nickname" : {nicknameValue},
    //         "address" : "서울시 어쩌구",
    //         "phoneNumber" : "1234 5678",
    //         "introduce" : "",
    //         "isCertificated": true,
    //         "deletedAt": ""
    //     }),
    // });

    // console.log(test.json);

    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    //   .then(response => response.json())
    //   .then(json => console.log(json))

    // 테스트 데이터
    console.log(pwdValue);

    const test = await fetch("http://kdt-sw-6-team01.elicecoding.com/api/users/signUp", {
        method: "POST", 
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "userId" : {idValue},
            "password" : {pwdValue},
            "name": {nameValue},
            "nickname" : {nicknameValue},
            "address" : "서울시 어쩌구",
            "phoneNumber" : {phoneValue},
            "introduce" : "",
            "isCertificated": true,
            "deletedAt": ""
        }),
    })
      .then(response => response.json())
      .then(json => console.log(json));
    
  }









  return (
    <MainDiv>
        <LoginDiv>
            <p>회원가입</p>

            <ButtonDiv>
                <TextField
                    error={idCheck}
                    id="testTest"
                    label="아이디"
                    defaultValue={idValue}
                    onChange={(event) => setIdValue(event.target.value)}
                    placeholder="아이디를 작성해주세요"
                    sx={{width:"60%", margin:"10% 0 5% 0"}}
                /> 
                <Button variant="contained" color="mainB" sx={{margin: "4.4% 0% 0% 2.5%"} }>중복확인</Button>
            </ButtonDiv>

                <TextField
                    error={pwdCheck}
                    defaultValue={pwdValue}
                    onChange={(event) => setPwdValue(event.target.value)}
                    id="testTest2"
                    label="비밀번호"
                    placeholder="비밀번호를 작성해주세요"
                    helperText="* 최소 8자 이상이어야 하며, 알파벳, 숫자, 특수 문자를 포함해야 합니다."
                    sx={{width:"60%", margin:"0 0 1% 0"}}
                />
               
               <TextField
                    error={pwdConfirmCheck}
                    defaultValue={pwdConfirmValue}
                    onChange={(event) => setPwdConfirmValue(event.target.value)}
                    label="비밀번호 확인"
                    placeholder="비밀번호를 다시 한 번 작성해주세요"
                    sx={{width:"60%", margin:"0 0 5% 0"}}
                />
                
                <TextField
                    error={nameCheck}
                    defaultValue={nameValue}
                    onChange={(event) => setNameValue(event.target.value)}
                    id="loginID"
                    label="이름"
                    placeholder="이름을 작성해주세요"
                    sx={{width:"60%", margin:"0 0 5% 0"}}
                />

            <ButtonDiv>           
                 {/* 주소검색  */}
                 {addressCheck ? <AddressAPI addressCheck/> : <AddressAPI />}                 
                {/* <AddressAPI error={addressCheck ? "error" : null} /> */}
            </ButtonDiv>

            <ButtonDiv>
                {/* 휴대폰 본인인증 */}
                {/* {phoneCheck ? <PhoneCertification phoneCheck/> : <PhoneCertification />} */}

                <TextField
                    type="number"
                    error ={ validation()}
                    defaultValue={phoneValue}
                    onChange={(event) => setPhoneValue(event.target.value)}
                    id="loginID"
                    label="전화번호"
                    // placeholder="01012341234"                    
                    // helperText="* 하이픈(-)없이 01012341234 형태로 작성해 주세요"
                    helperText={validation() ? "올바른 전화번호를 입력해 주세요." : ""}
                    sx={{width:"60%", margin:"0% 0 5% 0"}}
                />
            </ButtonDiv>

            <ButtonDiv>
                <TextField
                    error={nicknameCheck}
                    defaultValue={nicknameValue}
                    onChange={(event) => setNicknameValue(event.target.value)}
                    id="loginID"
                    label="닉네임"
                    placeholder="이름 대신 사용할 닉네임을 작성해주세요"
                    sx={{width:"60%", margin:"0% 0 5% 0"}}
                />         
                <Button variant="contained" color="mainB" sx={{margin: "0% 0% 5.5% 2.5%"}}>중복확인</Button>
            </ButtonDiv>
                
                <Agreement>
                    <FormControlLabel
                        label="모두동의"                        
                        control={
                            <Checkbox                            
                            checked={checked[0] && checked[1]}
                            indeterminate={checked[0] !== checked[1]}
                            onChange={handleChange1}
                            />
                        }                        
                    />
                    {children}
                </Agreement>       
                
                

            <Button
                disabled={formDataCheck}
                variant="contained" 
                color="sub2B" 
                onClick={()=> handleCheckFormData()} 
                sx={{width:"60%", borderRadius:"50px", margin:"5% 0 5% 0"}}>
                    회원가입
            </Button>
        </LoginDiv>       
        
    </MainDiv>
  );
}

const MainDiv = styled.div`
    
    margin: 10% auto ;
    width: 600px;
    height: 100%;
    border: black solid 1px;
    border-radius: 16px;
    
`

const LoginDiv = styled.div`
    display: flex;
    flex:1;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & > p {
        margin-top: 11.5%;
        font-size: 24px;
    }

`

const ButtonDiv = styled.div`
    display: flex;
    width: 100%;
    /* justify-content: center; */
    align-items: center;

    margin: 0 0 0 40%;

`
const Agreement = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;

    margin: 0 0 0 40%;

`
