import { styled } from "styled-components";
import React from "react";
import DOKLOGO from "/DOK LOGO.svg"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export function Login() {
  return (
    <MainDiv>
        <LoginDiv>
            <p>로그인하기</p>
            <TextField
                id="loginID"
                label="아이디"
                placeholder="아이디를 작성해주세요"
                // defaultValue=""
                // helperText="Some important text"
                sx={{width:"60%", margin:"10% 0 5% 0"}}
            />
            <TextField
                id="loginID"
                label="비밀번호"
                placeholder="비밀번호를 작성해주세요"
                // defaultValue=""
                sx={{width:"60%", margin:"0 0 1% 0"}}
            />
            <Button variant="contained" color="mainB" sx={{width:"60%", margin:"15% 0 0 0", borderRadius:"50px"}}>로그인</Button>
            <Button variant="contained" color="sub2B" sx={{width:"60%", borderRadius:"50px", margin:"5% 0 5% 0"}}>회원가입</Button>
        </LoginDiv>       
    </MainDiv>
  );
}

const MainDiv = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    margin: 10% 0% 2% 28% ;
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

    & > Button {
        
    }
`