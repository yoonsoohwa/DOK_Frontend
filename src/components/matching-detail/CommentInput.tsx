import { styled } from 'styled-components';
import userImage from '/svg/user_image1.svg';
import { Input, IconButton } from '@mui/material';
import { Send } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState, setOpenAlertLogin, addMatchingComment } from 'store/index';
import { useState } from 'react';
import { matchingPostDetailUrl } from '../../api/apiUrls';
import { AlertLogin } from 'common/alert/AlertLogin';

interface CommentProps {
  commentType?: 'reply';
  parentCommentId?: string;
}

export function CommentInput({ commentType, parentCommentId }: CommentProps) {
  const { matchingDetailPost } = useSelector((state: RootState) => state.matching);
  const { user } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch<AppDispatch>();
  const [text, setText] = useState('');
  const isLogined = user._id !== '';

  const onClickHandler = async () => {
    if (!isLogined) {
      dispatch(setOpenAlertLogin(true));
      return;
    }

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
      console.log(data , "dd");
      dispatch(addMatchingComment(data));
      setText('');
    } catch (err) {
      console.log(err);
    }
  };

  const onChangeHandler = (e: any) => {
    setText(e.target.value);
  };

  return (
    <InputLayout>
    <AlertLogin isBack={false}/>
      <UserImg src={user.userImg || userImage} className={`user-img ${commentType}`} />
      <Input placeholder="댓글 추가" sx={{ width: '100%' }} onChange={onChangeHandler} disabled={matchingDetailPost?.matchingStatus !== 'process'} />
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
  padding-bottom: 10px;
`;

const UserImg = styled.img`
  width: 40px;
  height: 40px;

  &.reply {
    width: 30px;
    height: 30px;
  }
`;
