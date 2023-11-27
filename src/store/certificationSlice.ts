import { createSlice } from "@reduxjs/toolkit";
import { CertificationPostType } from "../types";

type type = {
  certificationPosts: CertificationPostType[];
  certificationDetailPostId: string;
};

const initialState: type = {
  certificationPosts: [],
  certificationDetailPostId: "",
};

const certificationSlice = createSlice({
  name: "certification", //이름
  initialState, //초기값
  reducers: {
    addCertificationPosts: (state, action) => {
      state.certificationPosts.push(...action.payload);
    },
    setCertificationDetailId: (state, action) => {
      state.certificationDetailPostId = action.payload;
    },
  },
});

export const { addCertificationPosts, setCertificationDetailId } = certificationSlice.actions;
export default certificationSlice;
