import { styled } from "styled-components";
import React, { useState } from "react";
import DOKLOGO from "/DOK LOGO.svg"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import { PersonInformation } from "./Agreement";
import { TrilateralAgreement } from "./Agreement";
import { margin } from "@mui/system";


export function SignUp() {
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
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
      <FormControlLabel
        label={<PersonInformation />}        
        control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
        sx={{marginTop:"2%"}}
      />
      <FormControlLabel
        label={<TrilateralAgreement />}
        control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
        sx={{marginTop:"2%"}}
      />
    </Box>
    
  );

  return (
    <MainDiv>
        <LoginDiv>
            <p>회원가입</p>
            <ButtonDiv>                
                <TextField
                    id="loginID"
                    label="아이디"
                    placeholder="아이디를 작성해주세요"
                    // defaultValue=""
                    // helperText="Some important text"
                    sx={{width:"60%", margin:"10% 0 5% 0"}}
                />                
                <Button variant="contained" color="mainB" sx={{margin: "4.4% 0% 0% 2.5%"}}>중복확인</Button>
            </ButtonDiv>
            <TextField
                id="loginID"
                label="비밀번호"
                placeholder="비밀번호를 작성해주세요"
                // defaultValue=""
                helperText="* 최소 8자 이상이어야 하며, 알파벳, 숫자, 특수 문자를 포함해야 합니다."
                sx={{width:"60%", margin:"0 0 1% 0"}}
            />
            <TextField
                id="loginID"
                label="비밀번호 확인"
                placeholder="비밀번호를 다시 한 번 작성해주세요"
                // defaultValue=""                
                sx={{width:"60%", margin:"0 0 5% 0"}}
            />
            <TextField
                id="loginID"
                label="이름"
                placeholder="이름을 작성해주세요"
                // defaultValue=""
                // helperText="Some important text"
                sx={{width:"60%", margin:"0 0 5% 0"}}
            />
            <ButtonDiv>                
                <TextField
                    id="loginID"
                    label="주소"
                    placeholder="주소를 작성해주세요"
                    disabled
                    // defaultValue=""
                    // helperText="Some important text"
                    sx={{width:"60%", margin:"0 0 5% 0"}}
                />                
                <Button variant="contained" color="mainB" sx={{margin: "0% 0% 5% 2.5%"}}>주소검색</Button>
            </ButtonDiv>
            <ButtonDiv>                
                <TextField
                    id="loginID"
                    label="전화번호"
                    placeholder="전화번호를 작성해주세요"
                    // defaultValue=""
                    helperText="* 010-1234-1234 형태로 작성해 주세요"
                    sx={{width:"60%", margin:"0% 0 5% 0"}}
                />                
                <Button variant="contained" color="mainB" sx={{margin: "0% 0% 0 2.5%",transform: "translateY(-75%)"}}>본인인증</Button>
            </ButtonDiv>
            <ButtonDiv>                
                <TextField
                    id="loginID"
                    label="닉네임"
                    placeholder="이름 대신 사용할 닉네임을 작성해주세요"
                    // defaultValue=""
                    // helperText="Some important text"
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
            {/* <AgreementTest /> */}
            <Button variant="contained" color="sub2B" sx={{width:"60%", borderRadius:"50px", margin:"5% 0 5% 0"}}>회원가입</Button>
        </LoginDiv>       
        
    </MainDiv>
  );
}

const MainDiv = styled.div`
    
    margin: 10% 0 10% 28% ;
    width: 45%;
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
        margin-top: 10%;
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