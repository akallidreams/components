import React, { useContext } from "react";
import { ITheme } from "../helpers/types";

const ThemeContext = React.createContext<ITheme | {}>({});
export const MyThemeProvider = ThemeContext.Provider;

export const useMyTheme = () => {
  const theme = useContext(ThemeContext);
  return theme;
};
