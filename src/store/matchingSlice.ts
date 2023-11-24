import { createSlice } from "@reduxjs/toolkit";
import { MatchingPostType } from "../types";

type type = {
  matchingPosts: MatchingPostType[];
};

const initialState: type = {
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
