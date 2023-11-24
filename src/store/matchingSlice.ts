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
  reducers: {},
});


export default matchingSlice;