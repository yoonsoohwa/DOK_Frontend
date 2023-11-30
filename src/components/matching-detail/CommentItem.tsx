import { styled } from 'styled-components';
import personImg from '/svg/person_img.svg';
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
  const { matchingDetailPost } = useSelector((state: RootState) => state.matching);
  const { user } = useSelector((state: RootState) => state.user);
  const [openInput, setOpenInput] = useState(false);
  const [openErrorAlert, setOpenErrorAlert] = useState(false);
  const { _id, comment: text, createdAt, user: commentUser } = comment;

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
      dispatch(deleteMatchingComment(_id));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <CommentItemLayout>
      <UserImg src={personImg} className={commentType}/>
      <div>
        <CommentInfo>
          <UserNickname nickname={commentUser.nickname} badge={true} />
          <span>{timeDiff(createdAt)}</span>
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
              <OptionButton id="commentEdit">수정</OptionButton>
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
  width: 40px;
  height: 40px;

  &.reply {
    width: 30px;
    height: 30px;
  }
`;

const CommentInfo = styled(CommentItemLayout)`
  align-items: center;
  width: fit-content;

  > div > span:first-of-type {
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
