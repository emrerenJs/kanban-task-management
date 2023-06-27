export enum LightModes {
  DARK = 'dark',
  LIGHT = 'light'
}

export enum Themes {
  KANBAN_THEME = 'kanban-theme'
}

export type ILightMode = `${LightModes}`;
export type ITheme = `${Themes}`;

export interface IThemeState {
  lightMode: ILightMode;
  theme: ITheme;
}
