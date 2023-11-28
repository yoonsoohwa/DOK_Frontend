import { styled } from "styled-components";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { ButtonMain } from "common/button/ButtonMain";
import { ButtonSub } from "common/button/ButtonSub";

export function Login() {
  return (
    <MainFrame>
      <SubFrame>
        <p>로그인하기</p>
        <TextField
          id="loginID"
          label="아이디"
          placeholder="아이디를 작성해주세요"
          // defaultValue=""
          // helperText="Some important text"
          sx={{ margin: "5% 0 2% 0" }}
        />
        <TextField
          id="loginID"
          label="비밀번호"
          placeholder="비밀번호를 작성해주세요"
          // defaultValue=""
          sx={{ margin: "0 0 5% 0" }}
        />
        <div>
          <ButtonMain text="로그인" fill={true} />
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
