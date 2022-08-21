import React, { ReactNode, useContext } from "react";
import { ITheme } from "../helpers/types";

const ThemeContext = React.createContext<ITheme | {}>({});
export const MyThemeProvider = (props: {
  theme: { [key: string]: any };
  children: ReactNode | ReactNode[];
}) => (
  <ThemeContext.Provider value={props.theme}>
    {props.children}
  </ThemeContext.Provider>
);

export const useMyTheme = () => {
  const theme = useContext(ThemeContext);
  return theme;
};
