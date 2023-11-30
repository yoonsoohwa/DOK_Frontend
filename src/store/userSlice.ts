import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { DogType, UserType, initDogType } from '../types';
import {initUserType } from '../types';

interface userSliceType {
  user: UserType;
  dog: DogType,
}

const initialState: userSliceType = {
  user: initUserType,
  dog: initDogType,
};

const user = createSlice({
  name: 'user', //이름
  initialState, //초기값
  reducers: {
    setUser: (state, action : PayloadAction<UserType>) => {
      state.user = action.payload;
    },
    setDog: (state, action : PayloadAction<DogType>) => {
      state.dog = action.payload;
    },
  },
});

export const { setUser, setDog } = user.actions;
export default user;
