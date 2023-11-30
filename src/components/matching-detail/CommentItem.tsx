import { styled } from 'styled-components';
import personImg from '/svg/person_img.svg';
import { UserNickname } from 'common/user/UserNickname';
import { CommentInput } from './CommentInput';
import { MatchingCommentType } from '../../types';
import timeDiff from '../../utils/timeDiff';
import { useState } from 'react';
import { AlertError } from 'common/alert/AlertError';

interface type {
  comment: MatchingCommentType;
  commentType?: 'reply';
}

export function CommentItem({ comment, commentType }: type) {
  const [openInput, setOpenInput] = useState(false);
  const [openErrorAlert, setOpenErrorAlert] = useState(false);
  const { _id, comment: text, createdAt, user } = comment;

  const handleAddReply = () => {
    setOpenInput(!openInput);
  }

  const handleRemove = async () => {
    try {
        const res = await fetch(`http://kdt-sw-6-team01.elicecoding.com/api/matchingPostDetail/comment/${_id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            }
        });
        const data = await res.json();
        setOpenErrorAlert(false);
        console.log(data);
    } catch(err) {
        console.log(err);
    }
  }

  return (
    <CommentItemLayout>
      <UserImg src={personImg} />
      <div>
        <CommentInfo>
          <UserNickname nickname={user.nickname} badge={true} />
          <span>{timeDiff(createdAt)}</span>
        </CommentInfo>
        <p>{text}</p>
        <CommentItemLayout>
          {!commentType ? <OptionButton id="addReply" onClick={handleAddReply}>댓글쓰기</OptionButton> : null}
          <OptionButton id="commentEdit">수정</OptionButton>
          <OptionButton id="commentDelete" onClick={() => setOpenErrorAlert(true)}>삭제</OptionButton>
        </CommentItemLayout>
        {openInput && <CommentInput commentType='reply' parentCommentId={_id} />}
      </div>
      <AlertError
        title="정말 삭제하시겠습니까?"
        open={openErrorAlert}
        onClose={() => setOpenErrorAlert(false)}
        onClick={handleRemove}
      />
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
