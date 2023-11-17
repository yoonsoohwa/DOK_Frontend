import React,{useState} from 'react';
import HeaderLogo from '/svg/HeaderLogo.svg'
import { styled } from 'styled-components';

export const NonMemberHeader = () => {        
    const [isMachingClicked, setIsMachingClicked] = useState(false);
    const [isCertifiedClicked, setIsCertifiedClicked] = useState(false);
    const [isMypageClicked, setMypageClicked] = useState(false);

    const headerHover = "/svg/HeaderHover.svg";

    return <>
        <BorderDiv>
            <MainDiv>
                <img src={HeaderLogo} />
                <CatagoryDiv>
                <div onClick={() => {
                        setIsMachingClicked(!isMachingClicked); 
                        setIsCertifiedClicked(false); 
                        setMypageClicked(false)}}>매칭
                        <img src={isMachingClicked ? headerHover : ""}/>
                    </div>
                    <div onClick={() => {
                        setIsCertifiedClicked(!isCertifiedClicked);
                        setIsMachingClicked(false);
                        setMypageClicked(false);
                    }}>인증
                        <img src={isCertifiedClicked ? headerHover : ""} />
                    </div>
                    <div onClick={() => {
                        setMypageClicked(!isMypageClicked);
                        setIsCertifiedClicked(false);
                        setIsMachingClicked(false);
                    }}>마이페이지
                        <img src={isMypageClicked ? headerHover : ""} />
                    </div>
                </CatagoryDiv>
                <SubCatagoryDiv>
                    <div>로그인</div>
                    <div>로그아웃</div>
                </SubCatagoryDiv>            
            </MainDiv>
        </BorderDiv>
    </>
}

export const MemberHeader = () => {
    const [bookmarkClicked , setBookmarkClicked] = useState("/svg/HeaderBookmarkOff.svg");
    const [isClicked, setIsClicked] = useState(false);
    const [isMachingClicked, setIsMachingClicked] = useState(false);
    const [isCertifiedClicked, setIsCertifiedClicked] = useState(false);
    const [isMypageClicked, setMypageClicked] = useState(false);

    const headerHover = "/svg/HeaderHover.svg";

    const handleBookmarkClick = () => {
        if(isClicked){
            setBookmarkClicked("/svg/HeaderBookmarkOff.svg");
            setIsClicked(false);
        } else {
            setBookmarkClicked("/svg/HeaderBookmarkOn.svg");
            setIsClicked(true);
        }
    };

    return <>
    <BorderDiv>
        <MainDiv>
            <img src={HeaderLogo} />
            <CatagoryDiv>
                <div onClick={() => {
                    setIsMachingClicked(!isMachingClicked); 
                    setIsCertifiedClicked(false); 
                    setMypageClicked(false)}}>매칭                    
                    <img src={isMachingClicked ? headerHover : ""}/>
                </div>
                <div onClick={() => {
                    setIsCertifiedClicked(!isCertifiedClicked);
                    setIsMachingClicked(false);
                    setMypageClicked(false);
                }}>인증
                    <img src={isCertifiedClicked ? headerHover : ""} />
                </div>
                <div onClick={() => {
                    setMypageClicked(!isMypageClicked);
                    setIsCertifiedClicked(false);
                    setIsMachingClicked(false);
                }}>마이페이지
                    <img src={isMypageClicked ? headerHover : ""} />
                </div>
            </CatagoryDiv>
            <SubCatagoryImg>
                <div>
                    <img src={bookmarkClicked} onClick={handleBookmarkClick} />
                </div>
                <div>로그아웃</div>
            </SubCatagoryImg>            
        </MainDiv>
    </BorderDiv>
    </>
}


const BorderDiv = styled.div`
    border-bottom: #dedede solid 1px;
    position: fixed;
    width: 100%;
    z-index: 1;
    /* background-color: #fffbfb; */
`

const MainDiv = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 1024px;
    margin: 0 auto;
    
`
const CatagoryDiv = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    flex : 2;
    margin: 27px 0 0 50px;
    font-size: 24px;
    
    & > div {
        margin: 0 5% 0 5%;
        & > img {
            position: fixed;
            transform: translateX(-50%);
            top:15px;
            z-index: -1;
        }
    }

    
`
const SubCatagoryDiv = styled.div`
display: flex;
justify-content: flex-end;
flex : 2;
    margin: 32px 50px 0 0;
    font-size: 18px;
    & > div {
        margin: 0 5% 0 5%;
    }

`

const SubCatagoryImg = styled.div`
    display: flex;
    justify-content: flex-end;
    flex : 2;
    margin: 32px 50px 0 0;
    font-size: 18px;
    & > div {
        margin: 0 5% 0 5%;
    }
    & > div:first-child > img {
        width: 40%;
        margin: 0 0 0 45%;

    }
`