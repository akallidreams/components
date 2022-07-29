import { ReactNode } from "react";
import { Theme } from "./themeContext";

interface IProps {
  Component: (theme: {}) => ReactNode;
}

export const HOCTheme = ({ Component, ...props }: IProps) => (
  <Theme.Consumer>
    {(theme) => <Component theme={theme} {...props} />}
  </Theme.Consumer>
);
