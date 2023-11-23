import { createSlice } from "@reduxjs/toolkit";
import { CertificationPostType, DogType } from "../types";
import { Dayjs } from "dayjs";
import { duration } from "@mui/material";

type type = {
  dogSelect: DogType | null;
  dateSelect: Date | null;
  durationSelect: 0.5 | 1 | 1.5 | 2;
  paySelect: Number;
  requestText: string;
  location: string;
  locationDetail: string;
};

const initialState: type = {
  dogSelect: null,
  dateSelect: null,
  durationSelect: 0.5,
  paySelect: 0.5 * 9860,
  requestText: "",
  location: "",
  locationDetail: "",
};

const matchingCreateSlice = createSlice({
  name: "matchingCreate", //이름
  initialState, //초기값
  reducers: {
    setDogSelect: (state, action) => {
      state.dogSelect = action.payload;
    },
    setDateSelect: (state, action) => {
      state.dateSelect = action.payload;
    },
    setDurationSelect: (state, action) => {
      state.durationSelect = action.payload;
    },
    setPaySelect: (state, action) => {
      state.paySelect = action.payload;
    },
    setRequestText: (state, action) => {
      state.requestText = action.payload;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setLocationDetail: (state, action) => {
      state.locationDetail = action.payload;
    },
  },
});

export const { setDogSelect, setDateSelect, setDurationSelect, setPaySelect, setRequestText, setLocation, setLocationDetail } = matchingCreateSlice.actions;
export default matchingCreateSlice;
