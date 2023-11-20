import { styled } from 'styled-components';

export const Profile = () => {
    return <>
        <MainDiv>
            <ProfileDiv>
                <img src="/svg/PersonImg.svg" className='user-img'/>
                <div>test1</div>
                <div>test2</div>
                <div>test3</div>
            </ProfileDiv>
        </MainDiv>
    </>
}

const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    border: black 5px solid;
`

const ProfileDiv = styled.div`
    display: flex;
    border: green 3px solid;
`