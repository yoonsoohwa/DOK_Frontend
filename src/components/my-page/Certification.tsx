import { styled } from "styled-components";
import { TopBarTitle } from "common/list-page/TopBarTitle";
// import { CertifiPostCard } from "../certification/PostCard";
// import { Children, useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { AppDispatch, RootState, addCertificationPosts } from "src/store";
// import { CardListContainer } from "src/styles/CardListContainer";
// import { CertificationPostDetail } from "../certification/PostDetail";
// import { Dialog } from "@mui/material";
// import { useInView } from "react-intersection-observer";
// import { ListPageTopBar } from '../common/list-page/ListPageTopBar';
// import { CertifiBanner,  } from '../certification/Banner';
// import { ScrollToTopButton } from 'common/button/ScrollTopButton';
// import { CreateAlert } from '../certification/CreateAlert';


export const Certification = () => {
  const matchingData = 8;
  
  // const dispatch = useDispatch<AppDispatch>();
  // const { certificationPosts } = useSelector((state: RootState) => state.certification);

  // const [open, setOpen] = useState(false);
  // const [page, setPage] = useState(1);
  // const [scrollRef, inView] = useInView({ threshold: 0.5 });

  // const handleClose = () => {
  //   setOpen(false);
  // };

  // const addPostList = async () => {
  //   const res = await fetch('/src/api/mock/certification.json');
  //   const data = await res.json();
  //   console.log(data.data);
  //   dispatch(addCertificationPosts(data.data));
  //   // console.log(certificationPosts);
  // };

  // useEffect(() => {
  //   if (inView) {
  //     addPostList();
  //   }
  // }, [inView]);

  return (
    <MainFrame>
      <TitleFrame>
        <TopBarTitle yellow="5" black="개의 산책 인증을 했습니다." />
      </TitleFrame>
        {/* <CertificationList>
        <CertifiBanner />
        <Section>
          <CreateAlert />
          <ListPageTopBar yellow="132" black="개의 산책 인증이 있습니다." />
          <CardListContainer>
            {Children.toArray(certificationPosts.map((post) => <CertifiPostCard contents={post} onclick={() => setOpen(true)} />))}
            <MyDialog onClose={handleClose} open={open} maxWidth={false}>
              <CertificationPostDetail handleClose={handleClose} />
            </MyDialog>
          </CardListContainer>
        </Section>
        <div className="scroll-ref" ref={scrollRef}></div>
        <ScrollToTopButton />
      </CertificationList> */}
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

const CertificationList = styled.div`
  width: 100%;
  margin: 0 auto;
  position: relative;

  .scroll-ref {
    height: 1px;
    position: relative;
    bottom: 100px;
  }
`;

export const Section = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
`;

// const MyDialog = styled(Dialog)`
//   max-width: none;
//   margin: 0 auto;
// `;