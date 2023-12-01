import { useSelector } from 'react-redux';
import { RootState } from 'store/index';
import { styled } from 'styled-components';

// 프로필정보 페이지에 프로필 인포가 아니라 그냥 다른 인포(강아지인포,알바생(핸들러)인포)가 올 수도 있는데
// "프로필"인포기 때문에 프로필인포로 지음
export const ProfileInfo = () => {

    const { user } = useSelector((state: RootState) => state.user);

    return <>
            <TotalFrame>
                <Img>
                    <img src="/svg/user_image1.svg"/>
                </Img>
                <div>
                    <Name>
                        <div>{user.nickname}</div>
                        {/* <div><img src="/svg/profile_badge.svg"/></div> */}
                    </Name>
                    <Adress>
                        {user.address ? user.address.text : ""}
                    </Adress>
                    <WalkInfo>
                        {/* <div>{user.nickname}</div> */}
                        {/* <div>산책횟수 : 32</div> */}
                    </WalkInfo>
                </div>            
            </TotalFrame>
    </>
}

const TotalFrame = styled.div`
    display: flex;    
    justify-content: flex-start;
    max-width: 900px;
    margin: 5% auto 0 auto;
    /* border: black solid 1px; */
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
        object-fit: contain;
        width: 35%;
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