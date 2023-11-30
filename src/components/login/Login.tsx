import { styled } from "styled-components";
import TextField from "@mui/material/TextField";
import { ButtonMain } from "common/button/ButtonMain";
import { ButtonSub } from "common/button/ButtonSub";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState, setUser } from "store/index";

export function Login() {

  const [userId, setUserId] = useState<string>();
  const [password, setPassword] = useState<string>();
  // dispatch써야 user 수정가능
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useSelector((state: RootState) => state.user);

  const handleLogin = async () => {    

    const login = await fetch("/api/users/signIn", {
      method: "POST", 
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "userId" : userId,
          "password" : password,
        }),
        credentials: 'include',
    })
      // .then(response => response.json())
      // .then(data => {
      //   // action준거를 수정하는거라 setUser로 받아야함
      //   dispatch(setUser(data));
      // });

      const data = await login.json();
      console.log(data);
      dispatch(setUser(data));
      


    // try{
    //   const response = await fetch("http://kdt-sw-6-team01.elicecoding.com/api/users/signIn", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       "userId": userId,
    //       "password": password,
    //     }),
    //     credentials: 'include',
    //   });
    
    //   if (!response.ok) {
    //     throw new Error('Network response was not ok.');
    //   }
  
    //   const data = await response.json();
    //   console.log(data);

    //   const dateHeader = response.headers.get('Date');
    //   console.log('Date 헤더 정보:', dateHeader);
    // } catch (error) {
    //   console.error('There was a problem with the fetch operation:', error);
    // }
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
          {/* {user.nickname} */}
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
