import { styled } from 'styled-components';
import React, { Children, useEffect, useState } from 'react';
import userImage from '/temp/뽀삐.png';
import { Box, IconButton, MobileStepper, Rating } from '@mui/material';
import { AccessTime, ChatOutlined, Clear, Edit, KeyboardArrowLeft, KeyboardArrowRight, LocationOn } from '@mui/icons-material';
import { ProfileInfo } from 'common/user/ProfileInfo';
import { useSelector } from 'react-redux';
import { RootState } from 'store/index';
import dayjs from 'dayjs';
import { CertificationPostType, initCertificationPostType } from '../../types';

interface CertificationPostDetailProps {
  handleClose: () => void;
}

export function CertificationPostDetail({ handleClose }: CertificationPostDetailProps) {
  const { certificationDetailPost: certificationDetailPostId } = useSelector((state: RootState) => state.certification);
  const [certificationDetailPost, setCertificationDetailPost] = useState<CertificationPostType>(initCertificationPostType);
  let { user, matchingPost, certificationImg, postText, sublocation, review, createdAt } = certificationDetailPost;

  const [currentImgIndex, setCurrentImgIndex] = React.useState(0);
  const maxSteps = certificationImg.length;

  const handleNext = () => {
    setCurrentImgIndex((cur) => cur + 1);
  };

  const handleBack = () => {
    setCurrentImgIndex((cur) => cur - 1);
  };

  useEffect(() => {
    const url = `http://kdt-sw-6-team01.elicecoding.com/api/certificationRouter/certificationPostDetails/${certificationDetailPostId}`;
    (async () => {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setCertificationDetailPost(data);
    })();
  }, []);

  return (
    <DetailBox className="certifiDetail">
      <Left className="detail-left">
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
            <SlideIconButton onClick={handleNext} disabled={currentImgIndex === maxSteps - 1 || maxSteps === 0} sx={{ alignItems: 'end' }}>
              <KeyboardArrowRight />
            </SlideIconButton>
          }
          backButton={
            <SlideIconButton onClick={handleBack} disabled={currentImgIndex === 0 || maxSteps === 0}>
              <KeyboardArrowLeft />
            </SlideIconButton>
          }
          sx={{ background: 'none', width: '100%', height: '100%', alignSelf: 'end' }}
        />
      </Left>

      <Right className="custom-scrollbar">
        <Top>
          <ProfileInfo nickname={user.nickname} time={createdAt} />
          <IconButton onClick={handleClose}>
            <Clear />
          </IconButton>
        </Top>

        <Contents>
          <div>
            <img className="icon" src="/svg/card_dog_icon.svg" />
            <div className="title">강아지</div>
            <div className="text">{matchingPost.userDog.dogName}</div>
          </div>

          <div>
            <AccessTime className="icon" />
            <div className="title">산책 시간</div>
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
        </Contents>

        {review.rating && (
          <Review>
            <div className="top">
              <div className="label">견주의 후기</div>
              <div className="left">
                <img src={userImage} className="user-img" />
                <div>뽀삐엄마</div>
                <Rating readOnly={true} value={review.rating}></Rating>
                <IconButton size="small">
                  <Edit fontSize="small" />
                </IconButton>
              </div>
              <div className="right">30분 전</div>
            </div>
            <div>{review.reviewText}</div>
          </Review>
        )}
      </Right>
    </DetailBox>
  );
}

const DetailBox = styled.div`
  width: 80vw;
  max-width: 180vh;
  height: calc(100vh - 100px);
  display: flex;

  &.hidden {
    display: none;
  }
`;

const Left = styled.div`
  width: 48%;
  height: 100%;
  position: relative;
  overflow: hidden;
  background-color: #f4f4f4;
  display: flex;
  align-items: end;

  .image-box {
    height: 100%;
    position: absolute;
  }

  .image {
    float: left;
    height: 100%;
    transition: all 0.4s ease-in-out;
  }

  .MuiMobileStepper {
    &-dots {
      align-self: end;
      z-index: 999;
    }
    &-dot {
      width: 0.6em;
      height: 0.6em;
      margin: 0 4px;
    }
    &-dotActive {
      background-color: ${({ theme }) => theme.main};
    }
  }
`;

const SlideIconButton = styled(IconButton)`
  svg {
    width: 1.5em;
    height: 1.5em;
    background-color: ${({ theme }) => theme.main};
    opacity: 70%;
    border-radius: 50%;
  }
  &.Mui-disabled svg {
    background-color: ${({ theme }) => theme.main2};
    opacity: 60%;
  }
`;

const Right = styled.div`
  flex-grow: 1;
  height: 100%;
  overflow-y: auto;
  position: relative;
  box-sizing: border-box;
`;

const Top = styled.div`
  margin: 30px 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: calc(100% - 40px);
`;

const Contents = styled.div`
  font-size: 16px;
  margin: 0 30px 40px;
  line-height: 26px;
  font-weight: 500;
  box-sizing: border-box;

  > div {
    display: flex;
    flex-wrap: wrap;
    margin: 20px 0;
    box-sizing: border-box;

    .icon {
      width: 28px;
      height: 28px;
      margin-right: 6px;
      color: #3e3e3e;
    }

    .title {
      width: 80px;
      margin-right: 24px;
      color: #6b6b6b;
    }
  }

  .detail {
    width: 100%;
    margin: 6px 0 0;
    padding: 30px 26px;
    box-sizing: border-box;
    line-height: 170%;

    font-weight: 400;
    font-family: sans-serif;

    position: relative;
    background: linear-gradient(-135deg, transparent 1.3em, #eff5f8 0);

    border-radius: 0.5em;
  }

  .detail::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;

    width: 0;
    height: 0;
    border-bottom: 30px solid #d5e5f0;
    border-right: 30px solid transparent;
    box-shadow: -0.2em 0.2em 0.3em -0.1em rgba(0, 0, 0, 0.15);
  }
`;

const Review = styled.div`
  width: 100%;
  position: static;
  bottom: 0px;
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
