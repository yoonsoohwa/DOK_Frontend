import { createSlice } from "@reduxjs/toolkit";
import { CertificationPostType } from "../types";

interface certificationSliceType {
  certificationPosts: CertificationPostType[];
  certificationDetailPost: CertificationPostType | null;
}

const initialState: certificationSliceType = {
  certificationPosts: [],
  certificationDetailPost: null,
};

const certificationSlice = createSlice({
  name: "certification", //이름
  initialState, //초기값
  reducers: {
    addCertificationPosts: (state, action) => {
      state.certificationPosts.push(...action.payload);
    },
    setCertificationDetail: (state, action) => {
      state.certificationDetailPost = action.payload;
    },
  },
});

export const { addCertificationPosts, setCertificationDetail } = certificationSlice.actions;
export default certificationSlice;
