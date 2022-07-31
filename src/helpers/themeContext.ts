// TODO: use styled components to create the custom components

import React from "react";
import { IColors, IFontSizes } from "./types";

interface ITheme {
  colors: IColors;
  fontSizes: IFontSizes;
}

export const initialTheme = {
  colors: {
    primary: "#261665",
    secondary: "#6A59AA",
    grey: "#ACACAC",
    greyLight: "#C5C5C5",
    greyDark: "#464646",
    white: "#FFFFFF",
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 26,
  },
};

export const Theme = React.createContext<ITheme>(initialTheme);
export const AkalliProvider = Theme.Provider;
