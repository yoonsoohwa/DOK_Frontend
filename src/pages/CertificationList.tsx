import { styled } from 'styled-components';
import { ListPageTopBar } from '../components/common/list-page/ListPageTopBar';
import { CertifiBanner } from '../components/certification/Banner';
import { Children, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState, addCertificationPosts, resetCertificationPosts, setCertificationPostsCount, setFilter } from '../store';
import { CertifiPostCard } from '../components/certification/PostCard';
import { CertificationPostDetail } from '../components/certification/PostDetail';
import { Dialog } from '@mui/material';
import { CardListContainer } from '../styles/CardListContainer';
import { ScrollToTopButton } from 'common/button/ScrollTopButton';
import { useInView } from 'react-intersection-observer';
import { Loading } from 'common/state/Loading';
import { LoadingPage } from 'common/state/LoadingPage';
import { EmptyData } from 'common/state/EmptyData';
import { certificationUrl } from 'api/apiUrls';
import { test } from 'api/test';
import dayjs from 'dayjs';

export function CertificationListPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { certificationPosts, certificationPostsCount } = useSelector((state: RootState) => state.certification);
  const { filter } = useSelector((state: RootState) => state.filter);

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
    let url = `${certificationUrl}/allCertificationPost?page=${_page}&perPage=12`;

    if (filter.locationCode) {
      url += `&locationCode=${filter.locationCode}`;
    }

    if (filter.walkingTime) {
      url += `&walkingTime=${dayjs(filter.walkingTime).format('YYYY-MM-DD')}`;
    }

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
  }, [filter, inView]);

  useEffect(() => {
    dispatch(resetCertificationPosts());
    dispatch(setFilter({ locationCode: '', walkingTime: '' }));
  }, []);

  return (
    <CertificationList>
      <CertifiBanner />
      <Section>
        <ListPageTopBar yellow={certificationPostsCount?.toString() || '0'} black="개의 산책 인증이 있습니다." />
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
