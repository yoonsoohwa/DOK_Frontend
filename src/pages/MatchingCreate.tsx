import { useState } from "react";
import { styled } from "styled-components";
import { ChatOutlined, LocationOn, Event, AccessTime, MonetizationOnOutlined, Pets } from "@mui/icons-material";
import { PostCreateFormLayout } from "common/PostCreateFormLayout";
import { AlertSnackbar } from "common/AlertSnackbar";
import { AlertSuccess } from "common/AlertSuccess";

import { DogSelect } from "../components/matching-create/DogSelect";
import { DateSelect } from "../components/matching-create/DateSelect";
import { DurationSelect } from "../components/matching-create/DurationSelect";
import { PaySelect } from "../components/matching-create/PaySelect";
import { RequestTextField } from "../components/matching-create/RequestTextField";
import { LocationSelect } from "../components/matching-create/Location";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "../store";
import { useNavigate } from "react-router";

export function MatchingCreatePage() {
  const { dogSelect, errorDogSelect, dateSelect, errorDateSelect, durationSelect, paySelect, errorPaySelect, requestText, location, locationDetail } = useSelector(
    (state: RootState) => state.matchingCreate
  );
  const dispatch = useDispatch<AppDispatch>();
  const [openError, setOpenError] = useState(false);
  const [openSubmit, setOpenSubmit] = useState(false);
  const navigate = useNavigate();

  const addPost = () => {
    // fetch("", {
    //   method: "POST",
    //   body: {
    //     dog: dogSelect,
    //   }
    // })
    navigate("/matching");
  };

  const handleSubmit = () => {
    if (errorDogSelect || errorDateSelect || errorPaySelect) {
      console.log(errorDogSelect, errorDateSelect, errorPaySelect);
      return setOpenError(true);
    }
    setOpenSubmit(true);
  };

  const handleReset = () => {
    throw new Error("Function not implemented.");
  };

  return (
    <CertifiCreate>
      <AlertSnackbar open={openError} onClose={() => setOpenError(false)} type="error" title="잘못된 데이터입니다." desc="작성한 값을 다시 확인해주세요." />
      <AlertSuccess open={openSubmit} onClose={() => setOpenSubmit(false)} onClick={addPost} title="글을 작성하시겠습니까?" />
      <div className="body">
        <PostCreateFormLayout title="매칭 신청하기" onSubmit={handleSubmit} onReset={handleReset}>
          <Contents>
            <Pets className="icon" />
            <div className="title">강아지</div>
            <div className="full-width">
              <DogSelect />
            </div>
          </Contents>

          <Contents>
            <Event className="icon" />
            <div className="title">산책 날짜</div>
            <DateSelect />
          </Contents>

          <Contents>
            <AccessTime className="icon" />
            <div className="title">산책 시간</div>
            <DurationSelect />
          </Contents>

          <Contents>
            <MonetizationOnOutlined className="icon" />
            <div className="title">가격</div>
            <PaySelect />
          </Contents>

          <Contents>
            <ChatOutlined className="icon" />
            <div className="title">요구사항</div>
            <div className="full-width">
              <RequestTextField />
            </div>
          </Contents>

          <Contents>
            <LocationOn className="icon" />
            <div className="title">만남 장소</div>
            <div className="full-width">
              <LocationSelect />
            </div>
          </Contents>
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
    max-width: 1024px;
    margin: 0 auto;
  }
`;

const Contents = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;

  .icon {
    color: #a0a0a0;
    width: 32px;
    height: 32px;
  }

  .title {
    width: 140px;
    font-size: 18px;
    margin: 8px 10px;
    flex-shrink: 0;
  }

  .full-width {
    width: 80%;
  }
`;
