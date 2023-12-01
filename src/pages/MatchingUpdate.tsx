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
import { AlertError } from 'common/alert/AlertError';
import { matchingFormUrl } from 'api/apiUrls';
import dateTimeFormat from '../utils/dateTimeFormat';
import durationTimeFormat from '../utils/durationTimeFormat';

export function MatchingUpdatePage() {
  const { dogSelect, errorDogSelect, dateSelect, errorDateSelect, durationSelect, paySelect, errorPaySelect, requestText, errorRequestText, locationSelect, locationDetailSelect } =
    useSelector((state: RootState) => state.matchingForm);
  const [initData, setInitData] = useState({ dogSelect, dateSelect, durationSelect, paySelect, requestText, locationSelect, locationDetailSelect });
  const dispatch = useDispatch<AppDispatch>();
  const [isForbidden, setIsForbidden] = useState(false);
  const [openError, setOpenError] = useState(false);
  const [validateText, setValidateText] = useState('');
  const [openSubmit, setOpenSubmit] = useState(false);
  const [openCancle, setOpenCancle] = useState(false);
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

    const res = await fetch(`${matchingFormUrl}/`, {
      method: 'POST',
      body: JSON.stringify(reqBody),
    });

    nav('/matching');
  };

  const handleSubmit = () => {
    if (errorDogSelect) {
      setValidateText('강아지를 선택해주세요.');
      return setOpenError(true);
    }
    if (errorDateSelect) {
      setValidateText('날짜를 다시 선택해주세요.');
      return setOpenError(true);
    }
    if (errorPaySelect) {
      setValidateText('알바 가격을 선택해주세요.');
      return setOpenError(true);
    }
    if (requestText && requestText?.length < 5) {
      setValidateText('요청 메시지를 작성해주세요.');
      return setOpenError(true);
    }
    setOpenSubmit(true);
  };

  const handleCancle = () => {
    nav('/matching');
  };

  const handleOpenCancle = () => {
    console.log(initData, dogSelect, dateSelect, durationSelect, paySelect, requestText, locationSelect, locationDetailSelect);
    if (
      dogSelect?._id !== initData.dogSelect?._id ||
      dateSelect !== initData.dateSelect ||
      durationSelect !== initData.durationSelect ||
      paySelect !== initData.paySelect ||
      requestText !== initData.requestText ||
      locationSelect?.code !== initData.locationSelect?.code ||
      locationDetailSelect !== initData.locationDetailSelect
    ) {
      return setOpenCancle(true);
    }
    handleCancle();
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
          <AlertSnackbar open={openError} onClose={() => setOpenError(false)} type="error" title="잘못된 입력" desc={validateText} />
          <AlertSuccess
            open={openSubmit}
            onClose={() => setOpenSubmit(false)}
            onClick={updatePost}
            title="글을 수정하시겠습니까?"
            desc={`${dogSelect?.dogName} | ${dateTimeFormat(dateSelect || '', 'date-time')} | ${durationTimeFormat(
              durationSelect,
            )} | ${paySelect}원\n요청 사항 : ${requestText}\n만남 위치 : ${locationSelect?.text} ${locationDetailSelect || ''}`}
          />
          <AlertError open={openCancle} onClose={() => setOpenCancle(false)} onClick={handleCancle} title="수정을 취소하시겠습니까?" desc="작성한 내용은 저장되지 않습니다." />

          <div className="body">
            <PostCreateFormLayout title="매칭 신청 수정하기" buttonText="수정하기" onSubmit={handleSubmit} onReset={handleOpenCancle}>
              <PostCreateGroup title="Pet">
                <Contents>
                  <DogSelect isUpdate={true} />
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
                  <RequestTextField isUpdate={true} />
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
