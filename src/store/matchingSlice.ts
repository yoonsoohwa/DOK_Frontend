import { createSlice } from "@reduxjs/toolkit";
import { MatchingPostType } from "../types";
import { RequestHandlerType } from "../types";

type type = {
  matchingPosts: MatchingPostType[];
  matchingDetailPost: MatchingPostType | null;
  requestHandlers: RequestHandlerType[];
  selectedHandler: RequestHandlerType | null;
};

const initialState: type = {
  matchingPosts: [],
  matchingDetailPost: null,
  requestHandlers: [],
  selectedHandler: null
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
    },
    setRequestHandlers: (state, action) => {
        state.requestHandlers = action.payload;
    },
    setSelectedHandler: (state, action) => {
        state.selectedHandler = action.payload;
    }
  },
});

export const { addMatchingPosts, setMatchingDetailPost, setRequestHandlers, setSelectedHandler } = matchingSlice.actions;
export default matchingSlice;
