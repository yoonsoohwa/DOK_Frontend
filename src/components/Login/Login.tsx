import { styled } from "styled-components";
import React from "react";
import DOKLOGO from "/DOK LOGO.svg"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Footer } from "../Footer/Footer";

export function Login() {
  return (
    <MainDiv>
        <img src={DOKLOGO}/>
        <LoginDiv>
            <h1>로그인하기</h1>
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
            <Button variant="contained" sx={{width:"70%", margin:"15% 0 5% 0", borderRadius:"50px"}}>로그인</Button>
            <Button variant="contained" sx={{width:"70%", borderRadius:"50px", backgroundColor:"#62AADA"}}>회원가입</Button>
        </LoginDiv>
        <Footer />
    </MainDiv>
    
  );
}

const MainDiv = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    
    & > img{
        width: 10%;
        margin: 3%;
    }
`

const LoginDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 500px;
    height: 600px;
    border: black solid 2px;
    border-radius: 50px;

    & > h1 {
        margin-top: 10%;
    }
`