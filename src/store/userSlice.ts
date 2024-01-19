import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { DogType, UserType, initDogType, initUserType } from '../types';

interface userSliceType {
  user: UserType;
  dog: DogType[],
  selectedImg: string | ''
}

const initialState: userSliceType = {
  user: initUserType,
  // dog: initDogType,
  dog: [],
  selectedImg: '',
};

const user = createSlice({
  name: 'user', //이름
  initialState, //초기값
  reducers: {
    setUser: (state, action : PayloadAction<UserType>) => {
      state.user = action.payload;
    },
    setDog: (state, action : PayloadAction<DogType[]>) => {
      state.dog = action.payload;
    },
    setSelectedImg: (state, action) => {
        state.selectedImg = action.payload;
    }
  },
});

export const { setUser, setDog, setSelectedImg } = user.actions;
export default user;
