import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { LightModes, type IThemeState, Themes, type ILightMode, type ITheme } from './types';
import { THEME_SLICE_NAME } from './constants';

export const initialState: IThemeState = {
  lightMode: LightModes.LIGHT,
  theme: Themes.KANBAN_THEME
};

export const themeSlice = createSlice({
  name: THEME_SLICE_NAME,
  initialState,
  reducers: {
    toggleLightMode: (state) => {
      state.lightMode = state.lightMode === LightModes.DARK ? LightModes.LIGHT : LightModes.DARK;
    },
    setLightMode: (state, action: PayloadAction<ILightMode>) => {
      state.lightMode = action.payload;
    },
    setTheme: (state, action: PayloadAction<ITheme>) => {
      state.theme = action.payload;
    }
  }
});

export const { toggleLightMode, setLightMode, setTheme } = themeSlice.actions;

const themeReducer = themeSlice.reducer;

export default themeReducer;
