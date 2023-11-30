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

import { AppDispatch, RootState, resetMatchingSelect, setOpenAlertLogin } from '../store';
import { useNavigate } from 'react-router';
import { PostCreateGroup } from 'common/create-page/PostCreateGroup';
import dayjs from 'dayjs';
import { AlertError } from 'common/alert/AlertError';
import { matchingFormUrl } from 'api/apiUrls';
import { AlertLogin } from 'common/alert/AlertLogin';

export function MatchingCreatePage() {
  const { dogSelect, errorDogSelect, dateSelect, errorDateSelect, durationSelect, paySelect, errorPaySelect, requestText, locationSelect, locationDetailSelect } = useSelector(
    (state: RootState) => state.matchingForm,
  );
  const { user: _user } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch<AppDispatch>();
  const [initData, setInitData] = useState({ dateSelect, durationSelect, paySelect, locationSelect });
  const [openError, setOpenError] = useState(false);
  const [openDogError, setOpenDogError] = useState(false);
  const [openSubmit, setOpenSubmit] = useState(false);
  const [openCancle, setOpenCancle] = useState(false);
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

    const res = await fetch(`${matchingFormUrl}/matchingRequest/${_user._id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(reqBody),
    });

    const data = await res.json();
    console.log(data);

    navigate('/matching');
  };

  const handleCancle = () => {
    navigate('/matching');
  };

  const handleOpenSubmit = () => {
    if (errorDogSelect || errorDateSelect || errorPaySelect) {
      console.log(errorDogSelect, errorDateSelect, errorPaySelect);
      return setOpenError(true);
    }
    setOpenSubmit(true);
  };

  const handleOpenCancle = () => {
    console.log(initData, dogSelect, errorDogSelect, dateSelect, errorDateSelect, durationSelect, paySelect, errorPaySelect, requestText, locationSelect, locationDetailSelect);
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
    }

    // 유저에게 강아지가 없는지 확인
    (async () => {
      const res = await fetch(`${matchingFormUrl}/doginformation/${_user._id}`);
      const data = await res.json();
      console.log(data);
      if (!data.length) {
        setOpenDogError(true);
      }
    })();
  }, []);

  return (
    <CertifiCreate>
      <AlertLogin isBack={true} />
      <AlertSnackbar open={openError} onClose={() => setOpenError(false)} type="error" title="잘못된 데이터입니다." desc="작성한 값을 다시 확인해주세요." />
      <AlertSuccess
        open={openSubmit}
        onClose={() => setOpenSubmit(false)}
        onClick={handleSubmit}
        title="글을 작성하시겠습니까?"
        desc={`${dogSelect?.dogName} | ${dateSelect} | ${durationSelect} | ${paySelect}\n요청 사항 : ${requestText}\n만남 위치 : ${locationSelect}\n상세 위치 : ${locationDetailSelect}`}
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
