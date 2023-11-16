import { styled } from "styled-components";
import React from "react";
import { Box, Button, IconButton, MobileStepper } from "@mui/material";
import { ListPageBanner } from "../../components/Common/Banner/ListPageBanner";
import BannerImage from "/svg/matchingBannerImage.svg";
import { ListPageTopBar } from "../../components/Common/Bar/ListPageTopBar";
import { AccountCircle, Clear, KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import userImage from "/temp/뽀삐.png";

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

export function CertificationListPage() {
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
  const desc = (
    <>
      이웃 주민들과 가깝고 따뜻한 교류를 경험해보세요
      <br />
      믿을만한 전문가들이 우리 아이를 기다리고 있습니다!
    </>
  );
  const MyButton = (
    <Button variant="contained" sx={{ width: "100%", height: "56px", borderRadius: "50px", fontSize: "20px", fontWeight: "600", backgroundColor: "#FF8A00", color: "white" }}>
      매칭 신청하기
    </Button>
  );

  return (
    <CertificationList>
      <ListPageBanner title={"매칭 요청"} desc={desc}>
        <RightBox>
          <img className="banner-image" src={BannerImage} />
          {MyButton}
        </RightBox>
      </ListPageBanner>
      <Section>
        <ListPageTopBar text={["132", "개의 산책 인증이 있습니다."]} />

        <DetailBox>
          <Left>
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

          <Right>
            <Top>
              <PostUser>
                <img src={userImage} />
                <UserInfo>
                  I am 진이에요
                  <span>45분 전</span>
                </UserInfo>
              </PostUser>
              <IconButton>
                <Clear />
              </IconButton>
            </Top>

            <Contents>
              <div>
                <img src="/svg/card-dog-icon.svg" />
                <div>이뽀삐</div>
              </div>
            </Contents>
            <Review></Review>
          </Right>
        </DetailBox>
      </Section>
    </CertificationList>
  );
}

const CertificationList = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const RightBox = styled.div`
  width: 100%;
  padding-bottom: 20px;

  img {
    position: relative;
    display: block;
    margin: 0 auto;
    bottom: -26px;
    z-index: 2;
  }
`;

const Section = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
`;

const DetailBox = styled.div`
  width: 100%;
  height: 560px;
  border-top: 4px #bdbdbd solid;
  border-bottom: 4px #bdbdbd solid;
  margin-bottom: 20px; //zzzzzzzzzzzzzzzzzzzzzzz
  display: flex;
`;

const Left = styled.div`
  width: 38vw;
  height: 100%;
  position: relative;
  overflow: hidden;
  background-color: #eeeeee;
  display: flex;
  align-items: end;

  .image-box {
    width: ${images.length * 100}%;
    height: 100%;
    position: absolute;
  }

  .image {
    float: left;
    width: 38vw;
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
  background-color: aliceblue;
`;

const Top = styled.div`
  margin: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const PostUser = styled.div`
  display: flex;
  padding-bottom: 10px;
  align-items: center;

  img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50%;
  }
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 5px;
  font-size: 20px;
  font-weight: 500;
  line-height: 26px;

  & > span {
    color: #8e8e8e;
    font-size: 14px;
    font-weight: 400;
  }

  @media screen and (max-width: 768px) {
    & > span {
      font-size: 9px;
    }
  }
`;

const Contents = styled.div``;

const Review = styled.div``;
