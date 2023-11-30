import { styled } from 'styled-components';
import { DogProfile } from '../components/matching-detail/DogProfile';
import { WalkDetailInfo } from '../components/matching-detail/WalkDetailInfo';
import { CommentList } from '../components/matching-detail/CommentList';
import { StatusBanner } from '../components/matching-detail/StatusBanner';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'store/store';
import { setMatchingDetailPost, setSelectedHandler } from 'store/matchingSlice';

export function MatchingDetailPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams();
  const [isloading, setIsLoading] = useState(true);
  const [status, setStatus] = useState('process');

  useEffect(() => {
    const matchingDetailData = async () => {
      try {
        // const res = await fetch("/src/api/mock/matching-post-detail.json");
        const res = await fetch(`http://kdt-sw-6-team01.elicecoding.com/api/matchingPostDetail/${id}`);
        const data = await res.json();
        dispatch(setMatchingDetailPost(data[0]));
        dispatch(setSelectedHandler(null));
        setStatus(data[0].matchingStatus);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    matchingDetailData();
  }, []);

  return (
    <>
      {isloading ? null : (
        <MatchingDetailLayout>
          <ContentBox>
            {status !== 'process' && <StatusBanner />}
            <WalkContainer>
              <DogProfile />
              <WalkDetailInfo />
            </WalkContainer>
            <CommentList />
          </ContentBox>
        </MatchingDetailLayout>
      )}
    </>
  );
}

const MatchingDetailLayout = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1024px;
`;

const ContentBox = styled.div`
  width: 100%;
  margin: 50px auto;
  box-sizing: border-box;
`;

const WalkContainer = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 70px;
  justify-content: space-around;
  gap: 10px;
  flex-wrap: wrap;
  padding: 10px;
  box-sizing: border-box;
`;
