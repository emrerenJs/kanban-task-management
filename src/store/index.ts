import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../features/theme/store';

const store = configureStore({
  reducer: {
    themeStore: themeReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
