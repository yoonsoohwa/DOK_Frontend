import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pets: [],
  matchingPosts: [],
  certificationPosts: [],
};

const mainSlice = createSlice({
  name: "main", //이름
  initialState, //초기값
  reducers: {
    setPets: (state, action) => {
      state.pets = action.payload;
    },
    setMatchingPosts: (state, action) => {
      state.matchingPosts = action.payload;
    },
    setCertificationPosts: (state, action) => {
      state.certificationPosts = action.payload;
    },
  },
});

export const { setPets, setMatchingPosts, setCertificationPosts } = mainSlice.actions;
export default mainSlice;
