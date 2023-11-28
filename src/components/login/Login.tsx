import { styled } from "styled-components";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { ButtonMain } from "common/button/ButtonMain";
import { ButtonSub } from "common/button/ButtonSub";
import { useState } from "react";




export function Login() {

  const [userId, setUserId] = useState<string>();
  const [password, setPassword] = useState<string>();

  const handleLogin = async () => {    
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
    const test = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST", 
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "userId" : {userId},
          "password" : {password}
        }),
    })
      .then(response => response.json())
      .then(json => console.log(json));
    
  }


  return (
    <MainFrame>
      <SubFrame>
        <p>로그인하기</p>
        <TextField          
          label="아이디"
          placeholder="아이디를 작성해주세요"
          defaultValue={userId}
          onChange={(e)=> setUserId(e.target.value)}
          // defaultValue=""
          // helperText="Some important text"
          sx={{ margin: "5% 0 2% 0" }}
        />
        <TextField
          type="password"
          label="비밀번호"
          placeholder="비밀번호를 작성해주세요"
          defaultValue={password}
          onChange={(e)=> setPassword(e.target.value)}
          // defaultValue=""
          sx={{ margin: "0 0 5% 0" }}
        />
        <div>
          <ButtonMain text="로그인" onClick={handleLogin} fill={true} />
        </div>
        <div>
          <ButtonSub text="회원가입" fill={true} />
        </div>
      </SubFrame>
    </MainFrame>
  );
}

const MainFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  /* text-align: center; */
  justify-self: center;
  margin: 10% auto;
  width: 600px;
  height: 460px;
  border: black solid 1px;
  border-radius: 16px;
`;

const SubFrame = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > p {
    margin-bottom: 5%;
    font-size: 24px;
  }

  & > div {
    width: 70%;
  }

  div:nth-child(4),
  div:nth-child(5) {
    margin-bottom: 2%;
  }
`;
