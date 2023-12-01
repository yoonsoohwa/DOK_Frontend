import { styled } from 'styled-components';
import userImage from '/svg/user_image1.svg';
import { UserNickname } from 'common/user/UserNickname';
import { CommentInput } from './CommentInput';
import { MatchingCommentType } from '../../types';
import timeDiff from '../../utils/timeDiff';
import { useEffect, useState } from 'react';
import { AlertError } from 'common/alert/AlertError';
import { matchingPostDetailUrl } from '../../api/apiUrls';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState, deleteMatchingComment } from 'store/index';

interface type {
  comment: MatchingCommentType;
  commentType?: 'reply';
}

export function CommentItem({ comment, commentType }: type) {
  const dispatch = useDispatch<AppDispatch>();
  const { matchingDetailPost, matchingComments } = useSelector((state: RootState) => state.matching);
  const { user } = useSelector((state: RootState) => state.user);
  const [openInput, setOpenInput] = useState(false);
  const [openErrorAlert, setOpenErrorAlert] = useState(false);
  const [editComment, setEditComment] = useState(false);
  const { _id, comment: text, createdAt, user: commentUser, parentCommentId, updatedAt } = comment;

  const handleAddReply = () => {
    setOpenInput(!openInput);
  };

  const handleRemove = async () => {
    try {
      const res = await fetch(`${matchingPostDetailUrl}/comment/${_id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
      setOpenErrorAlert(false);
      setOpenInput(false);
      dispatch(deleteMatchingComment(_id));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setEditComment(false);
  }, [matchingComments]);

  return editComment ? (
    parentCommentId ? (
      <CommentInput commentType="reply" editText={text} commentId={_id} />
    ) : (
      <CommentInput editText={text} commentId={_id} />
    )
  ) : (
    <CommentItemLayout>
      <UserImg src={commentUser.userImg || userImage} className={`user-img ${commentType}`} />

      <div>
        <CommentInfo>
          <span>{commentUser.nickname}</span>
          <span>
            {timeDiff(createdAt)} {updatedAt !== createdAt && '(수정됨)'}
          </span>
        </CommentInfo>
        <p>{text}</p>
        <CommentItemLayout>
          {!commentType && matchingDetailPost?.matchingStatus === 'process' ? (
            <OptionButton id="addReply" onClick={handleAddReply}>
              댓글쓰기
            </OptionButton>
          ) : null}
          {user._id === commentUser._id && (
            <>
              <OptionButton id="commentEdit" onClick={() => setEditComment(true)}>
                수정
              </OptionButton>
              <OptionButton id="commentDelete" onClick={() => setOpenErrorAlert(true)}>
                삭제
              </OptionButton>
            </>
          )}
        </CommentItemLayout>
        {openInput && <CommentInput commentType="reply" parentCommentId={_id} />}
      </div>

      <AlertError title="정말 삭제하시겠습니까?" open={openErrorAlert} onClose={() => setOpenErrorAlert(false)} onClick={handleRemove} />
    </CommentItemLayout>
  );
}

const CommentItemLayout = styled.div`
  display: flex;
  gap: 7px;
  padding: 3px 0;

  > div {
    width: 100%;
  }
`;

const UserImg = styled.img`
  width: 35px;
  height: 35px;

  &.reply {
    width: 28px;
    height: 28px;
  }
`;

const CommentInfo = styled(CommentItemLayout)`
  align-items: center;
  width: fit-content;

  > span:first-of-type {
    font-weight: 600;
  }

  > span:last-of-type {
    font-size: 12px;
    color: #9d9d9d;
    flex-shrink: 0;
  }
`;

const OptionButton = styled.button`
  border: 0;
  background: transparent;
  padding: 2px 0;
  font-size: 12px;
`;
