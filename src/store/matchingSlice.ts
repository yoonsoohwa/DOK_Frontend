import { createSlice } from '@reduxjs/toolkit';
import { MatchingPostType } from '../types';
import { RequestHandlerType } from '../types';

type matchingType = {
  matchingPosts: MatchingPostType[];
  matchingDetailPost: MatchingPostType | null;
  requestHandlers: RequestHandlerType[];
  selectedHandler: RequestHandlerType | null;
  filter: {
    locationCode: string | undefined;
    walkingDate: string | undefined;
  };
};

const initialState: matchingType = {
  matchingPosts: [],
  matchingDetailPost: null,
  requestHandlers: [],
  selectedHandler: null,
  filter: {
    locationCode: '',
    walkingDate: '',
  },
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
    setMatchingDetailPost: (state, action) => {
      state.matchingDetailPost = action.payload;
    },
    setRequestHandlers: (state, action) => {
      state.requestHandlers = action.payload;
    },
    setSelectedHandler: (state, action) => {
      state.selectedHandler = action.payload;
    },
    setMatchingPostsFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { resetMatchingPosts, addMatchingPosts, setMatchingDetailPost, setRequestHandlers, setSelectedHandler, setMatchingPostsFilter } = matchingSlice.actions;
export default matchingSlice;
