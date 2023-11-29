import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { ChatOutlined, Info, AddBox, LocationOn, Event, AccessTime, MonetizationOnOutlined, Pets } from '@mui/icons-material';
import { PostCreateFormLayout } from 'common/create-page/PostCreateFormLayout';
import { AlertSnackbar } from 'common/alert/AlertSnackbar';
import { AlertSuccess } from 'common/alert/AlertSuccess';

import { DogSelect } from '../components/matching-form/DogSelect';
import { DateSelect } from '../components/matching-form/DateSelect';
import { DurationSelect } from '../components/matching-form/DurationSelect';
import { PaySelect } from '../components/matching-form/PaySelect';
import { RequestTextField } from '../components/matching-form/RequestTextField';
import { LocationSelect } from '../components/matching-form/LocationSelect';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState, setDateSelect, setDogSelect, setDurationSelect, setLocation, setLocationDetail, setPaySelect, setRequestText } from '../store';
import { useNavigate } from 'react-router';
import { PostCreateGroup } from 'common/create-page/PostCreateGroup';
import dayjs from 'dayjs';
import { useLocation } from 'react-router-dom';
import { Forbidden } from 'common/state/Forbidden';

export function MatchingUpdatePage() {
  const { dogSelect, errorDogSelect, dateSelect, errorDateSelect, durationSelect, paySelect, errorPaySelect, requestText, locationSelect, locationDetailSelect } = useSelector(
    (state: RootState) => state.matchingForm,
  );
  const dispatch = useDispatch<AppDispatch>();
  const [isForbidden, setIsForbidden] = useState(false);
  const [openError, setOpenError] = useState(false);
  const [openSubmit, setOpenSubmit] = useState(false);
  const nav = useNavigate();
  const loc = useLocation();

  const updatePost = async () => {
    const reqBody = {
      userDog: dogSelect?._id,
      price: paySelect,
      location: locationSelect,
      locationDetail: locationDetailSelect,
      walkingDate: dayjs(dateSelect).toDate(),
      walkingDuration: durationSelect,
      requestText,
    };

    const res = await fetch('', {
      method: 'POST',
      body: JSON.stringify(reqBody),
    });

    nav('/matching');
  };

  const handleSubmit = () => {
    if (errorDogSelect || errorDateSelect || errorPaySelect) {
      console.log(errorDogSelect, errorDateSelect, errorPaySelect);
      return setOpenError(true);
    }
    setOpenSubmit(true);
  };

  const handleReset = () => {
    throw new Error('Function not implemented.');
  };

  useEffect(() => {
    if (!loc.state?.post) {
      return setIsForbidden(true);
    }

    const { _id, user, userDog, price, location, locationDetail, requestText, walkingDate, walkingDuration } = loc.state.post;

    dispatch(setDogSelect(userDog));
    dispatch(setDateSelect(walkingDate));
    dispatch(setDurationSelect(walkingDuration));
    dispatch(setPaySelect(price));
    dispatch(setLocation(location));
    dispatch(setLocationDetail(locationDetail));
    dispatch(setRequestText(requestText));
  }, []);

  return (
    <>
      {isForbidden ? (
        <Forbidden />
      ) : (
        <CertifiCreate>
          <AlertSnackbar open={openError} onClose={() => setOpenError(false)} type="error" title="잘못된 데이터입니다." desc="작성한 값을 다시 확인해주세요." />
          <AlertSuccess
            open={openSubmit}
            onClose={() => setOpenSubmit(false)}
            onClick={updatePost}
            title="글을 수정하시겠습니까?"
            desc={`강아지 : ${dogSelect?.dogName}\n산책 날짜 : ${dateSelect}\n산책 시간 : ${durationSelect}\n가격 : ${paySelect}\n요청 사항 : ${requestText}\n만남 위치 : ${locationSelect}\n상세 위치 : ${locationDetailSelect}`}
          />
          <div className="body">
            <PostCreateFormLayout title="매칭 신청하기" onSubmit={handleSubmit} onReset={handleReset}>
              <PostCreateGroup title="Pet">
                <Contents>
                  <DogSelect />
                </Contents>
              </PostCreateGroup>

              <PostCreateGroup title="Infomation">
                <div className="flex">
                  <div className="half">
                    <Contents>
                      <DateSelect />
                    </Contents>
                    <Contents>
                      <DurationSelect />
                    </Contents>
                  </div>
                  <div className="half">
                    <Contents>
                      <PaySelect />
                    </Contents>
                    <Contents>
                      <LocationSelect />
                    </Contents>
                  </div>
                </div>
              </PostCreateGroup>

              <PostCreateGroup title="Addition">
                <Contents>
                  <RequestTextField />
                </Contents>
              </PostCreateGroup>
            </PostCreateFormLayout>
          </div>
        </CertifiCreate>
      )}
    </>
  );
}

const CertifiCreate = styled.div`
  width: 100%;
  box-sizing: border-box;
  background: ${({ theme }) => theme.main4};

  .body {
    width: 90%;
    max-width: 800px;
    margin: 0 auto;
  }

  .half {
    width: 48%;
  }

  .MuiFormLabel-root {
    margin-bottom: 4px;
    font-size: small;
  }
`;

const Contents = styled.div`
  padding-bottom: 40px;

  legend {
    display: flex;
  }

  .icon {
    color: #959595;
    width: 18px;
    height: auto;
    margin-right: 4px;
  }
`;
