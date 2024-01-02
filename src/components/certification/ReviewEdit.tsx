import { Button, Rating, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState, setCertificationPostOne, setCertificationReview } from 'store/index';
import styled from 'styled-components';
import userImage from '/temp/뽀삐.png';
import { useState } from 'react';
import { certificationUrl } from 'api/apiUrls';

interface ReviewEditProps {
  setIsEditing: (arg: boolean) => void;
}

export function ReviewEdit({ setIsEditing }: ReviewEditProps) {
  const { certificationDetailPost, certificationDetailPostIndex } = useSelector((state: RootState) => state.certification);
  let { _id, matchingPost, review } = certificationDetailPost;
  const dispatch = useDispatch<AppDispatch>();

  const [rating, setRating] = useState(review.rating || 0);
  const [text, setText] = useState(review.reviewText || '');
  const [errorText, setErrorText] = useState(false);

  const handleChangeRating = (e: React.SyntheticEvent<Element, Event>, newValue: number | null) => {
    setRating(Number(newValue));
  };

  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (value.length > 100) {
      return;
    }

    if (value.length >= 5) {
      setErrorText(false);
    }

    setText(value);
  };

  const handleSubmit = async () => {
    if (text.trim().length < 5) {
      return setErrorText(true);
    }

    const newReview = { rating, reviewText: text.trim() };

    const res = await fetch(`${certificationUrl}/newCertificationPostReview/${_id}`, {
      method: 'PUT',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ matchingPost: matchingPost._id, review: newReview }),
    });
    const data = await res.json();
    console.log(data);

    dispatch(setCertificationReview(data.review));
    dispatch(setCertificationPostOne({ index: certificationDetailPostIndex, post: { ...certificationDetailPost, review: data.review } }));
    setIsEditing(false);
  };

  return (
    <Review>
      <div className="top">
        <div className="label">견주의 후기</div>
        <div className="left">
          <img src={matchingPost.user.userImg || userImage} className="user-img" />
          <div>{matchingPost.user.nickname}</div>
          <Rating readOnly={false} value={rating} onChange={handleChangeRating}></Rating>
        </div>
        <div className="right">
          <Button size="small" variant="outlined" color="subW" onClick={handleSubmit}>
            등록하기
          </Button>
        </div>
      </div>
      <div>
        <TextField error={errorText} helperText={errorText && '5글자 이상 작성해주세요.'} fullWidth rows={3} value={text} onChange={handleChangeText} multiline />
      </div>
    </Review>
  );
}

const Review = styled.div`
  width: 100%;
  border-top: 2px #8e8e8e solid;
  margin-top: 80px;
  padding: 30px 26px;
  box-sizing: border-box;

  .label {
    position: absolute;
    top: -43px;
    background-color: #fff;
    padding: 0 4px;
    color: #8e8e8e;
    font-weight: 500;
  }

  .top {
    display: flex;
    justify-content: space-between;
    position: relative;
    margin-bottom: 14px;

    .left {
      display: flex;
      align-items: center;
      font-size: 20px;
      font-weight: 500;

      > * {
        margin-right: 8px;
      }
    }

    .right {
      font-size: 14px;
      color: #8e8e8e;
      padding: 2px 0;
    }

    .user-img {
      width: 35px;
      height: 35px;
    }
  }
`;
