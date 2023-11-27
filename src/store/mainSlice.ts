import { createSlice } from "@reduxjs/toolkit";
import { CertificationPostType, DogType, MatchingPostType } from "../types";

interface initialStateType {
  dogs: DogType[];
  matchingPosts: MatchingPostType[];
  certificationPosts: CertificationPostType[];
}

const initialState: initialStateType = {
  dogs: [],
  matchingPosts: [],
  certificationPosts: [],
};

const mainSlice = createSlice({
  name: "main", //이름
  initialState, //초기값
  reducers: {
    setMainDogs: (state, action) => {
      state.dogs = action.payload;
    },
    setMainMatchingPosts: (state, action) => {
      state.matchingPosts = action.payload;
    },
    setMainCertificationPosts: (state, action) => {
      state.certificationPosts = action.payload;
    },
  },
});

export const { setMainDogs, setMainMatchingPosts, setMainCertificationPosts } = mainSlice.actions;
export default mainSlice;
