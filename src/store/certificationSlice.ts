import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CertificationPostType, initCertificationPostType } from '../types';

interface certificationSliceType {
  certificationPosts: CertificationPostType[];
  certificationDetailPost: CertificationPostType;
}

const initialState: certificationSliceType = {
  certificationPosts: [],
  certificationDetailPost: initCertificationPostType,
};

const certificationSlice = createSlice({
  name: 'certification', //이름
  initialState, //초기값
  reducers: {
    addCertificationPosts: (state, action: PayloadAction<CertificationPostType[]>) => {
      state.certificationPosts.push(...action.payload);
    },
    setCertificationDetailId: (state, action: PayloadAction<CertificationPostType>) => {
      state.certificationDetailPost = action.payload;
    },
  },
});

export const { addCertificationPosts, setCertificationDetailId } = certificationSlice.actions;
export default certificationSlice;
