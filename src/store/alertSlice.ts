import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface initialStateType {
  openAlertLogin: boolean;
  openCertification: boolean;
  isLoading: boolean;
  openEditAlert: boolean;
  openDeleteAlert: boolean;
  openModifyInfoAlert: {
    isOpen: boolean;
    type?: 'info' | 'password';
  };
  openSuccessModifyInfoSnackbar: {
    isOpen: boolean;
    type?: 'info' | 'password';
  };
  openErrorModifyInfoAlert: {
    isOpen: boolean;
    type?: 'info' | 'password';
  };
}

const initialState: initialStateType = {
  openAlertLogin: false,
  openCertification: false,
  isLoading: true,
  openEditAlert: false,
  openDeleteAlert: false,
  openModifyInfoAlert: {
    isOpen: false,
    type: 'info',
  },
  openSuccessModifyInfoSnackbar: {
    isOpen: false,
    type: 'info',
  },
  openErrorModifyInfoAlert: {
    isOpen: false,
    type: 'info',
  },
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
    setOpenModifyInfoAlert: (state, action: PayloadAction<{ isOpen: boolean; type?: 'info' | 'password' }>) => {
      if (action.payload.type) {
        state.openModifyInfoAlert = action.payload;
      } else {
        state.openModifyInfoAlert = { ...state.openModifyInfoAlert, isOpen: action.payload.isOpen };
      }
    },
    setOpenSuccessModifyInfoSnackbar: (state, action: PayloadAction<{ isOpen: boolean; type?: 'info' | 'password' }>) => {
      if (action.payload.type) {
        state.openSuccessModifyInfoSnackbar = action.payload;
      } else {
        state.openSuccessModifyInfoSnackbar = { ...state.openSuccessModifyInfoSnackbar, isOpen: action.payload.isOpen };
      }
    },
    setOpenErrorModifyInfoAlert: (state, action: PayloadAction<{ isOpen: boolean; type?: 'info' | 'password' }>) => {
      if (action.payload.type) {
        state.openErrorModifyInfoAlert = action.payload;
      } else {
        state.openErrorModifyInfoAlert = { ...state.openErrorModifyInfoAlert, isOpen: action.payload.isOpen };
      }
    },
  },
});

export const { setOpenAlertLogin, setIsLoading, setOpenEditAlert, setOpenDeleteAlert, setOpenModifyInfoAlert, setOpenSuccessModifyInfoSnackbar, setOpenErrorModifyInfoAlert } =
  alertSlice.actions;
export default alertSlice;
