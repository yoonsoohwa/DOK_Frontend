import { styled } from 'styled-components';
import { CommentInput } from './CommentInput';
import { CommentItem } from './CommentItem';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState, setMatchingComments } from 'store/index';
import { Children, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export function CommentContainer() {
  const dispatch = useDispatch<AppDispatch>();
  const { matchingComments } = useSelector((state: RootState) => state.matching);
  const { id } = useParams();
  const [hasComment, setHasComment] = useState(false);

  useEffect(() => {
    const getMatchingComment = async () => {
      try {
        const res = await fetch(`http://kdt-sw-6-team01.elicecoding.com/api/matchingPostDetail/comment/${id}`);
        const data = await res.json();
        dispatch(setMatchingComments(data));
        if (data.length !== 0) setHasComment(true);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };

    getMatchingComment();
  }, []);

  return (
    <CommentLayout>
      <CommentInput />
      {hasComment ? Children.toArray(matchingComments.map((comment) => <CommentItem />)) : <NoCommentContainer>댓글이 없습니다.</NoCommentContainer>}
    </CommentLayout>
  );
}

const CommentLayout = styled.div`
  max-width: 900px;
  padding: 2vw 4vw;
  margin: 0 auto;
  box-sizing: border-box;
  border-top: solid #c0c0c0 1px;
  border-bottom: solid #c0c0c0 1px;
`;

const NoCommentContainer = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #c0c0c0;
`;
