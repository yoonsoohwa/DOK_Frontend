import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { MypageDogType, MypageUserType, initMypageUserType } from '../types';


interface MypageUserSliceType {
  mypageUser: MypageUserType;
  mypageDog: MypageDogType[],
  mypageSelectedImg: string | ''
}

const initialState: MypageUserSliceType = {
    mypageUser: initMypageUserType,
    mypageDog: [],
    mypageSelectedImg: '',
};

const mypageUser = createSlice({
  name: 'mypageUser', //이름
  initialState, //초기값
  reducers: {
    setMypageUser: (state, action : PayloadAction<MypageUserType>) => {
      state.mypageUser = action.payload;
    },
    setMypageDog: (state, action : PayloadAction<MypageDogType[]>) => {
      state.mypageDog = action.payload;
    },
    setMypageSelectedImg: (state, action) => {
        state.mypageSelectedImg = action.payload;
    },
  },
});

export const { setMypageUser, setMypageDog, setMypageSelectedImg } = mypageUser.actions;
export default mypageUser;
