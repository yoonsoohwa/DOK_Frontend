import {styled} from "styled-components";
import {ChangeTextfiled} from "./ChangeTextfiled"

export const Modify = () => {
    return (
        <MainFrame>
            {/* <ChangeTextfiled id="pwd" label="비밀번호" placeholder="비밀번호를 작성해주세요" /> */}
        </MainFrame>
    )
}

const MainFrame = styled.div`
    display: flex;
    /* flex-direction: column; */    
    
    border: #FCD11E dashed 3px;
    width: 600px;
    height: 800px;
    margin: 3% auto;
`