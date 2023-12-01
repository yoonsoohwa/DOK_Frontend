import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface initialStateType {
  openAlertLogin: boolean;
  openCertification: boolean;
  isLoading: boolean;
}

const initialState: initialStateType = {
  openAlertLogin: false,
  openCertification: false,
  isLoading: true,
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
  },
});

export const { setOpenAlertLogin, setIsLoading } = alertSlice.actions;
export default alertSlice;
