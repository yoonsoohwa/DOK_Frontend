import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { PostCreateFormLayout } from "../components/common/PostCreateForm";
import { ChatOutlined, LocationOn, MonetizationOn, MonetizationOnOutlined, Money, Pets } from "@mui/icons-material";
import { FormControl, FormControlLabel, FormLabel, Input, InputAdornment, InputLabel, MenuItem, Radio, RadioGroup, Select, SelectChangeEvent, TextField } from "@mui/material";
import { CalendarIcon, ClockIcon, DesktopDatePicker, DesktopDateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";

import { DogSelect } from "../components/matching-create/DogSelect";
import { DateSelect } from "../components/matching-create/DateSelect";
import { DurationSelect } from "../components/matching-create/DurationSelect";
import { PaySelect } from "../components/matching-create/PaySelect";
import { MultilineTextField } from "../components/matching-create/MultilineTextField";
import { LocationSelect } from "../components/matching-create/Location";

export function MatchingCreatePage() {
  return (
    <CertifiCreate>
      <div className="body">
        <PostCreateFormLayout title="매칭 신청하기">
          <Contents>
            <Pets className="icon" />
            <div className="title">강아지</div>
            <div className="field">
              <DogSelect />
            </div>
          </Contents>

          <Contents>
            <CalendarIcon className="icon" />
            <div className="title">산책 날짜</div>
            <DateSelect />
          </Contents>

          <Contents>
            <ClockIcon className="icon" />
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
            <div className="field">
              <MultilineTextField />
            </div>
          </Contents>

          <Contents>
            <LocationOn className="icon" />
            <div className="title">만남 장소</div>
            <div className="field">
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
    color: #3e3e3e;
    width: 38px;
    height: 38px;
  }

  .title {
    width: 100px;
    font-size: 20px;
    margin: 8px 10px;
  }

  .multiline {
    width: 80%;

    > div {
      margin-bottom: 10px;
    }
  }

  &:nth-child(6) {
    margin-bottom: 4px;
  }

  .field {
    width: 80%;
  }
`;
