import { createSlice } from '@reduxjs/toolkit';
import { MatchingPostType } from '../types';
import { RequestHandlerType } from '../types';
import { MatchingCommentType } from '../types';

type matchingType = {
  matchingPosts: MatchingPostType[];
  matchingPostsCount: number | undefined;
  matchingDetailPost: MatchingPostType | null;
  requestHandlers: RequestHandlerType[];
  selectedHandler: RequestHandlerType | null;
  matchingComments: MatchingCommentType[];
};

const initialState: matchingType = {
  matchingPosts: [],
  matchingPostsCount: undefined,
  matchingDetailPost: null,
  requestHandlers: [],
  selectedHandler: null,
  matchingComments: [],
};

const matchingSlice = createSlice({
  name: 'matching',
  initialState,
  reducers: {
    resetMatchingPosts: (state) => {
      state.matchingPosts = [];
    },
    addMatchingPosts: (state, action) => {
      state.matchingPosts.push(...action.payload);
    },
    setMatchingPostCount: (state, action) => {
      state.matchingPostsCount = action.payload;
    },
    setMatchingDetailPost: (state, action) => {
      state.matchingDetailPost = action.payload;
    },
    setRequestHandlers: (state, action) => {
      state.requestHandlers = action.payload;
    },
    setSelectedHandler: (state, action) => {
      state.selectedHandler = action.payload;
    },
    setMatchingComments: (state, action) => {
      state.matchingComments = action.payload;
    },
    addMatchingComment: (state, action) => {
      state.matchingComments.push(...action.payload);
    },
  },
});

export const {
  resetMatchingPosts,
  setMatchingPostCount,
  addMatchingPosts,
  setMatchingDetailPost,
  setRequestHandlers,
  setSelectedHandler,
  setMatchingComments,
  addMatchingComment,
} = matchingSlice.actions;
export default matchingSlice;
