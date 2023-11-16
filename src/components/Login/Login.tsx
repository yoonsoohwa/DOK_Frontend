import { styled } from "styled-components";
import React from "react";
import DOKLOGO from "/DOK LOGO.svg"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export function Login() {
  return (
    <MainDiv>
        <img src={DOKLOGO}/>
        <LoginDiv>
            <p>로그인하기</p>
            <TextField
                id="loginID"
                label="아이디"
                // defaultValue=""
                // helperText="Some important text"
                sx={{width:"70%", margin:"10% 0 5% 0"}}
            />
            <TextField
                id="loginPwd"
                label="비밀번호"
                // defaultValue="Default Value"
                // helperText="Some important text"
                sx={{width:"70%"}}
            />
            <Button variant="contained" color="mainB" sx={{width:"70%", margin:"15% 0 5% 0", borderRadius:"50px"}}>로그인</Button>
            <Button variant="contained" color="sub2B" sx={{width:"70%", borderRadius:"50px"}}>회원가입</Button>
        </LoginDiv>       
    </MainDiv>
  );
}

const MainDiv = styled.div`
    
    display: flex;
    align-items: center;
    flex-direction: column;
    
    & > img{
        width: 8%;
        margin: 3%;
    }
`

const LoginDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 500px;
    height: 500px;
    border: black solid 2px;
    border-radius: 50px;

    & > p {
        margin-top: 10%;
        font-size: 24px;
    }

    & > h1 {
        margin-top: 10%;
    }
`