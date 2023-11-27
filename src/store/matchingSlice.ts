import { createSlice } from "@reduxjs/toolkit";
import { MatchingPostType } from "../types";

type type = {
  matchingPosts: MatchingPostType[];
  matchingDetailPost: MatchingPostType | null;
};

const initialState: type = {
  matchingPosts: [],
  matchingDetailPost: null,
};

const matchingSlice = createSlice({
  name: "matching",
  initialState,
  reducers: {
    addMatchingPosts: (state, action) => {
      state.matchingPosts.push(...action.payload);
    },
    setMatchingDetailPost: (state, action) => {
        state.matchingDetailPost = action.payload;
    }
  },
});

export const { addMatchingPosts, setMatchingDetailPost } = matchingSlice.actions;
export default matchingSlice;
