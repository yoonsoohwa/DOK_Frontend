import { useState } from "react";
import { styled } from "styled-components";
import { ChatOutlined, Info, AddBox, LocationOn, Event, AccessTime, MonetizationOnOutlined, Pets } from "@mui/icons-material";
import { PostCreateFormLayout } from "common/create-page/PostCreateFormLayout";
import { AlertSnackbar } from "common/alert/AlertSnackbar";
import { AlertSuccess } from "common/alert/AlertSuccess";

import { DogSelect } from "../components/matching-create/DogSelect";
import { DateSelect } from "../components/matching-create/DateSelect";
import { DurationSelect } from "../components/matching-create/DurationSelect";
import { PaySelect } from "../components/matching-create/PaySelect";
import { RequestTextField } from "../components/matching-create/RequestTextField";
import { LocationSelect } from "../components/matching-create/LocationSelect";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "../store";
import { useNavigate } from "react-router";
import { PostCreateGroup } from "common/create-page/PostCreateGroup";

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
      <AlertSuccess
        open={openSubmit}
        onClose={() => setOpenSubmit(false)}
        onClick={addPost}
        title="글을 작성하시겠습니까?"
        desc={`강아지 : ${dogSelect?.dogName}\n산책 날짜 : ${dateSelect}\n산책 시간 : ${durationSelect}\n가격 : ${paySelect}\n요청 사항 : ${requestText}\n만남 위치 : ${location}\n상세 위치 : ${locationDetail}`}
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
