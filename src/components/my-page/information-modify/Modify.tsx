import {styled} from "styled-components";
import {ChangeTextfiled} from "./ChangeTextfiled"
import Button from '@mui/material/Button';
import {ChangeProfileImg} from "./ChangeProfileImg"
export const Modify = () => {
    return (
        <MainFrame>
            <ChangeProfileImg />
            <ChangeTextfiled label="닉네임" placeholder="변경하실 닉네임을 작성해주세요" />
            <ChangeTextfiled label="비밀번호" placeholder="변경하실 비밀번호를 작성해주세요" />
            <ChangeTextfiled label="비밀번호 확인" placeholder="변경하실 비밀번호를 다시 한 번 작성해주세요" />
            <ChangeTextfiled label="이름" placeholder="변경하실 이름을 작성해주세요" />
            <ChangeTextfiled label="주소" placeholder="변경하실 주소를 작성해주세요" />
            <div className="phoneNumber">
                <ChangeTextfiled label="전화번호" placeholder="변경하실 전화번호를 작성해주세요" />
                <Button variant="contained" color="mainB" sx={{padding:"3%", width:"20%", height:"100%", margin:"3.2% 3.5% 0% 0"}}>본인인증</Button>
            </div>
            <Button variant="contained" color="mainB" sx={{margin:"5% auto", width:"25%", height:"6%", borderRadius:"20px", fontSize:"large"}}>저장하기</Button>
        </MainFrame>
    )
}

const MainFrame = styled.div`
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    border: #FCD11E dashed 3px;
    border-radius: 10px;
    width: 75%;
    height: 100%;
    margin: 3% auto;

    div.phoneNumber {
        display: flex;
        /* border: 1px solid black; */
        /* flex:1; */
        justify-content: stretch;
        align-items: stretch;
        
        width: 75%;
        
        /* margin: 0 auto; */
    }
`