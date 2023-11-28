import React from 'react';
import { styled } from 'styled-components';
import { AccessTime, Pets } from '@mui/icons-material';
import { ProfileInfo } from 'common/user/ProfileInfo';
import { Rating, Tooltip } from '@mui/material';
import dayjs from 'dayjs';
import { useDispatch } from 'react-redux';
import { AppDispatch, setCertificationDetailId } from '../../store';
import { CertificationPostType } from '../../types';
import dateTimeFormat from '../../utils/dateTimeFormat';
import { EditMenu } from 'common/user/EditMenu';
import { useNavigate } from 'react-router';

interface CertifiPostCardProps {
  contents: CertificationPostType;
  onclick?: () => void;
}

export function CertifiPostCard({ contents, onclick }: CertifiPostCardProps) {
  const { user, matchingPost, postText, certificationImg, review, createdAt } = contents;
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleOpenDetail = (e: React.MouseEvent) => {
    dispatch(setCertificationDetailId(contents._id));
    onclick?.();
  };

  const handleEdit = () => {
    dispatch(setCertificationDetailId(contents._id));
    navigate('write');
  };

  return (
    <CardContainer className="certifiCard pointer" onClick={handleOpenDetail}>
      <ProfileInfo nickname={user.nickname} time={createdAt} size="small" />
      <EditMenu handleEdit={handleEdit} />
      <Tooltip
        title={
          <div style={{ fontSize: '14px' }}>
            <Pets fontSize="inherit" />
            {` ${matchingPost.userDog.dogName}`}
          </div>
        }
        placement="top"
        followCursor
        arrow
      >
        <img className="main-img" src={certificationImg[0]} />
      </Tooltip>
      <Contents>
        <div>
          <AccessTime sx={{ fontSize: '20px' }} />
          <span>{dateTimeFormat(matchingPost.walkingDate.toString())}</span>
        </div>
        <div className={`detail ${review.rating && 'review'}`}>
          {postText}
          {review.rating && (
            <Review>
              견주의 후기: <Rating value={review.rating} precision={0.5} readOnly></Rating>
            </Review>
          )}
        </div>
      </Contents>
    </CardContainer>
  );
}

export const CardContainer = styled.div`
  width: 100em;
  max-width: 250px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  margin: 0 6px 4px;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 1.5px 1.5px 6px rgba(0, 0, 0, 0.25);
  position: relative;
  box-sizing: border-box;
  transition:
    box-shadow 0.3s ease-in-out 0s,
    transform 0.3s ease-in-out 0s;

  .main-img {
    width: 100%;
    max-width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
  }

  &.ended {
    background-color: #eeeeee;
  }

  @media screen and (max-width: 802px) {
    max-width: 43vw;
  }

  &:hover {
    transform: translate(0px, -5px);
    box-shadow: rgba(0, 0, 0, 0.3) 3px 3px 12px;
  }
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  padding-top: 10px;

  > div {
    display: flex;
    align-items: flex-start;
    padding: 3px 0;

    > span {
      padding-left: 7px;
    }
  }

  .detail {
    box-sizing: border-box;
    width: 100%;
    height: 66px;
    padding: 4px 0;
    white-space: normal;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    color: #6c6c6c;

    &.review {
      display: block;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  @media screen and (max-width: 768px) {
  }
`;

const Review = styled.div`
  width: 100%;
  border-top: #d9d9d9 solid 3px;
  margin-top: 8px;
  display: flex;
  align-items: center;
  padding: 6px 0;
`;
