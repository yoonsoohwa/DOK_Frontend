import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface initialStateType {
  openAlertLogin: boolean;
}

const initialState: initialStateType = {
  openAlertLogin: false,
};

const alertSlice = createSlice({
  name: 'alert', //이름
  initialState, //초기값
  reducers: {
    setOpenAlertLogin: (state, action: PayloadAction<boolean>) => {
      state.openAlertLogin = action.payload;
    },
  },
});

export const { setOpenAlertLogin } = alertSlice.actions;
export default alertSlice;
