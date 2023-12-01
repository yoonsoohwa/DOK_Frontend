import { styled } from 'styled-components';
import { CommentItem } from './CommentItem';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState, setMatchingComments } from 'store/index';
import { Children, useEffect, useState } from 'react';
import { MatchingCommentType } from '../../types';

interface type {
  comment: MatchingCommentType;
}

export function CommentContainer({ comment }: type) {
  const { matchingComments } = useSelector((state: RootState) => state.matching);

  return (
    <div>
      <CommentItem comment={comment} />
      <ReplyContainer>
        {Children.toArray(matchingComments.filter((reply) => comment._id === reply.parentCommentId).map((reply) => <CommentItem comment={reply} commentType="reply" />))}
      </ReplyContainer>
    </div>
  );
}

const ReplyContainer = styled.div`
  padding-left: 42px;
`;
