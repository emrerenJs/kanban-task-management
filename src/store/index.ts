import { type PreloadedState, configureStore, combineReducers } from '@reduxjs/toolkit';
import themeReducer from '../features/theme/store/theme.store';

export const rootReducer = combineReducers({
  themeStore: themeReducer
});

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

export default setupStore;
