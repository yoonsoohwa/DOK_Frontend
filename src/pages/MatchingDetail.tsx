import { styled } from "styled-components";
import { DogProfile } from "../components/matching-detail/DogProfile";
import { WalkDetailInfo } from "../components/matching-detail/WalkDetailInfo";
import { CommentContainer } from "../components/matching-detail/CommentContainer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState, setMatchingDetailPost } from "/src/store";

export function MatchingDetailPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams();
  const [isloading, setIsLoading] = useState<boolean>(true);
  

  useEffect(() => {
    const matchingDetailData = async () => {
      try {
        const res = await fetch("/src/api/mock/matching-post-detail.json");
        const data = await res.json();
        dispatch(setMatchingDetailPost(data));
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
            <WalkContainer>
              <DogProfile />
              <WalkDetailInfo />
            </WalkContainer>
            <CommentContainer />
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
