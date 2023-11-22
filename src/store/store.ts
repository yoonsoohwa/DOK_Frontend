import { configureStore } from "@reduxjs/toolkit";
import mainSlice from "./mainSlice";
import certificationSlice from "./certificationSlice";

const store = configureStore({
  reducer: {
    main: mainSlice.reducer,
    certification: certificationSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
