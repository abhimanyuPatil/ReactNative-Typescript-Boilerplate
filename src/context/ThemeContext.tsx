import React, {createContext, ReactChild, useState} from 'react';
import {IColors, themeData} from '../config/theme';
type IThemeOptions = 'dark' | 'light';
interface IThemeContext {
  theme: IColors;
  changeTheme?: React.Dispatch<React.SetStateAction<IThemeOptions>>;
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
  return (
    <ThemeContext.Provider
      value={{theme: themeData[theme], changeTheme, themeName: theme}}>
      {props.children}
    </ThemeContext.Provider>
  );
};
