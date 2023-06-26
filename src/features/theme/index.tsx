import { useEffect, type ReactNode } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import clsx from 'clsx';
import { setLightMode } from './store';
import { LightModes } from './store/types';
import './style.scss';

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const { theme, lightMode } = useAppSelector((state) => state.themeStore);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const systemLightModeListener = (event: MediaQueryListEvent) => {
      const newLightMode = event.matches ? LightModes.DARK : LightModes.LIGHT;
      dispatch(setLightMode(newLightMode));
    };

    dispatch(
      setLightMode(
        window.matchMedia('(prefers-color-scheme: dark)').matches
          ? LightModes.DARK
          : LightModes.LIGHT
      )
    );

    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', systemLightModeListener);
    return () => {
      window
        .matchMedia('(prefers-color-scheme: dark')
        .removeEventListener('change', systemLightModeListener);
    };
  }, [window.matchMedia]);

  return <div className={clsx('design-root', theme, lightMode)}>{children}</div>;
};

export default ThemeProvider;
