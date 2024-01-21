import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { MatchingBookmarkType, MatchingPostType } from '../types';
import { RequestHandlerType } from '../types';
import { MatchingCommentType } from '../types';

type matchingType = {
  matchingPosts: MatchingPostType[];
  matchingPostsCount: number | undefined;
  matchingDetailPost: MatchingPostType | null;
  requestHandlers: RequestHandlerType[];
  selectedHandler: RequestHandlerType | null;
  matchingComments: MatchingCommentType[];
  matchingPostEditId: string;
  isOpenCommentInput: { [key: string]: boolean };
  matchingBookmark: MatchingBookmarkType[];
};

const initialState: matchingType = {
  matchingPosts: [],
  matchingPostsCount: undefined,
  matchingDetailPost: null,
  requestHandlers: [],
  selectedHandler: null,
  matchingComments: [],
  matchingPostEditId: '',
  isOpenCommentInput: {},
  matchingBookmark: [],
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
    updateMatchingStatus: (state, action) => {
      const post = state.matchingPosts.find((post) => post._id === action.payload);
      post && (post.matchingStatus = 'completed');
    },
    setMatchingComments: (state, action) => {
      state.matchingComments = action.payload;
    },
    addMatchingComment: (state, action) => {
      state.matchingComments.unshift(action.payload);
    },
    deleteMatchingComment: (state, action) => {
      state.matchingComments = state.matchingComments.filter((comment) => comment._id !== action.payload);
    },
    setMatchingPostEditId: (state, action) => {
      state.matchingPostEditId = action.payload;
    },
    updateMatchingComment: (state, action) => {
      const { commentId, commentData } = action.payload;
      const commentIdx = state.matchingComments.findIndex((comment) => comment._id === commentId);
      state.matchingComments.splice(commentIdx, 1, commentData);
    },
    setIsOpenCommentInput: (state, action) => {
      state.isOpenCommentInput[action.payload] = false;
    },
    toggleIsOpenCommentInput: (state, action) => {
      state.isOpenCommentInput[action.payload] = !state.isOpenCommentInput[action.payload];
    },
    deleteIsOpenCommentInput: (state, action) => {
      delete state.isOpenCommentInput[action.payload];
    },
    setMatchingBookmark: (state, action : PayloadAction<MatchingBookmarkType[]>) => {
      state.matchingBookmark = action.payload;
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
  updateMatchingStatus,
  deleteMatchingComment,
  setMatchingPostEditId,
  updateMatchingComment,
  setIsOpenCommentInput,
  toggleIsOpenCommentInput,
  deleteIsOpenCommentInput,
  setMatchingBookmark,  
} = matchingSlice.actions;
export default matchingSlice;
