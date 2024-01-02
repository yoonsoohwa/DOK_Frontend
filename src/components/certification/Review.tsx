import { Edit } from '@mui/icons-material';
import { IconButton, Rating } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from 'store/index';
import styled from 'styled-components';
import userImage from '/svg/user_image1.svg';

interface ReviewProps {
  isEditable: boolean;
  setIsEditing: (arg: boolean) => void;
}

export function Review({ isEditable, setIsEditing }: ReviewProps) {
  const { certificationDetailPost } = useSelector((state: RootState) => state.certification);
  let { matchingPost, review } = certificationDetailPost;

  const handleClick = () => {
    setIsEditing(true);
  };

  return (
    <ReviewBox>
      <div className="top">
        <div className="label">견주의 후기</div>
        <div className="left">
          <img src={matchingPost.user.userImg || userImage} className="user-img" />
          <div>{matchingPost.user.nickname}</div>
          <Rating readOnly={true} value={review.rating}></Rating>
        </div>
        {isEditable && (
          <div className="right">
            <IconButton size="small" onClick={handleClick}>
              <Edit fontSize="small" />
            </IconButton>
          </div>
        )}
      </div>
      <div>{review.reviewText}</div>
    </ReviewBox>
  );
}

const ReviewBox = styled.div`
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
