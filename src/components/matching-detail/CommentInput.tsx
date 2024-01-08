import { styled } from 'styled-components';
import userImage from '/svg/user_image1.svg';
import { Input, IconButton } from '@mui/material';
import { Bolt, Send } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState, setOpenAlertLogin, addMatchingComment, updateMatchingComment } from 'store/index';
import { useEffect, useRef, useState } from 'react';
import { matchingPostDetailUrl } from '../../api/apiUrls';
import { AlertLogin } from 'common/alert/AlertLogin';

interface CommentProps {
  commentType?: 'reply';
  parentCommentId?: string;
  editText?: string;
  commentId?: string;
}

export function CommentInput({ commentType, parentCommentId, editText, commentId }: CommentProps) {
  const { matchingDetailPost } = useSelector((state: RootState) => state.matching);
  const { user } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch<AppDispatch>();
  const [text, setText] = useState(editText || '');
  const isLogined = user._id !== '';

  const onClickHandler = () => {
    addComment();
  };

  const onKeyDownHandler = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addComment();
    }
  };

  const addComment = async () => {
    if (!isLogined) {
      dispatch(setOpenAlertLogin(true));
      return;
    }

    if(text === '') {
        return;
    }

    if (!editText) {
      try {
        const res = await fetch(`${matchingPostDetailUrl}/comment`, {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify({
            matchingPostId: matchingDetailPost?._id,
            user: user._id,
            comment: text,
            parentCommentId: parentCommentId || null,
          }),
        });
        const data = await res.json();
        dispatch(addMatchingComment({ ...data, user }));
        setText('');
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        const res = await fetch(`${matchingPostDetailUrl}/comment/${commentId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            comment: text,
          }),
        });
        const data = await res.json();
        dispatch(updateMatchingComment({ commentId, commentData: { ...data, user } }));
      } catch (err) {
        console.log(err);
      }
    }
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <InputLayout>
      <AlertLogin isBack={false} />
      <UserImg src={user.userImg || userImage} className={`user-img ${commentType}`} />
      <Input
        placeholder="댓글 추가"
        value={text}
        sx={{ width: '100%' }}
        autoFocus={Boolean(editText)}
        onChange={onChangeHandler}
        onKeyDown={(e) => onKeyDownHandler(e)}
        disabled={matchingDetailPost?.matchingStatus !== 'process'}
      />
      <IconButton size="small" onClick={onClickHandler}>
        <Send sx={{ transform: 'rotate(-15deg)' }} />
      </IconButton>
    </InputLayout>
  );
}

const InputLayout = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 10px;
  padding-bottom: 20px;
`;

const UserImg = styled.img`
  width: 35px;
  height: 35px;

  &.reply {
    width: 28px;
    height: 28px;
  }
`;
