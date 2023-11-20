import { styled } from 'styled-components';
export const Profile = () => {
    return <>
        <MainDiv>
            <ProfileDiv>            
                <ProfileSubDiv>
                    <div className='profileImg'>
                        <img src="/svg/person_img.svg" className='user-img'/>
                    </div>
                </ProfileSubDiv>
                <ProfileSubDiv>
                    <div className='name'>
                        <p>뽀삐엄마</p>                        
                        <img src="/svg/person_img.svg" className='user-img' style={{width:"20%", height:"5%"}}/>
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
    /* width: 70%; */
    border: black solid 5px;
    /* align-self: center;
    justify-self: center; */
    /* align-items: center;
    justify-content: center; */
    justify-content: space-between;
    max-width: 1024px;
`
const ProfileDiv = styled.div`
    display: flex;
    
    width: 54%;
    align-self: center;
    justify-self: center;
    
    border: green solid 3px;
`

const ProfileSubDiv = styled.div`
    display: flex;
    align-items: flex-start;
    /* justify-content: center; */
    /* flex-direction: row; */
    font-size: 16px;
    border: blue solid 3px;
    
    & :nth-child(1){
        flex: 1 1 20%;
    }

    & :nth-child(2){
        flex: 3 1 50%;            
    }

    & > div.profileImg{
            display: flex;
            border: red solid 1px;
            width: 200px;
            justify-content: center;
            & > .user-img{   
                flex : 0 0 0;
                /* border: red solid 1px; */
                /* align-self: center;
                justify-self: center; */
                width: 90%;
                height: 100%;
            }
        }

    
    & > div.name{
            border: red solid 1px;
            
            :nth-child(1){
                border: red solid 1px;
            }
        }
        
        & > p {
            border: red solid 1px;
        }

        & > div.walk{     
            border: red solid 1px;
        }
    

    
    
`