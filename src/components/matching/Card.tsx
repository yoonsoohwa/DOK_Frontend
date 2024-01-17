import { styled } from 'styled-components';
import { LocationOn, AccessTime } from '@mui/icons-material';
import { CardContainer } from '../certification/PostCard.styled';
import { MatchingPostType } from '../../types';
import { ProfileInfo } from 'common/user/ProfileInfo';
import durationTimeFormat from '../../utils/durationTimeFormat';
import dateTimeFormat from '../../utils/dateTimeFormat';
import { EditMenu } from 'common/user/EditMenu';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from 'store/index';
import React from 'react';

interface MatchingCardProps {
  post: MatchingPostType;
}

export function MatchingCard({ post }: MatchingCardProps) {
  const { _id, user, userDog, location, walkingDate, matchingStatus, walkingDuration, createdAt } = post;
  const { user: _user } = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();

  const handleToDetail = (e: React.MouseEvent) => {
    navigate(`/matching/${_id}`);
  };

  return (
    <CardContainer className={`pointer ${matchingStatus !== 'process' && 'ended'}`} onClick={handleToDetail}>
      <ProfileInfo nickname={user.nickname} userImg={user.userImg} time={createdAt} size="small" />
      {_user._id === user._id && matchingStatus === 'process' && <EditMenu size="small" post={post} />}
      <img src={userDog.dogImg} className="main-img" />
      <WalkInfo>
        <div>
          <DogIcon src="/svg/card_dog_icon.svg" />
          <span>{userDog.dogName}</span>
        </div>
        <div className="location">
          <LocationOn sx={{ fontSize: '120%' }} />
          <span>{location?.text}</span>
        </div>
        <div>
          <AccessTime sx={{ fontSize: '120%' }} />
          <span>
            {dateTimeFormat(walkingDate.toString(), 'date')} | {durationTimeFormat(Number(walkingDuration))}
          </span>
        </div>
      </WalkInfo>
      {matchingStatus !== 'process' && <MatchingStatusImage src={`/svg/matching_${matchingStatus}.svg`} />}
    </CardContainer>
  );
}

const WalkInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 13px;
  padding-top: 10px;

  .location span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  & > div {
    display: flex;
    align-items: center;
    padding: 3px 0;

    & > span {
      padding-left: 7px;
    }
  }

  @media screen and (max-width: 768px) {
    & > div {
      padding: 1px 0;
    }
  }
`;

const MatchingStatusImage = styled.img`
  position: absolute;
  top: -1px;
  right: -4px;
  width: 7em;
`;

const DogIcon = styled.img`
  width: 8%;
`;
