import { styled } from 'styled-components';
export const Profile = () => {
    return <>
        <MainDiv>
            <ProfileDiv>            
                <ProfileSubDiv>
                    <img src="/svg/PersonImg.svg" className='user-img'/>
                </ProfileSubDiv>
                <ProfileSubDiv>
                    <div className='name'>
                        <p>뽀삐엄마</p>                        
                        <img src="/svg/PersonImg.svg" className='user-img' style={{width:"4%", height:"4%"}}/>
                    </div>
                    <p>어디사는지</p>
                    <div className='walk'>
                        <p>산책평점</p>
                        <p>산책횟수</p>
                    </div>
                </ProfileSubDiv>
            </ProfileDiv>
            
        </MainDiv>
        <MainDiv>
            test
        </MainDiv>
    </>
}

const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    /* height: 100%; */
    border: black solid 5px;
    
`
const ProfileDiv = styled.div`
    display: flex;
    /* width: 100%; */
    flex: 1;
    align-items: center;
    justify-content: center;
    border: green solid 3px;
`

const ProfileSubDiv = styled.div`    
    /* align-items: center;
    justify-content: center; */
    flex-direction: column;
    border: blue solid 3px;
    flex: 1;
    
    & > div.name{

        display: flex;

        :nth-child(1){
            /* color: red; */
            
        }
    }
    
`