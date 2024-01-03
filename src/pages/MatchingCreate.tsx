import { useState, useEffect } from 'react';
import { styled } from 'styled-components';
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

import { AppDispatch, RootState, setOpenAlertLogin } from '../store';
import { useNavigate } from 'react-router';
import { PostCreateGroup } from 'common/create-page/PostCreateGroup';
import dayjs from 'dayjs';
import { AlertError } from 'common/alert/AlertError';
import { matchingFormUrl } from 'api/apiUrls';
import { AlertLogin } from 'common/alert/AlertLogin';
import dateTimeFormat from '../utils/dateTimeFormat';
import durationTimeFormat from '../utils/durationTimeFormat';
import { MatchingPostType } from 'src/types';

export function MatchingCreatePage() {
  const { dogSelect, errorDogSelect, dateSelect, errorDateSelect, durationSelect, paySelect, errorPaySelect, requestText, errorRequestText, locationSelect, locationDetailSelect } =
    useSelector((state: RootState) => state.matchingForm);
  const { user: _user } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch<AppDispatch>();
  const [initData, setInitData] = useState({ dateSelect, durationSelect, paySelect, locationSelect });
  const [openError, setOpenError] = useState<boolean>(false);
  const [validateText, setValidateText] = useState<string>('');
  const [openDogError, setOpenDogError] = useState<boolean>(false);
  const [openSubmit, setOpenSubmit] = useState<boolean>(false);
  const [openCancle, setOpenCancle] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const reqBody = {
      userDog: dogSelect?._id,
      price: paySelect,
      location: locationSelect,
      locationDetail: locationDetailSelect,
      walkingDate: dayjs(dateSelect).format('YYYY-MM-DDTHH:mm:ss.000'),
      walkingDuration: durationSelect,
      requestText,
    };

    const res = await fetch(`/api/matchingRequestRouter/matchingRequest`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(reqBody),
    });

    const data = await res.json();

    navigate('/matching');
  };

  const handleCancle = () => {
    navigate('/matching');
  };

  const handleOpenSubmit = () => {
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
    if (errorRequestText) {
      setValidateText('요청 메시지를 작성해주세요.');
      return setOpenError(true);
    }
    setOpenSubmit(true);
  };

  const handleOpenCancle = () => {
    if (
      dogSelect ||
      dateSelect !== initData.dateSelect ||
      durationSelect !== initData.durationSelect ||
      paySelect !== initData.paySelect ||
      requestText ||
      locationSelect !== initData.locationSelect ||
      locationDetailSelect
    ) {
      return setOpenCancle(true);
    }
    handleCancle();
  };

  const handleGoToMypage = () => {
    navigate('/mypage');
  };

  useEffect(() => {
    // 로그인 했는지 확인
    if (!_user._id) {
      dispatch(setOpenAlertLogin(true));
      return;
    }

    // 유저에게 강아지가 없는지 확인
    (async () => {
      const res = await fetch(`${matchingFormUrl}/doginformation/${_user._id}`);
      const data = await res.json();
      if (!data.length) {
        setOpenDogError(true);
      }
    })();
  }, []);

  return (
    <CertifiCreate>
      {!_user._id && <AlertLogin isBack={true} />}
      <AlertSnackbar open={openError} onClose={() => setOpenError(false)} type="error" title="잘못된 입력" desc={validateText} />
      <AlertSuccess
        open={openSubmit}
        onClose={() => setOpenSubmit(false)}
        onClick={handleSubmit}
        title="글을 작성하시겠습니까?"
        desc={`${dogSelect?.dogName} | ${dateTimeFormat(dateSelect || '', 'date-time')} | ${durationTimeFormat(
          durationSelect,
        )} | ${paySelect}원\n요청 사항 : ${requestText}\n만남 위치 : ${locationSelect?.text} ${locationDetailSelect || ''}`}
      />
      <AlertError open={openCancle} onClose={() => setOpenCancle(false)} onClick={handleCancle} title="정말 취소하시겠습니까?" desc="작성한 내용은 저장되지 않습니다." />
      <AlertError
        open={openDogError}
        onClose={() => {
          setOpenDogError(false);
          return navigate(-1);
        }}
        onClick={handleGoToMypage}
        title="등록된 강아지가 없습니다."
        desc="마이페이지에서 강아지를 등록한 후 이용해주세요."
        buttonText="강아지 등록하기"
      />

      <div className="body">
        <PostCreateFormLayout title="매칭 신청하기" onSubmit={handleOpenSubmit} onReset={handleOpenCancle}>
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
