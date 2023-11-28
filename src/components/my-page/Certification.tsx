import { styled } from "styled-components";
import { TopBarTitle } from "common/list-page/TopBarTitle";
import { CertifiPostCard } from "../certification/PostCard";
import { Children } from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/store";

export const Certification = () => {
  const matchingData = 8;
  const { certificationPosts } = useSelector((state: RootState) => state.main);
  return (
    <MainFrame>
      <TitleFrame>
        <TopBarTitle yellow="5" black="개의 산책 인증을 했습니다." />
      </TitleFrame>
      <CardFrame>
        {/* <CertifiPostCard contents={null}/> */}
        {Children.toArray(certificationPosts.map((data) => <CertifiPostCard contents={data} />))}
        {Children.toArray(certificationPosts.map((data) => <CertifiPostCard contents={data} />))}
        {Children.toArray(certificationPosts.map((data) => <CertifiPostCard contents={data} />))}
        {Children.toArray(certificationPosts.map((data) => <CertifiPostCard contents={data} />))}
        {Children.toArray(certificationPosts.map((data) => <CertifiPostCard contents={data} />))}
      </CardFrame>
    </MainFrame>
  );
};

const MainFrame = styled.div`
  display: flex;
  flex-direction: column;
`;
const TitleFrame = styled.div`
  display: flex;
  margin: 5% 0 7% 0;
`;
const CardFrame = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  & > div {
    /* border: 5px solid red; */
    width: 22%;
    margin: 0 3% 5% 0;
  }
`;
