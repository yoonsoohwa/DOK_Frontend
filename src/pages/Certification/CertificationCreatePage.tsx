import React, { useState } from "react";
import { styled } from "styled-components";
import { PostCreateFormLayout } from "../../components/Common/Form/PostCreateForm";
import { Pets } from "@mui/icons-material";
import { FormControl, Input, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { CalendarIcon, DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";

export function CertificationCreatePage() {
  const [age, setAge] = React.useState("");
  const [area, setArea] = React.useState("집");
  const [date, setDate] = React.useState<Dayjs | null>(dayjs());
  const [open, setOpen] = React.useState(false);

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <CertifiCreate>
      <PostCreateFormLayout title="매칭 신청하기">
        <div>
          <Contents>
            <Pets className="icon" />
            <div className="title">강아지</div>
            <FormControl sx={{ m: 1, minWidth: 120, width: "100%" }}>
              <InputLabel id="demo-select-small-label">Age</InputLabel>
              <Select labelId="demo-select-small-label" id="demo-select-small" value={age} label="Age" onChange={handleChange}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Contents>

          <Contents>
            <CalendarIcon className="icon" />
            <div className="title">강아지</div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]} sx={{ width: "200px" }}>
                <DesktopDatePicker format="YYYY-MM-DD" label="날짜 선택" value={date} onChange={(newValue) => setDate(newValue)} slotProps={{ textField: { size: "small" } }} />
              </DemoContainer>
            </LocalizationProvider>
          </Contents>
        </div>
      </PostCreateFormLayout>
    </CertifiCreate>
  );
}

const CertifiCreate = styled.div`
  width: 100%;
  box-sizing: border-box;
  background: ${({ theme }) => theme.main4};
`;

const Contents = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;

  .icon {
    color: #3e3e3e;
    width: 48px;
    height: 48px;
  }

  .title {
    width: 100px;
    font-size: 20px;
    margin: 0 10px;
  }
`;
