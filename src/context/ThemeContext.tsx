import React, {createContext, ReactChild, useCallback, useState} from 'react';
import {IColors, themeData} from '../config/theme';
type IThemeOptions = 'dark' | 'light';
interface IThemeContext {
  theme: IColors;
  changeTheme?: React.Dispatch<React.SetStateAction<IThemeOptions>>;
  toggleTheme?: () => void;
  themeName: IThemeOptions;
}
export const ThemeContext = createContext<IThemeContext>({
  theme: themeData['dark'],
  themeName: 'dark',
});
interface IThemeProvider {
  children: ReactChild;
}
export const ThemeProvider = (props: IThemeProvider) => {
  const [theme, changeTheme] = useState<IThemeOptions>('dark');
  const toggleTheme = useCallback(
    () => changeTheme(theme === 'dark' ? 'light' : 'dark'),
    [theme],
  );
  return (
    <ThemeContext.Provider
      value={{
        theme: themeData[theme],
        changeTheme,
        themeName: theme,
        toggleTheme,
      }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
