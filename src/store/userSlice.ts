import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { UserType } from '../types';
import {initUserType } from '../types';

interface userSliceType {
  user: UserType;
}

const initialState: userSliceType = {
  user: initUserType,
};

const user = createSlice({
  name: 'user', //이름
  initialState, //초기값
  reducers: {
    setUser: (state, action : PayloadAction<UserType>) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = user.actions;
export default user;
