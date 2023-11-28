import { configureStore } from "@reduxjs/toolkit";
import mainSlice from "./mainSlice";
import certificationSlice from "./certificationSlice";
import matchingCreateSlice from "./matchingCreateSlice";
import matchingSlice from "./matchingSlice";

const store = configureStore({
  reducer: {
    main: mainSlice.reducer,
    certification: certificationSlice.reducer,
    matching: matchingSlice.reducer,
    matchingCreate: matchingCreateSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
