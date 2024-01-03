import { styled } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState, addCertificationPosts, resetCertificationPosts, setCertificationPostsCount } from 'store/index';
import { Children, useEffect, useState } from 'react';
import { Loading } from 'common/state/Loading';
import { EmptyData } from 'common/state/EmptyData';
import { CertificationPostDetail } from '../certification/PostDetail';
import { ScrollToTopButton } from 'common/button/ScrollTopButton';
import { Dialog } from '@mui/material';
import { CertifiPostCard } from '../certification/PostCard';
import { CardListContainer } from '../../styles/CardListContainer';
import { TopBarTitle } from 'common/list-page/TopBarTitle';

export const Certification = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { certificationPosts, certificationPostsCount } = useSelector((state: RootState) => state.certification);

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const addPostList = async () => {
    let url = `/api/mypage/myCertificationLists`;

    const res = await fetch(url, { credentials: 'include' });
    const data = await res.json();
    console.log(url, data);

    dispatch(setCertificationPostsCount(Number(data[0])));
    dispatch(addCertificationPosts(data[1]));
  };

  useEffect(() => {
    dispatch(resetCertificationPosts());
    addPostList();
  }, []);

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
      <ScrollToTopButton />
    </MainFrame>
  );
};

const MainFrame = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

const TitleFrame = styled.div`
  display: flex;
  margin: 50px 10px 20px;
`;

const Section = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
`;

const MyDialog = styled(Dialog)`
  max-width: none;
  margin: 0 auto;
`;
