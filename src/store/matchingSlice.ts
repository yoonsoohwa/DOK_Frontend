import { createSlice } from '@reduxjs/toolkit';
import { MatchingPostType } from '../types';
import { RequestHandlerType } from '../types';
import { MatchingCommentType } from '../types';

type matchingType = {
  matchingPosts: MatchingPostType[];
  matchingDetailPost: MatchingPostType | null;
  requestHandlers: RequestHandlerType[];
  selectedHandler: RequestHandlerType | null;
  matchingComments: MatchingCommentType[];
};

const initialState: matchingType = {
  matchingPosts: [],
  matchingDetailPost: null,
  requestHandlers: [],
  selectedHandler: null,
  matchingComments: [],
};

const matchingSlice = createSlice({
  name: 'matching',
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
    },
    setMatchingComments: (state, action) => {
      state.matchingComments = action.payload;
    },
    addMatchingComment: (state, action) => {
      state.matchingComments.push(...action.payload);
    },
  },
});

export const { addMatchingPosts, setMatchingDetailPost, setRequestHandlers, setSelectedHandler, setMatchingComments, addMatchingComment } = matchingSlice.actions;
export default matchingSlice;
