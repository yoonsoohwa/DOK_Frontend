import { styled } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState, addCertificationPosts, setCertificationPostsCount } from "store/index";
import { Children, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { ListPageTopBar } from "common/list-page/ListPageTopBar";
import { Loading } from "common/state/Loading";
import { EmptyData } from "common/state/EmptyData";
import { CertificationPostDetail } from "../certification/PostDetail";
import { ScrollToTopButton } from "common/button/ScrollTopButton";
import { Dialog } from "@mui/material";
import { CertifiPostCard } from "../certification/PostCard";
import { CardListContainer } from "../../styles/CardListContainer";
import { TopBarTitle } from "common/list-page/TopBarTitle";


export const Certification = () => {
 
  const dispatch = useDispatch<AppDispatch>();
  const { certificationPosts, certificationPostsCount } = useSelector((state: RootState) => state.certification);
  const { filter } = useSelector((state: RootState) => state.filter);
  const { user } = useSelector((state: RootState) => state.user);

  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [scrollRef, inView] = useInView({ threshold: 0.5 });

  const handleClose = () => {
    setOpen(false);
  };

  const addPostList = async () => {
    if (certificationPostsCount && certificationPostsCount <= certificationPosts.length) {
      return;
    }

    const _page = certificationPosts.length ? page : 1;
    // let url = `/api/mypage/myCertificationLists/:${user._id}`;
    let url = `http://kdt-sw-6-team01.elicecoding.com/api/mypage/myCertificationLists/:6563f3569187c8fe58c24106`;

    
    // if (filter.locationCode) {
    //   url += `&locationCode=${filter.locationCode}`;
    // }

    // if (filter.walkingTime) {
    //   url += `&walkingTime=${dayjs(filter.walkingTime).format('YYYY-MM-DD')}`;
    // }

    const res = await fetch(url);
    const data = await res.json();
    console.log(url, data);

    dispatch(setCertificationPostsCount(Number(data[0])));
    dispatch(addCertificationPosts(data[1]));
    setPage(_page + 1);
  };

  useEffect(() => {
    if (inView) {
      addPostList();
    }

    // test();
  }, [filter, inView]);
  
  return (
    <MainFrame>
      <TitleFrame>
        <TopBarTitle yellow={certificationPostsCount?.toString() || '0'} black="개의 산책 인증이 있습니다." />
      </TitleFrame>
        
      <Section>
          {/* <Loading /> */}
          
          {!certificationPostsCount ? (
            certificationPostsCount === undefined ? (
              <Loading />
            ) : (
              <EmptyData />
            )
          ) : (
            <CardListContainer>
              {Children.toArray(certificationPosts.map((post, index) => <CertifiPostCard contents={post} onClick={() => setOpen(true)} index={index} />))}
              <MyDialog onClose={handleClose} open={open} maxWidth={false}>
                <CertificationPostDetail handleClose={handleClose} />
              </MyDialog>
            </CardListContainer>
          )}
        </Section>
        <div className="scroll-ref" ref={scrollRef}></div>
        <ScrollToTopButton />
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

const MyDialog = styled(Dialog)`
  max-width: none;
  margin: 0 auto;
`;