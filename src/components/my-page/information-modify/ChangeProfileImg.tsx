import styled from "styled-components";

export const ChangeProfileImg = () => {
    return (
        <MainFrame>
            <div>
                <img src="/svg/person_img.svg"/>
            </div>
            <div>
                아이디 : 
            </div>
        </MainFrame>
    )
}

const MainFrame = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 70%;
    margin: 5% 0 0 0 ;

    div:nth-child(1) {
        justify-self: flex-start;
    }
    
    img {
        width: 100%;
    }

    div{
        
        font-size: 24px;
    }
`