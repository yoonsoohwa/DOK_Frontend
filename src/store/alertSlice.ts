import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface initialStateType {
  openAlertLogin: boolean;
  openCertification: boolean;
  isLoading: boolean;
  openEditAlert: boolean;
  openDeleteAlert: boolean;
}

const initialState: initialStateType = {
  openAlertLogin: false,
  openCertification: false,
  isLoading: true,
  openEditAlert: false,
  openDeleteAlert: false,
};

const alertSlice = createSlice({
  name: 'alert', //이름
  initialState, //초기값
  reducers: {
    setOpenAlertLogin: (state, action: PayloadAction<boolean>) => {
      state.openAlertLogin = action.payload;
    },
    setOpenCertification: (state, action: PayloadAction<boolean>) => {
      state.openCertification = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setOpenEditAlert: (state, action: PayloadAction<boolean>) => {
      state.openEditAlert = action.payload;
    },
    setOpenDeleteAlert: (state, action: PayloadAction<boolean>) => {
      state.openDeleteAlert = action.payload;
    },
  },
});

export const { setOpenAlertLogin, setIsLoading, setOpenEditAlert, setOpenDeleteAlert } = alertSlice.actions;
export default alertSlice;
