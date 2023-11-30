import { styled } from 'styled-components';
import { CommentInput } from './CommentInput';
import { CommentItem } from './CommentItem';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState, setMatchingComments } from 'store/index';
import { Children, useEffect, useState } from 'react';
import { CommentContainer } from './CommentContainer';
import { matchingPostDetailUrl } from '../../api/apiUrls';

export function CommentList() {
  const dispatch = useDispatch<AppDispatch>();
  const { matchingComments, matchingDetailPost } = useSelector((state: RootState) => state.matching);

  useEffect(() => {
    const getMatchingComment = async () => {
      try {
        const res = await fetch(`${matchingPostDetailUrl}/comment/${matchingDetailPost?._id}`);
        const data = await res.json();
        if (res.status === 200) {
          dispatch(setMatchingComments(data.reverse()));
        }
      } catch (err) {
        console.log(err);
      }
    };

    getMatchingComment();
  }, [matchingComments]);

  return (
    <CommentLayout>
      <CommentInput />
      {matchingComments.length !== 0 ? (
        Children.toArray(matchingComments.filter((comment) => comment.parentCommentId === null).map((comment) => <CommentContainer comment={comment} />))
      ) : (
        <NoCommentContainer>댓글이 없습니다.</NoCommentContainer>
      )}
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