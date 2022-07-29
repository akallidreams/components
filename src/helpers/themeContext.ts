// TODO: use styled components to create the custom components

import React from "react";
import { IColors } from "./types";

export const initialTheme: IColors = {
  primary: "#261665",
  secondary: "#6A59AA",
  grey: "#ACACAC",
  greyLight: "#C5C5C5",
  greyDark: "#464646",
  white: "#FFFFFF",
  extra: {
    green: "#459EA8",
    greyExtraLight: "#F8F8F8",
  },
};

export const Theme = React.createContext<IColors>(initialTheme);
export const AkalliProvider = Theme.Provider;
