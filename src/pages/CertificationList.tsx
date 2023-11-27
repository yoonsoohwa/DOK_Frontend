import { styled } from "styled-components";
import { ListPageTopBar } from "../components/common/list-page/ListPageTopBar";
import { CertifiBanner } from "../components/certification/Banner";
import { Children, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState, addCertificationPosts } from "../store";
import { CertifiPostCard } from "../components/certification/PostCard";
import { CertificationPostDetail } from "../components/certification/PostDetail";
import { Dialog } from "@mui/material";
import { CardListContainer } from "../styles/CardListContainer";
import { ScrollToTopButton } from "common/button/ScrollTopButton";
import { useInView } from "react-intersection-observer";
import { CreateAlert } from "../components/certification/CreateAlert";
import { Loading } from "common/state/Loading";
import { LoadingPage } from "common/state/LoadingPage";

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
    dispatch(addCertificationPosts(data.data));
    // console.log(certificationPosts);
  };

  useEffect(() => {
    if (inView) {
      addPostList();
    }
  }, [inView]);

  return (
    <CertificationList>
      {/* <LoadingPage /> */}
      <CertifiBanner />
      <Section>
        {/* <Loading /> */}
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
