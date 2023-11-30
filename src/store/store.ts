import { configureStore } from '@reduxjs/toolkit';
import mainSlice from './mainSlice';
import certificationSlice from './certificationSlice';
import matchingFormSlice from './matchingCreateSlice';
import matchingSlice from './matchingSlice';
import userSlice from './userSlice';

const store = configureStore({
  reducer: {
    main: mainSlice.reducer,
    certification: certificationSlice.reducer,
    matching: matchingSlice.reducer,
    matchingForm: matchingFormSlice.reducer,
    user : userSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
