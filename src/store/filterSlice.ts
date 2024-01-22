import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface initialStateType {
  filter: {
    locationCode: string | undefined;
    walkingTime: string | undefined;
  };
}

const initialState: initialStateType = {
  filter: {
    locationCode: '',
    walkingTime: '',
  },
};

const filterSlice = createSlice({
  name: 'filter', //이름
  initialState, //초기값
  reducers: {
    setFilter: (state, action: PayloadAction<initialStateType['filter']>) => {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export default filterSlice;
