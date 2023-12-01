import { styled } from 'styled-components';
import { AccountCircle, LocationOn, AccessTime } from '@mui/icons-material';
import { CardContainer } from '../certification/PostCard';
import { MatchingPostType } from '../../types';
import { ProfileInfo } from 'common/user/ProfileInfo';
import durationTimeFormat from '../../utils/durationTimeFormat';
import dateTimeFormat from '../../utils/dateTimeFormat';
import { EditMenu } from 'common/user/EditMenu';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppDispatch, RootState, setCertificationDetail, setMatchingPostEditId } from 'store/index';
import React, { useState } from 'react';
import { matchingFormUrl, matchingPostDetailUrl } from 'api/apiUrls';

interface MatchingCardProps {
  post: MatchingPostType;
  setOpenAlert: (arg: boolean) => void;
}

export function MatchingCard({ post, setOpenAlert }: MatchingCardProps) {
  const { _id, user, userDog, location, walkingDate, matchingStatus, walkingDuration, createdAt } = post;
  const { user: _user } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleEdit = async () => {
    const res = await fetch(`${matchingPostDetailUrl}/handler/${_id}`, { credentials: 'include' });
    const data = await res.json();
    console.log('?', data);
    if (data.length) {
      console.log('data: ', data);
      return setOpenAlert(true);
    }
    navigate(`/matching/write/${_id}`, { state: { post } });
  };

  const handleRemove = async () => {
    // const res = await fetch(`${matchingFormUrl}/handler/${_id}`, { credentials: 'include' });
    // const data = await res.json();
    // console.log(data);

    dispatch(setMatchingPostEditId(_id));
  };

  const handleToDetail = (e: React.MouseEvent) => {
    navigate(`/matching/${_id}`);
  };

  return (
    <CardContainer className={`pointer ${matchingStatus !== 'process' && 'ended'}`} onClick={handleToDetail}>
      <ProfileInfo nickname={user.nickname} userImg={user.userImg} time={createdAt} size="small" />
      {_user._id === user._id && matchingStatus === 'process' && <EditMenu _id={_id} handleEdit={handleEdit} handleRemove={handleRemove} />}
      <img src={userDog.dogImg} className="main-img" />
      <WalkInfo>
        <div>
          <DogIcon src="/svg/card_dog_icon.svg" />
          <span>{userDog.dogName}</span>
        </div>
        <div>
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
