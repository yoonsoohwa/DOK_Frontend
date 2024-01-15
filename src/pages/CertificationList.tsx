import * as styled from './CertificationList.styled';
import { ListPageTopBar } from '../components/common/list-page/ListPageTopBar';
import { CertifiBanner } from '../components/certification/Banner';
import { Children, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState, addCertificationPosts, resetCertificationPosts, setCertificationPostsCount, setFilter } from '../store';
import { CertifiPostCard } from '../components/certification/PostCard';
import { CertificationPostDetail } from '../components/certification/PostDetail';
import { CardListContainer } from '../styles/CardListContainer';
import { ScrollToTopButton } from 'common/button/ScrollTopButton';
import { useInView } from 'react-intersection-observer';
import { Loading } from 'common/state/Loading';
import { EmptyData } from 'common/state/EmptyData';
import { certificationUrl } from 'api/apiUrls';
import dayjs from 'dayjs';

export function CertificationListPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { certificationPosts, certificationPostsCount } = useSelector((state: RootState) => state.certification);
  const { filter } = useSelector((state: RootState) => state.filter);

  const [open, setOpen] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
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
    <styled.CertificationList>
      <CertifiBanner />
      <styled.Section>
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
            <styled.MyDialog onClose={handleClose} open={open} maxWidth={false}>
              <CertificationPostDetail handleClose={handleClose} />
            </styled.MyDialog>
          </CardListContainer>
        )}
      </styled.Section>
      <div className="scroll-ref" ref={scrollRef}></div>
      <ScrollToTopButton />
    </styled.CertificationList>
  );
}
