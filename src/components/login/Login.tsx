import { styled } from 'styled-components';
import TextField from '@mui/material/TextField';
import { ButtonMain } from 'common/button/ButtonMain';
import { ButtonSub } from 'common/button/ButtonSub';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState, setDog, setUser } from 'store/index';
import { useNavigate } from 'react-router-dom';
import { AlertSnackbar } from 'common/alert/AlertSnackbar';

export function Login() {
  const [userId, setUserId] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [isAlertSnackbar, setIsAlertSnackbar] = useState<boolean>(false);
  // dispatch써야 user 수정가능
  const dispatch = useDispatch<AppDispatch>();
  const { user, dog } = useSelector((state: RootState) => state.user);
  const nav = useNavigate();

  const handleLogin = async () => {
    const login = await fetch('/api/users/signIn', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: userId,
        password: password,
      }),
      credentials: 'include',
    });
    // .then(response => response.json())
    // .then(data => {
    //   // action준거를 수정하는거라 setUser로 받아야함
    //   dispatch(setUser(data));
    // });

    const data = await login.json();
    console.log(login.status);
    console.log(data);
    
    if (login.status === 201) {
      dispatch(setUser(data));
      nav('/');

    } else {
        setIsAlertSnackbar(true);

    }

  };

  return (
    <>
      <MainFrame>
        <SubFrame>
          <p>로그인하기</p>
          <TextField
            label="아이디"
            placeholder="아이디를 작성해주세요"
            defaultValue={userId}
            onChange={(e) => setUserId(e.target.value)}
            // defaultValue=""
            // helperText="Some important text"
            sx={{ margin: '5% 0 2% 0' }}
          />
          <TextField
            type="password"
            label="비밀번호"
            placeholder="비밀번호를 작성해주세요"
            defaultValue={password}
            onChange={(e) => setPassword(e.target.value)}
            // defaultValue=""
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleLogin(); // 엔터 키를 눌렀을 때 handleLogin 호출
              }
            }}
            sx={{ margin: '0 0 5% 0' }}
          />
          <div>
            {/* {user.nickname} */}
            <ButtonMain text="로그인" onClick={handleLogin} fill={true} />
          </div>
          <div>
            <ButtonSub text="회원가입" onClick={() => nav('/signup')} fill={true} />
          </div>
        </SubFrame>
      </MainFrame>
      <AlertSnackbar title='아이디 또는 비밀번호가 올바르지 않습니다. 다시 시도해주세요.' type='error' open={isAlertSnackbar} onClose={() => setIsAlertSnackbar(false)}/>
    </>
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
