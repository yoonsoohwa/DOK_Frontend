import {styled} from "styled-components";
import Button from '@mui/material/Button';
import { DogButton } from './DogButton';
import { DogDetail } from "./DogDetail";
import { useEffect, useState } from "react";

export const Introduce = () => {
    const [clicked, setClicked] = useState(false);

    const writingData = `안녕하세요! 뽀삐엄마 입니다.\n5년차 댕주입니다~~\n소통 환영해요!!!`;
// <Button variant="contained" color="mainB" sx={{width:"60%", margin:"15% 0 0 0", borderRadius:"50px"}}>로그인</Button>
    return (
        <>
            <Writing>
                {/* <div>{writingData}</div>
                <div><Button variant="contained" color="mainB" sx={{}}>소개글 수정</Button></div> */}
            </Writing>
            <Dog>
                <p>나의 반려견</p>
                <Add>
                    <DogButton />
                </Add>
            </Dog>
        </>
    )
}

const Writing = styled.div`
    display: flex;
    /* 개행문자 인식을 위한 코드 */
    white-space: pre-wrap;
    justify-content: space-between;
    margin-left: 3%;
    
    div:nth-Child(1){        
        align-self: center;
    }

    div:nth-Child(2){
        align-self: center;
    }
`
const License = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2%;

    div:nth-Child(1) img{
        object-fit: cover;        
        width: 70px;
    }

    div:nth-Child(2){
        flex: 1;
        margin-left: 1%;
    }

    div:nth-Child(3){
        /* flex: 1 0 */
        justify-content: flex-end;
    }
`
const Dog = styled.div`
    margin-top: 3%;

    p:nth-Child(1){        
        font-size: 20px;
        font-weight: bold;
    }
`

const Add = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`

// border: black solid 1px;