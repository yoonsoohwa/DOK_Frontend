import { createSlice } from "@reduxjs/toolkit";
import { MatchingPostType } from "../types";

type matchingType = {
  matchingPosts: MatchingPostType[];
};

const initialState: matchingType = {
  matchingPosts: [],
};

const matchingSlice = createSlice({
  name: "matching",
  initialState,
  reducers: {
    addMatchingPosts: (state, action) => {
      state.matchingPosts.push(...action.payload);
    },
  },
});

export const { addMatchingPosts } = matchingSlice.actions;
export default matchingSlice;
