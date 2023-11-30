import {styled} from "styled-components";
import Button from '@mui/material/Button';
import {ChangeTextfiled} from "./ChangeTextfiled"
import {ChangeProfileImg} from "./ChangeProfileImg"
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "store/index";
import { useState } from "react";

export const Modify = () => {
    const { user } = useSelector((state: RootState) => state.user);

    const [password, setPassword] = useState("");
    const [name, setName] = useState(user.name);
    const [nickname, setNickname] = useState(user.nickname);
    const [address, setAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);

    const handleSaveBtn = async () => {
        const request = await fetch(`/api/users/myInfo`,{
            method: "PATCH", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                // "userId" : user.userId,
                // "password" : password,
                // "name": name,
                // "nickname" : nickname,
                // "address" : {
                //     "text":"일단테스트",
                //     "code":"123123",
                // },
                // // "bcode" : addressBCode,
                // "phoneNumber" : phoneNumber,
                // "introduce" : "",
                // "isCertificated": true,
                // "deletedAt": ""
                "name": "help me",
                "phoneNumber" : "2004 4281",
                "password" : "Testpassword1234!",
                "confirmPassword" : "Testpassword1234!",
                "address" : "주소",
                "nickname" : "ndaf"
            }),
            credentials: 'include',
        })

        const response = request.json;
        console.log(response);
    }
    // console.log(user.address);
    return (
        <MainFrame>
            <ChangeProfileImg />
            <ChangeTextfiled label="닉네임" onChange={(e) => setNickname(e.target.value)} defaultValue={nickname} placeholder="변경하실 닉네임을 작성해주세요" />
            <ChangeTextfiled label="비밀번호"   placeholder="변경하실 비밀번호를 작성해주세요" />
            <ChangeTextfiled label="비밀번호 확인" onChange={(e) => setPassword(e.target.value)} placeholder="변경하실 비밀번호를 다시 한 번 작성해주세요" />
            <ChangeTextfiled label="이름" onChange={(e) => setName(e.target.value)} defaultValue={name} placeholder="변경하실 이름을 작성해주세요" />
            <ChangeTextfiled label="주소"   placeholder="변경하실 주소를 작성해주세요" />
            <ChangeTextfiled label="전화번호" onChange={(e) => setPhoneNumber(e.target.value)} defaultValue={phoneNumber} placeholder="변경하실 전화번호를 작성해주세요" />            
            <Button variant="contained" onClick={handleSaveBtn} color="mainB" sx={{margin:"5% auto", width:"25%", height:"6%", borderRadius:"20px", fontSize:"large"}}>저장하기</Button>
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

`