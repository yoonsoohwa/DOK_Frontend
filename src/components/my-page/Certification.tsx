import {styled} from "styled-components";
import { TopBarTitle } from "common/TopBarTitle";
import { CertifiPostCard } from "../certification/PostCard";

export const Certification = () => {
    
    const matchingData = 8;
    
    return (
        <MainFrame>
            <TitleFrame>
                <TopBarTitle yellow="5" black="개의 산책 인증을 했습니다." />    
            </TitleFrame>       
            <CardFrame>
                <CertifiPostCard onclick={(e: React.MouseEvent): void => {}}/>
                <CertifiPostCard onclick={(e: React.MouseEvent): void => {}}/>
                <CertifiPostCard onclick={(e: React.MouseEvent): void => {}}/>
                <CertifiPostCard onclick={(e: React.MouseEvent): void => {}}/>
                <CertifiPostCard onclick={(e: React.MouseEvent): void => {}}/>
            </CardFrame>
        </MainFrame>
    )
}

const MainFrame = styled.div`
    display: flex;
    flex-direction: column;    
`
const TitleFrame = styled.div`
    display: flex;
    margin: 5% 0 7% 0;
    
`
const CardFrame = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    
    & > div {
        /* border: 5px solid red; */
        width: 22%;
        margin: 0 3% 5% 0;
    }
`