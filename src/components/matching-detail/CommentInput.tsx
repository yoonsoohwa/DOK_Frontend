import { styled } from 'styled-components';
import personImg from '/svg/person_img.svg';
import { Input, IconButton } from '@mui/material';
import { Send } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { RootState } from 'store/index';
import { useState } from 'react';

interface CommentProps {
    commentType?: 'reply',
    parentCommentId?: string,
}

export function CommentInput({commentType, parentCommentId}: CommentProps) {
  const { matchingDetailPost } = useSelector((state: RootState) => state.matching);
  const userId = '65656e7fddbf8bf4b11e0292';
  const url = 'http://kdt-sw-6-team01.elicecoding.com/api/matchingPostDetail/comment'
  const [text, setText] = useState('');

  const onClickHandler = async () => {
    const res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            "matchingPostId": matchingDetailPost?._id,
            "user": userId,
            "comment": text,
            "parentCommentId": parentCommentId || null
        })
    })
    const data = res.json();
  }

  const onChangeHandler = (e: any) => {
    setText(e.target.value);
  }

  return (
    <InputLayout>
      <UserImg src={personImg} className={commentType}/>
      <Input placeholder="댓글 추가" sx={{ width: '100%' }} onChange={onChangeHandler}/>
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
