import { styled } from 'styled-components';

// 프로필정보 페이지에 프로필 인포가 아니라 그냥 다른 인포(강아지인포,알바생(핸들러)인포)가 올 수도 있는데
// "프로필"인포기 때문에 프로필인포로 지음
export const ProfileInfo = () => {
    return <>
            <TotalFrame>
                <Img>
                    <img src="/svg/PersonImg.svg"/>
                </Img>
                <div>
                    <Name>
                        <div>뽀삐엄마</div>
                        <div><img src="/svg/ProfileBadge.svg"/></div>
                    </Name>
                    <Adress>
                        서울특별시/노원구/누원로18/어디선가살아요
                    </Adress>
                    <WalkInfo>
                        <div>산책평점 : 4.5/5</div>
                        <div>산책횟수 : 32</div>
                    </WalkInfo>
                </div>            
            </TotalFrame>
    </>
}

const TotalFrame = styled.div`
    display: flex;    
    justify-content: flex-start;
    max-width: 900px;
    margin: 7% auto 0 auto;
    border: black solid 1px;
`

const Img = styled.div`
    align-self: center;
    margin-right: 1%;
`

const Name = styled.div`
    display: flex;
    
    div{        
        align-self: center;
    }

    div:nth-child(2) img{        
        object-fit: cover;                
        width: 35px;
        height: 35px;
    }
`

const Adress = styled.div`
    /* 최종확인할 때 해당 style component에 추가되는 사항 없으면 삭제 */
`

const WalkInfo = styled.div`
    display: flex;

    :nth-child(1){
        margin-right: 5%;
    }
`

// border: 1px solid black;