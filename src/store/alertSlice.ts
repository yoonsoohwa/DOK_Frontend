import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface initialStateType {
  openAlertLogin: boolean;
  openCertification: boolean;
  isLoading: boolean;
  openEditAlert: boolean;
  openDeleteAlert: boolean;
  openModifyInfoAlert: boolean;
  openSuccessModifyInfoSnackbar: boolean;
  openErrorModifyInfoAlert: boolean;
}

const initialState: initialStateType = {
  openAlertLogin: false,
  openCertification: false,
  isLoading: true,
  openEditAlert: false,
  openDeleteAlert: false,
  openModifyInfoAlert: false,
  openSuccessModifyInfoSnackbar: false,
  openErrorModifyInfoAlert: false,
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
    setOpenModifyInfoAlert: (state, action: PayloadAction<boolean>) => {
      console.log(action.payload);
      state.openModifyInfoAlert = action.payload;
    },
    setOpenSuccessModifyInfoSnackbar: (state, action: PayloadAction<boolean>) => {
      state.openSuccessModifyInfoSnackbar = action.payload;
    },
    setOpenErrorModifyInfoAlert: (state, action: PayloadAction<boolean>) => {
      state.openErrorModifyInfoAlert = action.payload;
    },
  },
});

export const { setOpenAlertLogin, setIsLoading, setOpenEditAlert, setOpenDeleteAlert, setOpenModifyInfoAlert, setOpenSuccessModifyInfoSnackbar, setOpenErrorModifyInfoAlert } =
  alertSlice.actions;
export default alertSlice;
