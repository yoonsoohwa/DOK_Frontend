import { styled } from 'styled-components';

export const Footer = () => {
    return <>
        <MainDiv>
        주소 : 서울특별시 성동구 아차산로17길 48 성수낙낙<br></br>
        COPYRIGHT(c) 2023 DOGWALK ALL RIGHTS RESERVED.
        </MainDiv>
    </>
}

const MainDiv = styled.div`
    display: flex;
    border-top: #ECECEC solid 1px;
    background-color: #FFFEFA;
    text-align: center;
    justify-content: center;
    margin: 0 auto;
`