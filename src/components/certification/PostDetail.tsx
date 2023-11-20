import { styled } from "styled-components";
import React from "react";
import userImage from "/temp/뽀삐.png";
import { Box, IconButton, MobileStepper, Rating } from "@mui/material";
import { AccessTime, ChatOutlined, Clear, Edit, KeyboardArrowLeft, KeyboardArrowRight, LocationOn } from "@mui/icons-material";
import { Profile } from "common/ProfileInfo";

const images = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath: "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bird",
    imgPath: "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bali, Indonesia",
    imgPath: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
  },
  {
    label: "Goč, Serbia",
    imgPath: "https://i.pinimg.com/564x/2a/df/88/2adf882cc022621524a0d116c5775723.jpg",
  },
];

export function CertificationPostDetail() {
  const [currentImgIndex, setCurrentImgIndex] = React.useState(0);
  const [style, setStyle] = React.useState({
    transform: `translateX(-${currentImgIndex}00%)`,
  });
  const maxSteps = images.length;

  const handleNext = () => {
    setCurrentImgIndex((cur) => cur + 1);
    setStyle({
      transform: `translateX(-${currentImgIndex + 1}00%)`,
    });
  };

  const handleBack = () => {
    setCurrentImgIndex((cur) => cur - 1);
    setStyle({
      transform: `translateX(-${currentImgIndex - 1}00%)`,
    });
  };

  const handleCloseDetail = (e: any): void => {
    const postDetail = e.target.closest(".certifiDetail");
    const postCard = postDetail.previousSibling;
    console.log(postCard);
    postDetail.classList.add("hidden");
    postCard.classList.remove("hidden");
  };

  return (
    <DetailBox className="certifiDetail hidden">
      <Left className="detail-left">
        <div className="image-box">
          {images.map((step, index) => (
            <div className="image" key={step.label} style={style}>
              <Box
                component="img"
                sx={{
                  height: "100%",
                  display: "block",
                  width: "100%",
                  objectFit: "contain",
                }}
                src={step.imgPath}
                alt={step.label}
              />
            </div>
          ))}
        </div>

        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={currentImgIndex}
          nextButton={
            <SlideIconButton onClick={handleNext} disabled={currentImgIndex === maxSteps - 1 || maxSteps === 0} sx={{ alignItems: "end" }}>
              <KeyboardArrowRight />
            </SlideIconButton>
          }
          backButton={
            <SlideIconButton onClick={handleBack} disabled={currentImgIndex === 0 || maxSteps === 0}>
              <KeyboardArrowLeft />
            </SlideIconButton>
          }
          sx={{ background: "none", width: "100%", height: "100%", alignSelf: "end" }}
        />
      </Left>

      <Right className="custom-scrollbar">
        <Top>
          <Profile />
          <IconButton onClick={handleCloseDetail}>
            <Clear />
          </IconButton>
        </Top>

        <Contents>
          <div>
            <img className="icon" src="/svg/card_dog_icon.svg" />
            <div className="title">강아지</div>
            <div className="text">이뽀삐</div>
          </div>

          <div>
            <AccessTime className="icon" />
            <div className="title">산책 시간</div>
            <div className="text">2023-11-08 14:00 ~ 14:30(30m)</div>
          </div>

          <div>
            <LocationOn className="icon" />
            <div className="title">산책 위치</div>
            <div className="text">송파 근린 공원</div>
          </div>

          <div>
            <ChatOutlined className="icon" />
            <div className="title">인증 내용</div>
          </div>
          <div className="text detail">
            뽀삐가 너무 발랄하고 귀여웠습니다. <br />
            사진은 서울숲에서 찍은 사진입니다!배변 한 번 했고, <br />물 100ml 마셨어요~ 뽀삐가 너무 발랄하고 귀여웠습니다. <br />
            사진은 서울숲에서 찍은 사진입니다!배변 한 번 했고, <br />
            뽀삐가 너무 발랄하고 귀여웠습니다. <br />
            사진은 서울숲에서 찍은 사진입니다!배변 한 번 했고, <br />
            뽀삐가 너무 발랄하고 귀여웠습니다. <br />
            사진은 서울숲에서 찍은 사진입니다!배변 한 번 했고, <br />
            뽀삐가 너무 발랄하고 귀여웠습니다. <br />
            사진은 서울숲에서 찍은 사진입니다!배변 한 번 했고, <br />
            뽀삐가 너무 발랄하고 귀여웠습니다. <br />
            사진은 서울숲에서 찍은 사진입니다!배변 한 번 했고, <br />
            뽀삐가 너무 발랄하고 귀여웠습니다. <br />
            사진은 서울숲에서 찍은 사진입니다!배변 한 번 했고, <br />
            뽀삐가 너무 발랄하고 귀여웠습니다. <br />
            사진은 서울숲에서 찍은 사진입니다!배변 한 번 했고
          </div>
        </Contents>

        <Review>
          <div className="top">
            <div className="label">견주의 후기</div>
            <div className="left">
              <img src={userImage} className="user-img" />
              <div>뽀삐엄마</div>
              <Rating readOnly={true}></Rating>
              <IconButton size="small">
                <Edit fontSize="small" />
              </IconButton>
            </div>
            <div className="right">30분 전</div>
          </div>
          <div>
            뽀삐 표정 보니 산책 신나게 잘 한 것 같습니다 <br />
            ^^근데 사진 조금 더 많이 찍어주셨으면 좋았을 것 같아요~ <br />
            확실히 전문가다 보니 제가 산책시킨 것보다 낫네요
          </div>
        </Review>
      </Right>
    </DetailBox>
  );
}

const DetailBox = styled.div`
  width: 98%;
  height: 560px;
  border-top: 4px #bdbdbd solid;
  border-bottom: 4px #bdbdbd solid;
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
    width: ${images.length * 100}%;
    height: 100%;
    position: absolute;
  }

  .image {
    float: left;
    width: ${100 / images.length}%;
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
  margin: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: calc(100% - 40px);
`;

const Contents = styled.div`
  font-size: 16px;
  margin: 0 30px;
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
    content: "";
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
