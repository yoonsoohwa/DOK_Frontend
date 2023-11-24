import { styled } from "styled-components";
import { ListPageTopBar } from "../components/common/ListPageTopBar";
import { CertifiBanner } from "../components/certification/Banner";
import { AlertError } from "common/AlertError";
import { AlertSuccess } from "common/AlertSuccess";
import { Children, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState, addCertificationPosts } from "../store";
import { CertifiPostCard } from "../components/certification/PostCard";
import { CertificationPostDetail } from "../components/certification/PostDetail";
import { Dialog } from "@mui/material";
import { CardListContainer } from "../components/styles/CardListContainer";
import { ScrollToTopButton } from "common/ScrollTopButton";
import { useInView } from "react-intersection-observer";

export function CertificationListPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { certificationPosts } = useSelector((state: RootState) => state.certification);

  const [open, setOpen] = useState(false);
  const [scrollRef, inView] = useInView();

  const handleClose = () => {
    setOpen(false);
  };

  const addPostList = async () => {
    const res = await fetch("/src/api/mock/certification.json");
    const data = await res.json();
    dispatch(addCertificationPosts(data));
    // console.log(certificationPosts);
  };

  useEffect(() => {
    if (inView) {
      addPostList();
    }
  }, [inView]);

  return (
    <CertificationList>
      <CertifiBanner />
      {/* <AlertError title={"등록된 강아지가 없습니다."} desc={"프로필에서 강아지를 등록한 후 이용해주세요."} handleClick={() => {}} />
      <AlertSuccess desc={"인증 글 작성이\n완료되었습니다."} handleClick={() => {}} /> */}
      <Section>
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
    </CertificationList>
  );
}

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

const MyDialog = styled(Dialog)`
  max-width: none;
  margin: 0 auto;
`;
