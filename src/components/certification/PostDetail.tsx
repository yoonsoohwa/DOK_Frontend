import * as styled from './PostDetail.styled';
import { Children, useEffect, useState } from 'react';
import { Box, IconButton, MobileStepper } from '@mui/material';
import { AccessTime, ChatOutlined, Clear, KeyboardArrowLeft, KeyboardArrowRight, LocationOn } from '@mui/icons-material';
import { ProfileInfo } from 'common/user/ProfileInfo';
import { useSelector } from 'react-redux';
import { RootState } from 'store/index';
import dayjs from 'dayjs';
import { ReviewEdit } from './ReviewEdit';
import { Review } from './Review';

interface CertificationPostDetailProps {
  handleClose: () => void;
}

export function CertificationPostDetail({ handleClose }: CertificationPostDetailProps) {
  const { user: _user } = useSelector((state: RootState) => state.user);
  const { certificationDetailPost } = useSelector((state: RootState) => state.certification);
  let { user, matchingPost, certificationImg, postText, sublocation, review, createdAt } = certificationDetailPost;

  const [isEditable, setIsEditable] = useState<boolean>(false); //default false
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [currentImgIndex, setCurrentImgIndex] = useState<number>(0);
  const maxSteps = certificationImg.length;

  const handleNext = () => {
    setCurrentImgIndex((cur) => cur + 1);
  };

  const handleBack = () => {
    setCurrentImgIndex((cur) => cur - 1);
  };

  useEffect(() => {
    if (_user._id === matchingPost.user._id) {
      setIsEditable(true);

      if (!review.rating) {
        setIsEditing(true);
      }
    }
    // isEditable하고 review.rating이 없다면 isEditing = true
  }, []);

  return (
    <styled.DetailBox className="certifiDetail">
      <IconButton className="close" onClick={handleClose}>
        <Clear />
      </IconButton>
      <styled.Left className="detail-left">
        <div className="image-box" style={{ width: `${maxSteps * 100}%` }}>
          {Children.toArray(
            certificationImg.map((step) => (
              <div className="image" style={{ transform: `translateX(-${currentImgIndex}00%)`, width: `${100 / maxSteps}%` }}>
                <Box
                  component="img"
                  sx={{
                    height: '100%',
                    display: 'block',
                    width: '100%',
                    objectFit: 'contain',
                  }}
                  src={step}
                  alt={step}
                />
              </div>
            )),
          )}
        </div>

        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={currentImgIndex}
          nextButton={
            <styled.SlideIconButton onClick={handleNext} disabled={currentImgIndex === maxSteps - 1 || maxSteps === 0} sx={{ alignItems: 'end' }}>
              <KeyboardArrowRight />
            </styled.SlideIconButton>
          }
          backButton={
            <styled.SlideIconButton onClick={handleBack} disabled={currentImgIndex === 0 || maxSteps === 0}>
              <KeyboardArrowLeft />
            </styled.SlideIconButton>
          }
          sx={{ background: 'none', width: '100%', height: '100%', alignSelf: 'end' }}
        />
      </styled.Left>

      <styled.Right className="custom-scrollbar">
        <div>
          <styled.Top>
            <ProfileInfo nickname={user.nickname} userImg={user.userImg} time={createdAt} />
          </styled.Top>

          <styled.Contents>
            <div>
              <img className="icon" src="/svg/card_dog_icon.svg" />
              <div className="title">강아지</div>
              <div className="text">{matchingPost.userDog.dogName}</div>
            </div>

            <div>
              <AccessTime className="icon" />
              <div className="title">산책 일시</div>
              <div className="text">{dayjs(matchingPost.walkingDate).format('YYYY년 MM월 DD일 hh:mma')}</div>
            </div>
            {sublocation && (
              <div>
                <LocationOn className="icon" />
                <div className="title">산책 위치</div>
                <div className="text">{sublocation}</div>
              </div>
            )}

            <div>
              <ChatOutlined className="icon" />
              <div className="title">인증 내용</div>
            </div>
            <div className="text detail">{postText}</div>
          </styled.Contents>
        </div>
        {isEditing ? <ReviewEdit setIsEditing={setIsEditing} /> : review.rating !== 0 && <Review isEditable={isEditable} setIsEditing={setIsEditing} />}
      </styled.Right>
    </styled.DetailBox>
  );
}
