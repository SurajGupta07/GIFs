import React, {
  useState,
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
} from 'react';
import {theme} from '../theme';
import {ETHEME} from '../types/enums';

interface Theme {
  backgroundColor: string;
  textColor: string;
  colorTheme: string;
  setColorTheme: Dispatch<SetStateAction<ETHEME>>;
}

type TThemeChildren = {
  children: React.ReactNode;
};

export const ThemeContext = createContext<Theme>({} as Theme);

export const ThemeProvider = ({children}: TThemeChildren) => {
  const [colorTheme, setColorTheme] = useState(ETHEME.LIGHT_MODE);

  const backgroundColor =
    colorTheme === ETHEME.LIGHT_MODE
      ? theme.palette.white.main
      : theme.palette.black.main;
  const textColor =
    colorTheme === ETHEME.LIGHT_MODE
      ? theme.palette.black.main
      : theme.palette.white.main;

  return (
    <ThemeContext.Provider
      value={{backgroundColor, textColor, colorTheme, setColorTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export function useTheme() {
  return useContext(ThemeContext);
}
